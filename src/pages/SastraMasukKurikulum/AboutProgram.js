import { Link } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import Sidebar from "../../components/SastraMasukKurikulum/sidebar"
import { useState } from "react"
const AboutProgram = () => {
    const totalBook = 166
    const [showMore, setSHowMore] = useState(false)
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
                            <p className="lh-lg">Pembahasan tersebut ditindaklanjuti dengan membentuk sebuah tim kurator. Awalnya ada 33 nama calon kurator dan setelah melalui beberapa pertimbangan dipilihlah 14 kurator dengan keberagaman latar belakang, profesi, jenis karya, minat kajian isu serta kemudian 3 guru dari SD, SMP, dan SMA yang bergabung menjadi tim kurator. Tim kurator ini ditugaskan untuk melakukan kurasi terhadap karya-karya Sastra Indonesia di sepanjang zaman dan berbagai bentuk karya yang dapat digunakan untuk mendukung pembelajaran Kurikulum Merdeka di sekolah.</p>
                            <p className="lh-lg">Proses kuratorial yang dilakukan dalam kurun waktu Juli 2023 sampai dengan Desember 2023 dimulai dengan penentuan dan penyusunan kriteria kurasi. Kriteria utama disusun berdasarkan Dimensi, Elemen, dan Subelemen pada Profil Pelajar Pancasila yang tertuang dalam Keputusan Kepala BSKAP No.009/H/KR/2022. Kriteria utama ini penting karena tujuan akhir dari program ini adalah meningkatkan minat baca, menumbuhkan empati, dan mengasah kreativitas, serta nalar kritis murid, alih-alih membuat kanon sastra.</p>
                            <p className="lh-lg">Kemudian ditambahkan pula kriteria sastrawi dengan menimbang beberapa variabel yaitu, 1) karya sastra dalam daftar tersebut merepresentasikan keberagaman gender serta daerah/geografis para penulis maupun topik yang dibahas; 2) keberagaman zaman dengan menyertakan karya-karya dari penulis periode awal Sastra Indonesia hingga para penulis generasi terkini; 3) merepresentasikan keberagaman tema; 4) merepresentasikan kelompok minoritas; serta 5) merepresentasikan keragaman bentuk sastra dalam artian karya sastra yang dipilih tidak terbatas pada prosa dan puisi tetapi juga bentuk-bentuk lainnya yakni komik, cerita bergambar, naskah drama, skenario film, hingga esai-esai kebudayaan. </p>
                            <p className="lh-lg">Tim kurator juga memastikan standar mutu karya-karya terpilih menimbang berdasarkan penghargaan yang telah diperoleh, riwayat penerjemahan karya ke bahasa asing, riwayat alih wahana karya sastra, hingga signifikansi karya dalam resensi-resensi di media yang memiliki kredibilitas ataupun menjadi subjek kajian akademis berupa skripsi, tesis, atau disertasi. Hasil kerja tim kurator ini menghasilkan 276 judul karya.</p>
                            <p className="lh-lg">Penyusunan daftar rekomendasi tidak berhenti pada proses kurasi. Proses dilanjutkan dengan reviu dan penyusunan panduan penggunaan karya sastra oleh para guru dari berbagai mata pelajaran, jenjang, dan daerah dalam kurun waktu Februari-April 2024. Reviu oleh guru ini vital karena guru adalah pengguna program “Sastra Masuk Kurikulum” ini. Dalam prosesnya, ada beberapa usulan tim kurator yang tidak dapat ditindaklanjuti karena beberapa alasan seperti akses buku terbatas dan sudah langka serta penafian yang terlampau banyak. Pembatasan satu penulis satu karya juga muncul untuk memantik guru dan peserta didik mengeksplorasi karya lain dari penulis tersebut.</p>
                            <p className="lh-lg">Proses reviu dan penyusunan panduan penggunaan karya sastra oleh guru tersebut akhirnya menghasilkan {totalBook} judul karya sastra yang masuk Daftar Rekomendasi Buku Sastra dan Panduan Penggunaan Buku Sastra untuk mendukung terlaksananya program Sastra Masuk Kurikulum hingga ke ruang-ruang kelas.</p>
                            <p className="lh-lg">Selain {totalBook} judul karya sastra ini, guru dan murid juga diharapkan dapat memanfaatkan karya sastra lain sesuai dengan minat dan konteks khas yang ada. Tidak tertutup kemungkinan pula, ada karya dari penulis lain yang terlewat baik oleh tim kurator maupun oleh guru pereviu. Selain itu daftar judul ini bisa terus bertambah seiring minat baca peserta didik dan Sastra Indonesia yang – tentu saja – akan tetap dan terus berkembang.</p>
                            <p className="lh-lg">Program Sastra Masuk Kurikulum dirancang tidak hanya untuk murid melainkan juga untuk para guru dalam rangka peningkatan literasi membaca, khususnya membaca, menikmati, dan memahami karya sastra. Pemanfaatan sastra dalam pembelajaran Kurikulum Merdeka juga diharapkan dapat membawa pengalaman bersastra bagi para guru dan murid di dalam ruang kelas yaitu dengan menikmati membaca dan mendiskusikan secara aman dan nyaman tema-tema yang tertulis dalam setiap karya sastra Indonesia. Pada akhirnya, pemanfaatan sastra dalam pembelajaran diharapkan dapat mendukung pendidikan karakter pada Profil Pelajar Pancasila dalam Kurikulum Merdeka, yaitu dengan menumbuhkan rasa toleransi dan gotong royong, mengasah kreativitas dan penalaran kritis, serta mempromosikan nilai-nilai keimanan dan bertakwa kepada Tuhan yang Maha Esa, kebhinekaan global, dan kemandirian.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutProgram