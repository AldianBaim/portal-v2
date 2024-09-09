import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroDetail from "../../components/catalog/hero/HeroDetail/HeroDetail";
import SectionAudioPlayer from "../../components/catalog/sections/SectionAudioPlayer/SectionAudioPlayer";
import SectionBreadcumb from "../../components/catalog/sections/SectionBreadcumb/SectionBreadcumb";
import SectionRecommended from "../../components/catalog/sections/SectionRecommended/SectionRecommended";
import SectionReview from "../../components/catalog/sections/SectionReview/SectionReview";
import SectionTestimonyComment from "../../components/catalog/sections/SectionTestimonyComment/SectionTestimonyComment";
import Layout from "../../components/global/Layout";
import { BASE_URL } from "../../utils/config";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function useBookDetail(slug) {
  const { data, error, isValidating } = useSWR(`${BASE_URL}/api/catalogue/getDetails?slug=${slug}`, fetcher, {
      refreshInterval: 18000000,    // Re-fetch setiap 5 Jam
      dedupingInterval: 18000000,   // Cegah fetching ulang dalam 5 Jam
      revalidateOnFocus: false,  // Jangan revalidate saat window fokus kembali
      revalidateOnReconnect: false
  });

  const book = data?.results ?? [];
  const loadingBook = isValidating ?? false;

  return { book, errorBook: error ,loadingBook };
}

function useReviews(slug) {
  const { data, error, isValidating } = useSWR(`${BASE_URL}/api/review/getReviews?slug=${slug}&limit=5&offset=0`, fetcher, {
      refreshInterval: 18000000,    // Re-fetch setiap 5 Jam
      dedupingInterval: 18000000,   // Cegah fetching ulang dalam 5 Jam
      revalidateOnFocus: false,  // Jangan revalidate saat window fokus kembali
      revalidateOnReconnect: false
  });

  const reviews = data?.results ?? [];
  const loadingReviews = isValidating ?? false;

  return { reviews, errorReviews: error ,loadingReviews };
}

function useRecommendBooks(slug) {
  const { data, error, isValidating } = useSWR(`${BASE_URL}/api/catalogue/getRecommendCatalogue?slug=${slug}&qty=8`, fetcher, {
      refreshInterval: 18000000,    // Re-fetch setiap 5 Jam
      dedupingInterval: 18000000,   // Cegah fetching ulang dalam 5 Jam
      revalidateOnFocus: false,  // Jangan revalidate saat window fokus kembali
      revalidateOnReconnect: false
  });

  const recommendBooks = data?.results ?? [];
  const loadingRecommendBooks = isValidating ?? false;

  return { recommendBooks, errorRecommendBooks: error ,loadingRecommendBooks };
}

const CatalogDetail = () => {
  const token = localStorage.getItem("user_token");
  const { slug } = useParams();
  
  const { recommendBooks, loadingRecommendBooks } = useRecommendBooks(slug);
  const { book, loadingBook } = useBookDetail(slug);
  const { reviews } = useReviews(slug);

  return (
    <Layout>
      {book.length !== 0 || loadingBook ? (
        <>
          <SectionBreadcumb
            category={book.category}
            level={book.level}
            title={book.title}
            slug={book.slug}
          />
          <HeroDetail
            id={book.id}
            token={token}
            slug={book.slug}
            image={book.image}
            bookType={book.type}
            title={book.title}
            publisher={book.publisher}
            isbn={book.isbn}
            edition={book.edition}
            writer={book.writer}
            attachment={book.attachment}
            totalDownload={book.total_download}
            totalRead={book.total_read}
            totalPlay={book.total_play}
            loading={loadingBook}
            category={book.category}
            price_zone_1={book.price_zone_1}
            price_zone_2={book.price_zone_2}
            price_zone_3={book.price_zone_3}
            price_zone_4={book.price_zone_4}
            price_zone_5A={book.price_zone_5A}
            price_zone_5B={book.price_zone_5B}
          />
          {book.type === "audio" && (
            <SectionAudioPlayer audios={book.audio_attachment} />
          )}
          <SectionReview token={token} slug={book.slug} />
          <SectionTestimonyComment reviews={reviews} />
          {recommendBooks.length !== 0 && (
            <SectionRecommended
              recommendBooks={recommendBooks}
              loading={loadingRecommendBooks}
            />
          )}
        </>
      ) : (
        <div className="text-center my-5">
          <img
            width="60"
            src="/assets/image/catalog/not-found.png"
            className="img-fluid"
            alt="Not found"
          />
          <div className="text-center mt-2">
            Buku tidak ditemukan / dalam revisi
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CatalogDetail;
