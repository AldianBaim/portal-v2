// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid, Autoplay, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Grid, Autoplay, Navigation]);

const SectionTestimony = ({ nightMode }) => {
    let linearBgColor = nightMode ? 'linear-gradient(to bottom, white,white, #6686b7, #6686b7)' : 'linear-gradient(to bottom, white, #e5f8ff, #e5f8ff)'
    const data = [
        {
            comment: 'Terimakasih banyak SIBI sangat membantu kami kalangan siswa dan guru berkebutuhan khusus',
            avatar: '/assets/image/testimony/1-hafidz.jpeg',
            name: 'Hafidz Dali',
            school: 'Guru Sekolah Luar Biasa'
        },
        {
            comment: 'Keren! Ada buku audio dan buku interaktif yg sangat menarik',
            avatar: '/assets/image/testimony/2-ria.jpeg',
            name: 'Ria Irianti',
            school: 'Guru Sekolah Dasar'
        },
        {
            comment: 'Sangat bermanfaat membantu guru dan siswa belajar dengan mudah di era digital',
            avatar: '/assets/image/testimony/3-devi.jpeg',
            name: 'Devi Yulianti',
            school: 'Guru Sekolah Menengah Pertama'
        },
        {
            comment: 'Dengan adanya SIBI membantu saya selaku orangtua dalam membingbing anak belajar di rumah',
            avatar: '/assets/image/testimony/4-aulia.jpeg',
            name: 'Aulia Azhari',
            school: 'Orang tua siswa'
        },
        {
            comment: 'Selain buku pelajaran ternyata buku ceritanya sangat seru, saya jadi banyak bahan untuk cerita ke anak, terimakasih SIBI',
            avatar: '/assets/image/testimony/5-gaos.jpeg',
            name: 'Gaos Firdaus',
            school: 'Orang tua'
        },
        {
            comment: 'Buku audio sangat membantu guru dalam proses pembelajaran, terutama untuk siswa dengan gaya belajar audio',
            avatar: '/assets/image/testimony/6-maya.jpeg',
            name: 'Maya N Chairiah ',
            school: 'SMAN 1 Margaasih'
        },
        {
            comment: 'Buku di SIBI menginspirasi guru-guru SMK untuk merancang project yang menyenangkan di sekolah',
            avatar: '/assets/image/testimony/7-asep.jpeg',
            name: 'Asep Doni',
            school: 'Guru Sekolah Menengah Kejuruan'
        },
        {
            comment: 'Buku SIBI sangat bagus dan menarik ada audio sama interaktif',
            avatar: '/assets/image/testimony/8-adlie.jpeg',
            name: 'Adlie Ahmad',
            school: 'Siswa Sekolah Dasar'
        },
        {
            comment: 'Terimakasih banyak SIBI sangat membantu kami kalangan siswa dan guru berkebutuhan khusus',
            avatar: '/assets/image/testimony/1-hafidz.jpeg',
            name: 'Hafidz Dali',
            school: 'Guru Sekolah Luar Biasa'
        },
        {
            comment: 'Keren! Ada buku audio dan buku interaktif yg sangat menarik',
            avatar: '/assets/image/testimony/2-ria.jpeg',
            name: 'Ria Irianti',
            school: 'Guru Sekolah Dasar'
        },
        {
            comment: 'Sangat bermanfaat membantu guru dan siswa belajar dengan mudah di era digital',
            avatar: '/assets/image/testimony/3-devi.jpeg',
            name: 'Devi Yulianti',
            school: 'Guru Sekolah Menengah Pertama'
        },
        {
            comment: 'Dengan adanya SIBI membantu saya selaku orangtua dalam membingbing anak belajar di rumah',
            avatar: '/assets/image/testimony/4-aulia.jpeg',
            name: 'Aulia Azhari',
            school: 'Orang tua siswa'
        },
        {
            comment: 'Selain buku pelajaran ternyata buku ceritanya sangat seru, saya jadi banyak bahan untuk cerita ke anak, terimakasih SIBI',
            avatar: '/assets/image/testimony/5-gaos.jpeg',
            name: 'Gaos Firdaus',
            school: 'Orang tua'
        },
        {
            comment: 'Buku audio sangat membantu guru dalam proses pembelajaran, terutama untuk siswa dengan gaya belajar audio',
            avatar: '/assets/image/testimony/6-maya.jpeg',
            name: 'Maya N Chairiah ',
            school: 'SMAN 1 Margaasih'
        },
        {
            comment: 'Buku di SIBI menginspirasi guru-guru SMK untuk merancang project yang menyenangkan di sekolah',
            avatar: '/assets/image/testimony/7-asep.jpeg',
            name: 'Asep Doni',
            school: 'Guru Sekolah Menengah Kejuruan'
        },
        {
            comment: 'Buku SIBI sangat bagus dan menarik ada audio sama interaktif',
            avatar: '/assets/image/testimony/8-adlie.jpeg',
            name: 'Adlie Ahmad',
            school: 'Siswa Sekolah Dasar'
        },
    ]

    const testimony = [];
    const limit = 2;
    let start = 1;
    let counter = 0;
    let testimonyTemp = [];

    data.forEach(() => {
        if (start <= limit) {
            testimonyTemp.push(data[counter]);
            start++;
        } else {
            start = 1
            testimony.push(testimonyTemp);
            testimonyTemp = [];
        };
        counter++;
    });

    return (
        <section className="py-5" style={{ background: linearBgColor }}>
            <div className="position-relative">
                <div className="container p-3">
                    <h3 className="fw-bold">Apa <div className="d-inline-flex flex-column"><span>Kata Mereka?</span><span className="mt-n4"><img src="/assets/image/testimony/line.png" alt="line title" /></span></div></h3>
                </div>
                <img src="/assets/image/testimony/Hearts.png" className="position-absolute end-0" style={{ top: '-20%' }} alt="" />
            </div>
            <Swiper
                autoplay={{ delay: '0ms' }}
                loop
                speed={7000}
                navigation
                modules={[Grid, Autoplay, Navigation]}
                spaceBetween={10}
                slidesPerView={3.5}
                breakpoints={{
                    // when window width is >= 414px
                    350: {
                        slidesPerView: 1.8,
                    },
                }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    testimony.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="pe-4 my-3">
                                    <div className="card shadow border-0" style={{ minWidth: '130px' }}>
                                        <div className="card-body px-3">
                                            <div className="text-end text-muted">
                                                <FontAwesomeIcon size='xl' icon={faQuoteLeft} />
                                            </div>
                                            <div className="mb-2 text-muted">{item[0].comment}</div>
                                            <div className="row px-lg-1 align-items-center">
                                                <div className="col-lg-1 pe-0 d-flex justify-content-center text-center text-md-start">
                                                    <img src={item[0].avatar} className="rounded-circle me-lg-auto mb-2 mb-lg-0 object-fit-cover" width={50} height={50} alt="" />
                                                </div>
                                                <div className="col-lg-10 ms-1">
                                                    <small className="d-block fw-bold text-lg-start">{item[0].name}</small>
                                                    <small>{item[0].school}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-4 my-3">
                                    <div className="card shadow border-0" style={{ minWidth: '130px' }}>
                                        <div className="card-body px-3">
                                            <div className="text-end text-muted">
                                                <FontAwesomeIcon size='xl' icon={faQuoteLeft} />
                                            </div>
                                            <div className="mb-2 text-muted">{item[1].comment}</div>
                                            <div className="row px-lg-1 align-items-center">
                                                <div className="col-lg-1 pe-0 d-flex justify-content-center text-center text-md-start">
                                                    <img src={item[1].avatar} className="rounded-circle me-lg-auto mb-2 mb-lg-0 object-fit-cover" width={50} height={50} alt="" />
                                                </div>
                                                <div className="col-lg-10 ms-1">
                                                    <small className="d-block fw-bold text-lg-start">{item[1].name}</small>
                                                    <small>{item[1].school}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section >
    )
}

export default SectionTestimony