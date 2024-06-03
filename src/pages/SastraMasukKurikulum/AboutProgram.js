import { Link } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import Sidebar from "../../components/SastraMasukKurikulum/sidebar"
const AboutProgram = () => {

    return (
        <Layout>
            <section>
                <div className="container p-3 py-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Tentang Program</li>
                        </ol>
                    </nav>
                    <hr />
                    <div className="row mt-4">
                        <div className="col-lg-3 mb-4">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-9">
                            <h4 className="mb-4">Tentang Program Sastra Masuk Kurikulum</h4>
                            <p className="lh-lg">Program “Sastra Masuk Kurikulum” adalah turunan dari Episode Merdeka Belajar ke-15: Kurikulum Merdeka dan Platform Merdeka Mengajar. Program ini berangkat dari salah satu tujuan Kurikulum Merdeka berdasarkan Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 12 Tahun 2024 yaitu untuk menguatkan kompetensi dan budaya literasi membaca. Tujuan tersebut juga selaras dengan tujuan Undang-Undang Nomor 3 Tahun 2017 tentang Sistem Perbukuan yaitu memperkuat rasa cinta tanah air, membangun jati diri dan karakter bangsa, serta menumbuhkembangkan budaya literasi seluruh warga negara Indonesia. Manifestasi dari kedua tujuan tersebut salah satunya dengan memanfaatkan buku sastra dalam implementasi Kurikulum Merdeka untuk meningkatkan minat baca, menumbuhkan empati, dan mengasah kreativitas, serta nalar kritis peserta didik.</p>
                            <p className="lh-lg">Program ini diinisiasi oleh Badan Standar, Kurikulum, dan Asesmen Pendidikan sejak tahun 2023 dengan mengumpulkan beberapa sastrawan, akademisi, dan pendidik yang memiliki perhatian khusus terhadap pemanfaatan sastra dalam pembelajaran di sekolah. Kepala Badan Standar, Kurikulum, dan Asesmen Pendidikan, Anindito Aditomo berpendapat bahwa sastra mendorong pembaca membayangkan realitas alternatif dan cara pikir serta perasaan para tokohnya sehingga sastra merupakan media belajar yang sangat berharga. Oleh karena itu, pembahasan ini ditindaklanjuti dengan membentuk sebuah tim untuk melakukan kurasi terhadap buku-buku sastra karya para sastrawan Indonesia di sepanjang zaman yang dapat digunakan untuk mendukung pembelajaran Kurikulum Merdeka di sekolah.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutProgram