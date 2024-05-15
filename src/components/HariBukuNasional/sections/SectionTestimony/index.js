import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid, Autoplay, Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Grid, Autoplay, Navigation]);

const SectionTestimony = () => {
    return (
        <section className="py-5">
            <div className="container p-3">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <h1 className="mb-5 display-6 text-center">Lalu, Bagaimana Cara Penggunaan Buku Sastra?</h1>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5 offset-lg-1">
                                <Swiper
                                    loop
                                    spaceBetween={5}
                                    slidesPerView={1}
                                    breakpoints={{
                                        // when window width is >= 414px
                                        350: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="d-flex gap-3 mb-3">
                                            <img src="/assets/image/hari-buku-nasional/Testimony-user.png" width={50} alt="User" />
                                            <div>
                                                <div>Fitriana</div>
                                                <div>Guru SMPN 1 Jakarta</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex gap-2">
                                            <FontAwesomeIcon size="xl" icon={faQuoteLeft} className="text-orange" />
                                            <p>“Saya telah mengintegrasikan kurikulum sastra ke dalam pembelajaran Bahasa Inggris di kelas saya, dan hasilnya luar biasa. Pembelajaran sastra telah membantu siswa-siswa saya untuk lebih menikmati dan memahami karya-karya sastra berbahasa Inggris.”</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="col-lg-5">
                                <img src="/assets/image/hari-buku-nasional/Testimony.png" alt="Testimony" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTestimony