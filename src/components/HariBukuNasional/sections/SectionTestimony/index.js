import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid, Autoplay, Navigation, EffectCards } from "swiper";

import 'swiper/css';
import 'swiper/css/effect-cards';

SwiperCore.use([Grid, Autoplay, Navigation, EffectCards]);

const SectionTestimony = () => {
    return (
        <section className="py-5">
            <div className="container p-3">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <h1 className="mb-5 display-6 text-center">Testimoni dan Panduan Sastra Masuk Kurikulum</h1>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5 offset-lg-1 overflow-hidden">
                                <Swiper
                                    effect="cards"
                                    loop
                                    modules={[EffectCards]}
                                    grabCursor
                                    spaceBetween={5}
                                    slidesPerView={1}
                                    breakpoints={{
                                        // when window width is >= 414px
                                        350: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                >
                                    <SwiperSlide className="bg-light-blue card-rounded">
                                        <div className="d-flex gap-3 mb-3 p-3">
                                    <img src="/assets/image/hari-buku-nasional/Testimony-user-2.png" width={50} alt="User" />
                                            <div>
                                                <div>Puspita</div>
                                                <div>Guru SMPN 47 Bandung</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex gap-2 p-3">
                                            <FontAwesomeIcon size="xl" icon={faQuoteLeft} className="text-orange" />
                                            <p>"Integrasi kurikulum sastra dalam pembelajaran Bahasa Inggris telah menghasilkan peningkatan yang signifikan dalam pemahaman dan apresiasi siswa terhadap karya-karya sastra Inggris."</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="bg-light-blue card-rounded">
                                        <div className="d-flex gap-3 mb-3 p-3">
                                            <img src="/assets/image/hari-buku-nasional/Testimony-user.png" width={50} alt="User" />
                                            <div>
                                                <div>Fitriana</div>
                                                <div>Guru SMPN 1 Jakarta</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex gap-2 p-3">
                                            <FontAwesomeIcon size="xl" icon={faQuoteLeft} className="text-orange" />
                                            <p>“Saya telah mengintegrasikan kurikulum sastra ke dalam pembelajaran Bahasa Inggris di kelas saya, dan hasilnya luar biasa. Pembelajaran sastra telah membantu siswa-siswa saya untuk lebih menikmati dan memahami karya-karya sastra berbahasa Inggris.”</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="col-lg-5">
                                <img src="/assets/image/hari-buku-nasional/Testimony.png" className="mt-5" alt="Testimony" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTestimony