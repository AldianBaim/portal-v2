import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardProgram from "../../card/CardProgram"
import { faLayerGroup, faTable } from "@fortawesome/free-solid-svg-icons"

const SectionGuideline = ({setMode}) => {
    return (
        <section className="py-5">
            <div className="container p-3">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <h1 className="mb-5 display-6 text-center">Lalu, Bagaimana Cara <br /> Penggunaan Buku Sastra?</h1>
                        
                        <div className="row mb-5">
                            <div className="col-lg-6">
                                <div className="card border-0 card-rounded bg-light-blue p-4 mb-4">
                                    <h3 className="mb-4">Bagaimana guru dapat melakukan <br /> program ini?</h3>
                                    <p>Program ini dimaksudkan sebagai ruang belajar yang luas bagi guru untuk mengeksplorasi diri seluas-luasnya, khususnya dalam pengalaman bersastra. Guru dan murid diharapkan dapat sama-sama menikmati membaca karya-karya sastra Indonesia, mengobrolkannya secara aman dan nyaman di ruang kelas, sehingga dapat memaknai perjalanan bersastra ini sebagai pengalaman yang mengesankan.</p>
                                </div>
                                <div className="card border-0 card-rounded bg-soft-orange p-4">
                                    <h3 className="mb-4">Bagaimana buku-buku ini dapat <br /> dibaca di kelas?</h3>
                                    <p>Saat membawakan buku-buku ini di kelas, guru sangat disarankan untuk mendampingi murid selama membaca. Jadikan program ini sebagai kesempatan untuk sama-sama merasakan pengalaman bersastra. Bukan murid saja yang diharapkan bisa mengenal karya-karya sastra Indonesia yang luar biasa, guru juga memiliki ruang bersastra yang sama.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src="/assets/image/hari-buku-nasional/Guideline-cover-2.png" className="w-100 h-100" alt="Guideline" />
                            </div>
                        </div>

                        <h1 className="mb-5 display-6 text-center">Bagaimana Mempersiapkan Guru dan Sekolah dalam membaca Sastra?</h1>
                  
                        <img src="/assets/image/hari-buku-nasional/Timeline-2.png" className="w-100" alt="Timeline" />


                        {/* <div className="timeline">
                            <div className="event">
                                <div className="event-content left">
                                    <h3>Membaca Sampai Selesai</h3>
                                    <p>Guru harus membaca sampai selesai buku yang akan digunakan sebelum membawakannya di kelas</p>
                                </div>
                            </div>
                            <div className="event">
                                <div className="event-content right">
                                    <h3>Penuh Persiapan</h3>
                                    <p>Guru perlu mempertimbangkan kesiapan dirinya, muridnya, orangtua murid, dan sekolahnya terhadap suatu buku</p>
                                </div>
                            </div>
                            <div className="event">
                                <div className="event-content left">
                                    <img src="/assets/image/hari-buku-nasional/Timeline-3.png" alt="Illustration" className="image"/>
                                </div>
                            </div>
                            <div className="event">
                                <div className="event-content right">
                                    <h3>Membuat Rencana</h3>
                                    <p>Guru perlu punya rencana terkait cara membawakan buku ini di kelas (membaca seluruh disclaimer yang dicantumkan)</p>
                                </div>
                            </div>
                            <div className="event">
                                <div className="event-content left">
                                    <h3>Memahami Bersama</h3>
                                    <p>Dalam praktiknya, seluruh buku disarankan untuk dibaca bersama guru atau dengan pendampingan guru, karena memang tujuan program ini adalah juga memberdayakan guru</p>
                                </div>
                            </div>
                        </div> */}


                        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between mt-5">
                            <h1 className="display-6">Rekomendasi Buku Sastra yang <br /> Bisa Diterapkan</h1>
                            <div className="d-flex mt-3 mt-lg-0 gap-3">
                                <button onClick={() => setMode('card')} className="btn btn-outline-secondary">Card <FontAwesomeIcon icon={faLayerGroup} /></button>
                                <button onClick={() => setMode('table')} className="btn btn-outline-primary">Tabel <FontAwesomeIcon icon={faTable} /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionGuideline