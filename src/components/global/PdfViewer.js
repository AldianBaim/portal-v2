import React, { useEffect, useState, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import styles from "./PdfViewer.module.scss";
import Spinner from "./Spinner";

// Update the worker configuration at the top of the file
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// Or if you prefer using unpkg
// pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

const MOBILE_BREAKPOINT = 600;
const TABLET_BREAKPOINT = 1024;

const PdfViewer = ({ url }) => {
  const canvasRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(0.5);

  useEffect(() => {
    loadPDF();
  }, [url]);

  useEffect(() => {
    if (pdfDoc) {
      renderPage();
    }
  }, [pageNum, pdfDoc, zoom]);

  useEffect(() => {
    const handleResize = () => {
      renderPage();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pdfDoc, pageNum]);

  const loadPDF = async () => {
    try {
      const uniqueUrl = `${url}?t=${new Date().getTime()}`;
      const loadingTask = pdfjsLib.getDocument({ url: uniqueUrl });
      const pdf = await loadingTask.promise;
      setPdfDoc(pdf);
      setPageCount(pdf.numPages);
      setLoading(false);
      setPageNum(1);
    } catch (error) {
      console.error("Error loading PDF:", error);
      setLoading(false);
    }
  };

  const getViewportScale = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < MOBILE_BREAKPOINT) {
      return 1;
    } else if (screenWidth < TABLET_BREAKPOINT) {
      return 1.3;
    } else {
      return 2.4;
    }
  };

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  const renderPage = async () => {
    if (!pdfDoc || !canvasRef.current) return;

    const page = await pdfDoc.getPage(pageNum);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const dpr = window.devicePixelRatio || 1;
    const bsr =
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1;
    const ratio = dpr / bsr;

    const baseScale = getViewportScale();
    const finalScale = baseScale * zoom;
    const originalViewport = page.getViewport({ scale: finalScale });

    canvas.width = originalViewport.width * ratio;
    canvas.height = originalViewport.height * ratio;
    canvas.style.width = `${originalViewport.width}px`;
    canvas.style.height = `${originalViewport.height}px`;

    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const renderContext = {
      canvasContext: context,
      viewport: originalViewport,
    };

    try {
      await page.render(renderContext);
    } catch (error) {
      console.error("Error rendering page:", error);
    }
  };

  const prevPage = () => {
    if (pageNum <= 1) return;
    setPageNum(pageNum - 1);
  };

  const nextPage = () => {
    if (pageNum >= pageCount) return;
    setPageNum(pageNum + 1);
  };

  return (
    <div className={styles["pdf-viewer"]}>
      {loading ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Spinner />
          <p>Sedang memuat berkas buku</p>
        </div>
      ) : (
        <>
          <div className="position-relative">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-secondary">
                Page {pageNum} of {pageCount}
              </span>
              <div className="zoom-controls">
                <button
                  className="btn btn-sm btn-secondary me-1"
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                >
                  -
                </button>
                <button className="btn btn-sm btn-secondary me-1" onClick={handleResetZoom}>
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={handleZoomIn}
                  disabled={zoom >= 3}
                >
                  +
                </button>
              </div>
            </div>
            <div className="canvas-container text-center" style={{ overflow: "auto" }}>
              <button
                className="btn btn-sm btn-primary position-absolute start-0 top-50 translate-middle-y"
                onClick={prevPage}
                disabled={pageNum <= 1}
                style={{ zIndex: 1000 }}
              >
                &lt;
              </button>
              <button
                className="btn btn-sm btn-primary position-absolute end-0 top-50 translate-middle-y"
                onClick={nextPage}
                disabled={pageNum >= pageCount}
                style={{ zIndex: 1000 }}
              >
                &gt;
              </button>
              <canvas ref={canvasRef}></canvas>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PdfViewer;