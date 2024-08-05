import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SectionCTA = () => {
    return (
        <section className="py-5" style={{background: 'url(/assets/image/hari-buku-nasional/CTA.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="container p-3">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-7">
                        <h1 className="mb-4 display-5 text-white">Baca Panduan Sekarang</h1>
                        <a href="#" target="_blank" className="btn btn-orange rounded-pill px-4 py-2">Unduh Buku <FontAwesomeIcon icon={faDownload} className="ms-2" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionCTA