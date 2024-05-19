import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);
const SectionCatalog = ({books, mode}) => {

    return (
        <section className="py-5 bg-soft-blue">
            <div className="container p-3">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        {
                            mode == 'card' ? (
                                <Swiper
                                    autoplay={{delay: 3000, disableOnInteraction: false}}
                                    speed={500}
                                    className="py-4 px-xl-4"
                                    spaceBetween={30}
                                    grabCursor={true}
                                    slidesPerView={1.1}
                                    breakpoints={{
                                        // when window width is >= 414px
                                        375: {
                                            slidesPerView: 1.3,
                                        },
                                        // when window width is >= 768px
                                        768: {
                                            slidesPerView: 2.5,
                                        },
                                        1200: {
                                            slidesPerView: 2.5,
                                        },
                                    }}
                                >
                                    {
                                        books.map((book, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className="card card-rounded p-3">
                                                        <div className="d-flex gap-3 mb-3">
                                                            <img src="/assets/image/hari-buku-nasional/Cover-2.png" width={100} alt="" />
                                                            <div>
                                                                <h5>{book.title}</h5>
                                                                <div className="mt-4">
                                                                    <div className="d-flex gap-2 mb-2">
                                                                        <div className="py-1 px-3 rounded-pill bg-warning small">Novel</div>
                                                                        <div className="py-1 px-3 rounded-pill bg-light-blue small">SMP/MTs</div>
                                                                    </div>
                                                                    <div className="text-muted small">Penulis &nbsp;&nbsp; : <span className="text-primary">{book.writer}</span></div>
                                                                    <div className="text-muted small">Penerbit : <span className="text-primary">{book.publisher}</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6>Penafian (<i>Disclaimer)</i></h6>
                                                            <div className="text-muted">
                                                            1) Hal 226  mengartikan Tuhan <br />
                                                            2) Hal 398 Kata Jalang <br />
                                                            3) Hal 403 Kata "tolol", "napsu dan garang" <br />
                                                            </div>
                                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-sm btn-outline-orange py-2 px-3 rounded-pill mt-5">Lihat Detil</button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })
                                    }
                                </Swiper>
                            ) : (
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead style={{ backgroundColor: '#D5E2FF' }}>
                                            <tr>
                                                <th>Kover</th>
                                                <th>Judul</th>
                                                <th>Penulis</th>
                                                <th>Penerbit</th>
                                                <th>Bentuk Sastra</th>
                                                <th>Peruntukan</th>
                                                <th>Tahun Terbit</th>
                                                <th>Opsi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {books.map((book, index) => (
                                                <tr>
                                                    <td><img src="/assets/image/hari-buku-nasional/Cover.jpeg" width={100} alt="Kover" /></td>
                                                    <td>{book.title}</td>
                                                    <td>{book.writer}</td>
                                                    <td>{book.publisher}</td>
                                                    <td>{book.bentuk_sastra}</td>
                                                    <td>Kelas {book.peruntukan}</td>
                                                    <td>{book.published_year}</td>
                                                    <td><a role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="text-blue text-decoration-none rounded-pill px-4 py-2">Lihat Detail</a></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-4">
                            <div className="row">
                                <div className="col-6 mb-4">
                                    Judul Buku : <b>Gema Tanah Air</b>
                                </div>
                                <div className="col-6">
                                    Tahun Terbit : <b>2013</b>
                                </div>
                                <div className="col-6 mb-4">
                                    Penulis : <b>: H.B. Jassin</b>
                                </div>
                                <div className="col-6">
                                    Bentuk Sastra : <b>: Kumpulan Puisi dan Cerpen</b>
                                </div>
                                <div className="col-6 mb-4">
                                    Penerbit : <b>Pustaka Jaya</b>
                                </div>
                                <div className="col-6">
                                    Jenis Peruntukan : <b>SMP/MTs</b>
                                </div>
                            </div>

                            <div className="card card-rounded border-0 bg-light p-4 mb-4">
                                <h5 className="mb-3">Gambaran Singkat <br /> (latar belakang penulis, ringkasan isi, dan tema buku)</h5>
                                <p className="text-muted">Gema Tanah Air berisikan kumpulan puisi dan prosa tahun 1942 sampai 1951. H.B. Jassin menghimpun karya-karya terpilih para sastrawan Indonesia tanpa memandang kecenderungan ideologi politisnya. Buku ini berisikan cerita perjuangan rakyat dalam masa-masa sulit setelah kemerdekaan yang digambarkan oleh para sastrawan Indonesia di masa itu yang dihimpun menjadi 3 bagian. Ketiga bagian tersebut berisikan puisi dan prosa yang menuliskan semangat baru era reformasi, yang cenderung bercerita tentang pengalaman manusia dan masyarakatnya saat setelah kemerdekaan, ketimbang kecenderungan politis.</p>
                            </div>

                            <div className="card card-rounded border-0 bg-light p-4 mb-4">
                                <h5 className="mb-3">Penafian/Disclaimer secara Umum</h5>
                                <div className="alert rounded alert-danger p-2">Terdapat istilah-istilah seksualitas</div>
                                <h5 className="mb-3">Catatan Penafian/Disclaimer secara Detail</h5>
                                <div>
                                1) Hal 226  mengartikan Tuhan <br />
                                2) Hal 398 Kata Jalang <br />
                                3) Hal 403 Kata "tolol", "napsu dan garang" <br />
                                4) Hal 418 Kalimat "gadis-gadis molek jelita: dibelai-belai, dicium dan dijual dengan harga sangat tinggi." <br />
                                5) Hal 422 kata "pantat" dan "onani" <br />
                                6) Hal 425 kalimat "Perempuan-perempuan itu semakin sehari semakin liar. Mereka sering lupa kepada suaminya yang ditinggalkannya bertempur di Surabaya dan pergi mengecap kesenangan dengan pengawal-pengawal ke tempat gelap.Gadis-gadis kehilangan benda berharganya di sini, tapi mereka tidak menyesal." <br />
                                7) Hal 426 kalimat "Tapi akhirnya orang-orang bosan dan mual seperti melihat perempuan jahat yang baru selesai dipakai." <br />
                                8) Hal 427 kalimat "Mereka ini meraba-raba badan perempuan-perempuan itu dan jika yang ada harus mereka katakan, mereka tidak bisa berkata apa-apa karena terpesona dan hawa nafsu." dan kata "biadab." <br />
                                9) Hal 429 frasa "mencemarkan kehormatan." <br />
                                10) Hal 441 paragraf tiga memeriksa keperawanan. dan lain-lain. <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SectionCatalog