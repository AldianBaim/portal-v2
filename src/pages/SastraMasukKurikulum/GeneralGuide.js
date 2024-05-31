import { Link, NavLink } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
const GeneralGuide = () => {

    return (
        <Layout>
            <section className="position-relative">
                <div className="container p-3 py-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Panduan Umum Program</li>
                        </ol>
                    </nav>
                    <hr />

                    <div className="row">
                        <div className="col-lg-2 mb-3">
                        </div>
                        <div className="col-lg-7">
                            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">                            
                                <div className="mt-2">
                                    <h5>Kata Pengantar</h5>

                                    <div className="mt-3">
                                        <p>
                                            Salah satu tujuan Kurikulum Merdeka adalah menumbuhkan literasi membaca
                                            murid. Pada tingkat yang paling dasar, membaca berarti menyuarakan
                                            lekuk huruf dan rangkaian kata dengan lancar. Sebagian dari kita mengenal
                                            kemampuan dasar ini dengan istilah melek huruf. Seseorang yang melek huruf
                                            sudah bisa mengikuti instruksi tertulis, mengenali petunjuk arah di jalan, dan
                                            mengisi formulir sederhana. Jika melek huruf menjadi ukuran, maka pendidikan
                                            kita boleh dikatakan berhasil.
                                        </p>
                                        <p>
                                            Pada tingkat selanjutnya, membaca berarti menyarikan makna dari teks.
                                            Seseorang yang bisa membaca pada tingkat ini mampu mengenali pesan
                                            kunci sebuah teks dan meringkaskan pesan tersebut dengan tepat. Di tingkat
                                            ini, membaca sudah menjadi menjadi tindakan penafsiran yang sedikit banyak
                                            melibatkan interaksi antara pengetahuan yang sudah dimiliki sang pembaca
                                            dengan informasi baru yang disajikan oleh teks. Kemampuan membaca pada
                                            tingkat ini adalah syarat dari pembelajaran akademik yang bergantung pada
                                            teks sebagai sumber belajar utama.
                                        </p>
                                        <p>
                                            Pada tingkat yang lebih tinggi lagi, membaca melibatkan dialog kritis dan
                                            reflektif antara pembaca dan teks yang dibaca. Di tingkat ini, sang pembaca
                                            menempatkan tafsir yang diajukan oleh penulis sebagai satu versi dari sekian
                                            banyak alternatif yang mungkin diajukan tentang tema bahasan. Membaca pada
                                            tingkat ini bisa menjadi pengalaman transformatif. Yang diperoleh pembaca
                                            bukan hanya pengetahuan, tetapi juga pemahaman akan beragam perspektif,
                                            pengalaman emosional, dan nilai-nilai (values) yang baru. Dengan kata lain,
                                            membaca pada tingkat ini dapat mengasah empati dan menjadi bagian dari
                                            pendidikan karakter.
                                        </p>
                                        <p>
                                            Aspirasi kami di Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi
                                            adalah agar semua murid dapat menjadi pembaca yang kritis dan reflektif. Dalam
                                            hal ini, karya sastra adalah media pembelajaran yang sangat potensial. Karya
                                            sastra mengundang pembaca untuk menghayati dunia batin tokoh-tokoh yang
                                            melihat dan mengalami sesuatu dengan caranya masing-masing. Karya-karya
                                            sastra terbaik juga mengupas isu-isu kompleks dan menyajikan perdebatan moral
                                            yang mendorong pembaca keluar dari pemikiran hitam-putih dan memikirkan
                                            ulang opini serta prasangka-prasangka yang mungkin tak disadari sebelumnya.
                                        </p>
                                        <p>
                                            Agar murid mendapat pengalaman transformatif, tentu tidak cukup meminta
                                            mereka sekadar membaca karya sastra. Murid perlu mendiskusikan dan
                                            memperdebatkan beragam tafsir terhadap sebuah karya. Mereka perlu dipandu
                                            mengubah tafsir yang mereka pilih ke wahana yang berbeda: dari prosa ke
                                            puisi atau sebaliknya; dari teks menjadi gambar, drama, atau film; dan dari fiksi
                                            menjadi kritik sastra atau karya ilmiah. Model pembelajaran seperti ini terbuka
                                            lebar di Kurikulum Merdeka. Meski demikian, model pembelajaran berbasis sastra
                                            adalah hal baru yang belum banyak diterapkan di Indonesia. 
                                        </p>
                                        <p>
                                            Program Sastra Masuk Kurikulum dirancang untuk membantu guru
                                            memanfaatkan karya sastra dalam pembelajaran Kurikulum Merdeka. Seperti
                                            tersaji dalam panduan yang sedang anda baca ini, program Sastra Masuk
                                            Kurikulum menyediakan daftar buku yang direkomendasikan beserta ringkasan,
                                            disclaimer/penaifan, dan pemetaan ke capaian pembelajaran mata pelajaran dan
                                            elemen Profil Pelajar Pancasila yang relevan. Akan terlihat bahwa ada banyak
                                            karya sastra Indonesia, dari yang klasik sampai kontemporer, yang bisa menjadi
                                            bagian dari pembelajaran berbagai mata pelajaran dan projek penguatan Profil
                                            Pelajar Pancasila.
                                        </p>
                                        <p>
                                            Saya menyampaikan apresiasi yang tinggi pada para penulis, kritikus,
                                            dan guru yang menjadi kurator buku, serta guru-guru lain yang telah berbagi
                                            praktik pembelajaran berbasis sastra dan mengembangkan modul-modul ajar
                                            program Sastra Masuk Sekolah. Terima kasih untuk Perpustakaan Nasional yang
                                            turut mendukung penyediaan buku-buku yang direkomendasikan. Saya juga
                                            menyampaikan selamat kepada tim Pusat Perbukuan, Badan Standar, Kurikulum,
                                            dan Asesmen Pendidikan Kemendikbudristek yang telah mengawal program
                                            Sastra Masuk Kurikulum ini dengan baik.
                                        </p>
                                        <p>
                                            Akhir kata, saya mengajak para guru untuk membaca panduan ini dan
                                            memanfaatkan berbagai perangkat Sastra Masuk Kurikulum yang telah
                                            disediakan. Harapan saya, suatu saat nanti penggunaan karya sastra menjadi
                                            bagian “normal” dari pembelajaran di sekolah seluruh Indonesia - sehingga
                                            melahirkan generasi baru pembaca sastra yang kritis dan reflektif
                                        </p>
                                    </div>

                                </div>
                                <div className="mt-5" id="tim-penyusun">
                                    <hr className="dashed mb-4" />
                                    <h5>Tim Penyusun</h5>
                                    <div className="mt-3">
                                        <div><b>Penulis  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>Tim Penyusun Pusat Perbukuan</div>
                                        <div><b>Desainer &nbsp;:</b> Kiata Alma Setra</div>
                                        <div><b>Editor   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>Tim Penyusun Pusat Perbukuan</div>
                                    </div>
                                    <hr className="dashed mt-4" />
                                </div>
                                <div className="mt-5" id="cara-penggunaan">
                                    <h5>Cara Penggunaan</h5>
                                    <div className="mt-3">
                                        <h6 className="fw-bold">Bagaimana dapat melakukan program ini?</h6>
                                        <p>
                                            Program ini dimaksudkan sebagai ruang belajar yang luas bagi pendidik untuk mengeksplorasi diri seluas-luasnya, khususnya dalam pengalaman bersastra.
                                            Pendidik dan peserta didik diharapkan dapat menikmati
                                            bersama membaca karya-karya sastra Indonesia, mendiskusikannya secara aman dan nyaman di ruang kelas, sehingga dapat memaknai perjalanan bersastra ini sebagai pengalaman yang mengesankan.
                                            Program Sastra Masuk Kurikulum ini dirancang sebagai ruang untuk mengeksplorasi pengalaman membaca dan keterampilan membaca peserta didik. Oleh karena itu, pendidik dapat menggunakan daftar buku yang
                                            direkomendasikan ini sebagai “menu” yang dapat dipilih.
                                            Ada beberapa faktor yang dapat dipertimbangkan dalam memilih buku, misalnya kebutuhan kelas, kemampuan peserta didik, topik yang sedang hangat dibicarakan, minat peserta didik, dan yang juga penting adalah sejauh mana kesiapan pendidik untuk dapat membawakan buku pilihan
                                        </p>
                                    </div>
                                    <div className="mt-3">
                                        <h6 className="fw-bold">Bagaimana buku-buku ini dapat dibaca di kelas?</h6>
                                        <p>
                                            Saat membawakan buku-buku ini di kelas, pendidik sangat disarankan untuk
                                            mendampingi peserta didik selama membaca. Jadikan program ini sebagai kesempatan untuk merasakan bersama pengalaman bersastra. Bukan peserta didik saja yang diharapkan bisa mengenal karyakarya sastra Indonesia yang luar biasa, pendidik juga memiliki ruang bersastra yang sama.
                                        </p>
                                    </div>
                                    <div className="mt-3">
                                        <h6 className="fw-bold">Bagaimana menyiapkan diri untuk dapat membawa pengalaman bersastra di sekolah?</h6>
                                        <ol>
                                            <li>Pendidik harus membaca sampai selesai buku yang akan digunakan sebelum membawakannya di kelas.</li>
                                            <li>Pendidik perlu mempertimbangkan kesiapan dirinya, muridnya, orang tua murid, dan sekolahnya terhadap suatu buku.</li>
                                            <li>Pendidik perlu punya rencana terkait cara membawakan buku ini di kelas (membaca seluruh disclaimer/penafian yang dicantumkan dalam Panduan Penggunaan Buku Sastra ini).</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="mt-5" id="daftar-buku">
                                    <hr className="dashed" />
                                    <h5>Cara Penggunaan</h5>
                                    <div className="mt-3">Daftar buku untuk setiap jenjang dapat dilihat di halaman <NavLink to="/sastra-masuk-kurikulum/rekomendasi-buku" className="text-blue text-decoration-none">Daftar Buku</NavLink>.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div id="list-example" class="list-group sticky-top" style={{top: '100px', zIndex: '100'}} role="tablist">
                                <a class="list-group-item list-group-item-action" href="#">Kata Pengantar</a>
                                <a class="list-group-item list-group-item-action" href="#tim-penyusun">Tim Penyusun</a>
                                <a class="list-group-item list-group-item-action" href="#cara-penggunaan">Cara Penggunaan</a>
                                <a class="list-group-item list-group-item-action" href="#daftar-buku">Daftar Buku</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default GeneralGuide