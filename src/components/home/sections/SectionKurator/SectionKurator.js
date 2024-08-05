import { useState } from "react";

const SectionKurator = () => {

    const showDesk = (index) => {
        currators[index].showDesk = true
        setCurrators([...currators])
    } 

    const hideDesk = (id) => {
        setCurrators(currators.map((currator) => currator.id === id ? { ...currator, showDesk: false } : currator))
    }

    const [currators, setCurrators] = useState([
        {
            id: 1,
            name: 'Abidah El-Khalieqy',
            intro: 'Abidah El Khalieqy adalah penulis kelahiran Jombang, 1 Maret 1965. Ia menyelesaikan pendidikan di Fakultas Syariah IAIN Sunan Kalijaga (sekarang UIN). Karya-karyanya berupa puisi, novel, dan cerpen dipublikasikan di berbagai media masa lokal maupun nasional, di antaranya, The Jakarta Post, Jurnal Ulumul Quran, Majalah Horizon, Republika, Media Indonesia, Suara Merdeka, Kedaulatan Rakyat, Jawa Post, dan lain-lain.',
            description: 'Abidah El Khalieqy adalah penulis kelahiran Jombang, 1 Maret 1965. Ia menyelesaikan pendidikan di Fakultas Syariah IAIN Sunan Kalijaga (sekarang UIN). Karya-karyanya berupa puisi, novel, dan cerpen dipublikasikan di berbagai media masa lokal maupun nasional, di antaranya, The Jakarta Post, Jurnal Ulumul Quran, Majalah Horizon, Republika, Media Indonesia, Suara Merdeka, Kedaulatan Rakyat, Jawa Post, dan lain-lain. Buku-bukunya yang sudah terbit, di antaranya berjudul Ibuku Laut Berkobar (1987), Menari di Atas Gunting (2001), Atas Singgasana (2002), Genijora (2004), Mahabbah Rindu (2007), dan Nirzona (2008), Mikraj Odyssey (2009), Perempuan Berkalung Sorban (2011). Novelnya yang berjudul Perempuan Berkalung Sorban telah diangkat ke layar lebar.',
            showDesk: false
        },
        {
            id: 2,
            name: 'Dewi Kharisma Michellia',
            intro: 'Dewi Kharisma Michellia, lahir di Denpasar pada 13 Agustus 1991. Ia adalah seorang penulis, novelis, penyunting, dan penerjemah Indonesia yang memiliki beragam karya dalam berbagai genre. Ia telah menulis novel, reportase, dan cerita pendek, serta aktif sebagai penerjemah dan editor.',
            description: 'Dewi Kharisma Michellia, lahir di Denpasar pada 13 Agustus 1991. Ia adalah seorang penulis, novelis, penyunting, dan penerjemah Indonesia yang memiliki beragam karya dalam berbagai genre. Ia telah menulis novel, reportase, dan cerita pendek, serta aktif sebagai penerjemah dan editor. Karya-karyanya meliputi novel "Surat Panjang tentang Jarak Kita yang Jutaan Tahun Cahaya" (2013) dan kumpulan cerita pendek "Elegi" (2017). Ia juga terlibat dalam kolektif Ruang Perempuan dan Tulisan, serta menjadi penerjemah untuk jurnal akademik yang berfokus pada isu Asia Tenggara. Dewi juga pernah mendirikan penerbit indie Penerbit OAK dan mengasuh situs web kritik sastra tenggara.id. Saat ini ia juga aktif dalam kepengurusan di Komite Sastra, Dewan Kesenian Jakarta 2023-2026.',
            showDesk: false
        },
        {
            id: 3,
            name: 'Eka Kurniawan',
            intro: 'Eka Kurniawan adalah sastrawan Indonesia berprestasi di kancah internasional melalui novelnya yang berjudul Cantik Itu Luka. Novel ini adalah karya masterpiece Eka Kurniawan yang berhasil meraih penghargaan World Readers pada tahun 2016. Novel ini termasuk best-seller yang sudah diterjemahkan ke lebih dari 34 bahasa, di antaranya bahasa Inggris, Jepang, Perancis, Denmark, Yunani, Korea, dan Tiongkok.',
            description: 'Eka Kurniawan adalah sastrawan Indonesia berprestasi di kancah internasional melalui novelnya yang berjudul Cantik Itu Luka. Novel ini adalah karya masterpiece Eka Kurniawan yang berhasil meraih penghargaan World Readers pada tahun 2016. Novel ini termasuk best-seller yang sudah diterjemahkan ke lebih dari 34 bahasa, di antaranya bahasa Inggris, Jepang, Perancis, Denmark, Yunani, Korea, dan Tiongkok. Karena novel ini, Eka Kurniawan meraih penghargaan sastra internasional di Belanda, yaitu Prince Clause Awards pada tahun 2018. Novel ini juga masuk ke dalam daftar 100 buku terkemuka versi The New York Time. Ia membangun banyak gagasan penceritaan yang mempunyai filosofi tertentu dalam menyikapi realitas kehidupan. Kritik-kritik sosial selalu disisipkan dan dikemas dalam setiap karya-karyanya. Beberapa karya Eka Kurniawan antara lain: Cantik Itu Luka (2002 – novel), Lelaki Harimau (2004), Seperti Dendam, Rindu Hraus dibayar Tuntas (2014), Corat-coret di Toilet; O (Seekor Monyet yang Ingin Menikah dengan Kaisar Dangdut); Perempuan Patah Hati yang Kembali Menemukan Cinta melalui Mimpi; dan lain-lain. Ia juga menerima banyak penghargaan, antara lain: Jurnal Foreign Policy pada tahun 2006 menobatkan Eka sebagai salah satu dari 100 pemikir paling berpengaruh di dunia; dan Lelaki Harimau menjadi salah satu buku pertama dari Indonesia yang dinominasikan pada penghargaan sastra “The Man Booker International Prize”; Penghargaan Prince Claus Awards 2018 kategori Sastra/Literatur di Belanda atas kontribusi di bidang kebudayaan; Penghargaan dari Badan Pengembangan dan Pembinaan Bahasa untuk antologi cerpen Cinta Tak Ada Mati pada kategori kumpulan cerpen pada tahun 2018; The S.E.A Write Award dari Kerajaan Thailand pada tahun 2019 untuk novel O: Tentang Seekor Monyet yang Ingin Menikah dengan Kaisar Dangdut; dan Pemenang penghargaan FT/Oppenheimer Funds Emerging Voices Awards di New York atas buku yang berjudul Lelaki Harimau (Man Tiger) pada tahun 2004.',
            showDesk: false
        },
        {
            id: 4,
            name: 'Felix K. Nesi',
            intro: 'Felix K. Nesi, penulis asal Timor Tengah Utara, NTT, redaktur Cerpen di bacapetra.co, pendiri komunitas budaya Hitsane (2020) dan pendiri bersama komunitas sastra, Leko (2017). Beberapa karyanya adalah buku puisi Kita Pernah Saling Mencinta (2021) yang membahas potret geografis Pulau Timor, isu sosial, keluarga, dan manusia, buku kumpulan cerpen Usaha Membunuh Sepi (2016), dan novel Orang-Orang Oetimu (2019).',
            description: 'Felix K. Nesi, penulis asal Timor Tengah Utara, NTT, redaktur Cerpen di bacapetra.co, pendiri komunitas budaya Hitsane (2020) dan pendiri bersama komunitas sastra, Leko (2017). Beberapa karyanya adalah buku puisi Kita Pernah Saling Mencinta (2021) yang membahas potret geografis Pulau Timor, isu sosial, keluarga, dan manusia, buku kumpulan cerpen Usaha Membunuh Sepi (2016), dan novel Orang-Orang Oetimu (2019). Novel Orang-Orang Oetimu membawa Felix sebagai pemenang dalam Sayembara Menulis Novel oleh Dewan Kesenian Jakarta 2018. Penghargaan yang pernah diterimanya antara lain, Iowa International Writing Program, USA, 2022; Penghargaan Sastra Kategori Novel Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek), 2021; Finalis Kusala Sastra Khatulistiwa, 2020;  Residensi Penulis Indonesia di Universitas Leiden, 2019;  Pemenang I Sayembara Menulis Novel Dewan Kesenian Jakarta, 2018; dan  Emerging Writers Makassar International Writers Festival, 2015.',
            showDesk: false
        },
        {
            id: 5,
            name: 'Oka Rusmini',
            intro: 'Oka Rusmini adalah seorang penulis Bali yang terkenal karena karyanya yang berani dan mengeksplorasi berbagai aspek kehidupan perempuan, khususnya dalam konteks budaya Bali. Dia lahir pada tanggal 11 November 1967 di Denpasar, Bali. Karya-karya Oka Rusmini sering kali mencerminkan realitas kehidupan di Bali, dengan fokus pada pengalaman perempuan dalam masyarakat yang kental dengan tradisi dan budaya.',
            description: 'Oka Rusmini adalah seorang penulis Bali yang terkenal karena karyanya yang berani dan mengeksplorasi berbagai aspek kehidupan perempuan, khususnya dalam konteks budaya Bali. Dia lahir pada tanggal 11 November 1967 di Denpasar, Bali. Karya-karya Oka Rusmini sering kali mencerminkan realitas kehidupan di Bali, dengan fokus pada pengalaman perempuan dalam masyarakat yang kental dengan tradisi dan budaya. Beberapa karya terkenalnya antara lain novel Tarian Bumi, Sagra, dan Kenanga. Novel Tarian Bumi telah diterjemahkan ke dalam bahasa Jerman dengan judul Erden tanz (2000) dan Earth Dance dalam bahasa Inggris. Oka Rusmini kerap menggunakan bahasa yang kuat dan gambaran yang tajam dalam karyanya untuk mengeksplorasi isu-isu seperti peran gender, patriarki, agama, dan hubungan antara manusia dengan alam. Karyanya sering dianggap sebagai kontribusi penting dalam sastra Indonesia kontemporer karena penggambaran yang jujur dan mendalam tentang kehidupan Bali yang kompleks.',
            showDesk: false
        },
        {
            id: 6,
            name: 'M. Aan Mansyur',
            intro: 'Aan Mansyur adalah seorang penulis asal Bone yang aktif menulis sejak 2005. Ia telah menulis beberapa buku, seperti Kukila (2012), Melihat Api Bekerja (2015), Lelaki Terakhir yang Menangis di Bumi (2015), Tidak Ada New York Hari Ini (2016), dan Mengapa Luka Tidak Memaafkan Pisau (2020). Buku kumpulan puisi Melihat Api Bekerja karya M Aan Mansyur merupakan salah satu karya yang banyak mendapat penghargaan, seperti nominator Kusala Sastra Khatulistiwa, nominasi Anugerah Pembaca Indonesia untuk buku dan penulis favorit, dan sampul buku puisi terfavorit.',
            description: 'Aan Mansyur adalah seorang penulis asal Bone yang aktif menulis sejak 2005. Ia telah menulis beberapa buku, seperti Kukila (2012), Melihat Api Bekerja (2015), Lelaki Terakhir yang Menangis di Bumi (2015), Tidak Ada New York Hari Ini (2016), dan Mengapa Luka Tidak Memaafkan Pisau (2020). Buku kumpulan puisi Melihat Api Bekerja karya M Aan Mansyur merupakan salah satu karya yang banyak mendapat penghargaan, seperti nominator Kusala Sastra Khatulistiwa, nominasi Anugerah Pembaca Indonesia untuk buku dan penulis favorit, dan sampul buku puisi terfavorit. Kemudian puisi-puisinya dalam buku Tidak Ada  New York Hari Ini juga dikenal karena dibacakan dalam Film “Ada Apa dengan Cinta 2”. Buku Mengapa Luka Tidak Memaafkan Pisau juga dinobatkan sebagai karya puisi terbaik tahun 2021 dan mendapatkan penghargaan Kusala Sastra Khatulistiwa 2021 kategori puisi serta pada Peringatan Bulan Bahasa dan Sastra tahun 2021, buku tersebut juga dianugerahi penghargaan Sastra dari Kemendikbudristek untuk kategori puisi.',
            showDesk: false
        },
        {
            id: 7,
            name: 'Mahfud Ikhwan',
            intro: 'Mahfud Ikhwan adalah penulis kelahiran Lamongan, 7 Mei 1980. Ia merintis karier kepenulisannya ketika masih kuliah di Jurusan Sastra Indonesia, UGM. Cerpen pertamanya yang dipublikasikan berjudul “Ilham Terindah” dimuat di Annida No. 18 Th. IX 5 Juli 2000. Ikhwan adalah pemenang pertama Sayembara Novel Dewan Kesenian Jakarta 2014, melalui novel berjudul Kambing dan Hujan: Sebuah Roman.',
            description: 'Mahfud Ikhwan adalah penulis kelahiran Lamongan, 7 Mei 1980. Ia merintis karier kepenulisannya ketika masih kuliah di Jurusan Sastra Indonesia, UGM. Cerpen pertamanya yang dipublikasikan berjudul “Ilham Terindah” dimuat di Annida No. 18 Th. IX 5 Juli 2000. Ikhwan adalah pemenang pertama Sayembara Novel Dewan Kesenian Jakarta 2014, melalui novel berjudul Kambing dan Hujan: Sebuah Roman. Pada tahun 2017, dia menerima penghargaan Kusala Sastra Khatulistiwa untuk kategori prosa atas karyanya, Dawuk: Kisah Kelabu dari Rumbuk Randu. Pada tahun 2021, dia menerima penghargaan Anugerah Sutasoma 2021 kategori karya sastra terbaik yang ditulis dalam Bahasa Indonesia dari Balai Bahasa Jawa Timur untuk novel Anwar Tohari Mencari Mati (2021), sekuel dari Dawuk.',
            showDesk: false
        },
        {
            id: 8,
            name: 'Martin Suryajaya',
            intro: 'Martin Suryajaya adalah seorang penyair dan kritikus sastra. Ia meraih juara pertama dalam Sayembara Kritik Sastra Dewan Kesenian Jakarta 2013. Salah satu bukunya antara lain Sejarah Estetika (gang kabel, 2016) memenangkan penghargaan Best Art Publication dari Art Stage 2017.',
            description: 'Martin Suryajaya adalah seorang penyair dan kritikus sastra. Ia meraih juara pertama dalam Sayembara Kritik Sastra Dewan Kesenian Jakarta 2013. Salah satu bukunya antara lain Sejarah Estetika (gang kabel, 2016) memenangkan penghargaan Best Art Publication dari Art Stage 2017. Selain aktif di dunia kepenulisan, Martin Suryajaya juga bekerja sebagai pengajar di Sekolah Pascasarjana, Institut Kesenian Jakarta. Beberapa karyanya antara lain, buku antologi puisi Terdepan, Terluar, Tertinggal (2018), Principia Logica (2022), dan Penyair sebagai Mesin (2022)',
            showDesk: false
        },
        {
            id: 9,
            name: 'Okky Puspa Madasari',
            intro: 'Okky Madasari seorang penulis yang dikenal dengan karya-karya yang menyuarakan kritik sosial. Okky merupakan peraih penghargaan Khatulistiwa Literary Award dan dalam tiga tahun berturut-turut karya-karyanya selalu masuk dalam lima besar penghargaan tersebut.',
            description: 'Okky Madasari seorang penulis yang dikenal dengan karya-karya yang menyuarakan kritik sosial. Okky merupakan peraih penghargaan Khatulistiwa Literary Award dan dalam tiga tahun berturut-turut karya-karyanya selalu masuk dalam lima besar penghargaan tersebut. Karya-karyanya telah diterjemahkan ke dalam bahasa Inggris, Jerman, dan Arab. Novel-novel yang ia tulis adalah Entrok (2010), 86 (2011), Maryam (2012), Pasung Jiwa (2013), dan Kerumunan Terakhir (2016). Yang Bertahan dan Binasa Perlahan (2017) merupakan kumpulan cerita pendek yang ia tulis dalam satu dekade.',
            showDesk: false
        },
        {
            id: 10,
            name: 'Ramayda Akmal',
            intro: 'amayda Akmal, seorang penulis muda produktif asal Cilacap, lahir pada tahun 1987 dan baru-baru ini menyelesaikan studi doktoralnya di Hamburg University, Jerman (2022). Beliau juga menjadi pengajar di FIB UGM. Terkenal melalui karya-karyanya seperti "Aliansi Monyet Putih," Ramayda memulai minat menulisnya sejak kecil, dibimbing oleh kebiasaan orang tua yang gemar membaca buku dan koran.',
            description: 'Ramayda Akmal, seorang penulis muda produktif asal Cilacap, lahir pada tahun 1987 dan baru-baru ini menyelesaikan studi doktoralnya di Hamburg University, Jerman (2022). Beliau juga menjadi pengajar di FIB UGM. Terkenal melalui karya-karyanya seperti "Aliansi Monyet Putih," Ramayda memulai minat menulisnya sejak kecil, dibimbing oleh kebiasaan orang tua yang gemar membaca buku dan koran. Kehidupan di masyarakat rural tanpa sentuhan teknologi banyak memengaruhi minatnya dalam menulis, menciptakan sumber inspirasi dari aktivitas sehari-hari dan relasi antarmanusia. Kemenangannya dalam lomba menulis Dewan Kesenian Jakarta 2010 dengan "Jatisaba" mengubah pandangan Ramayda terhadap menulis, menjadikannya sarana untuk menyampaikan gagasan. Terus mengeksplorasi dunia tulis-menulis, Ramayda menjadi penulis muda yang diperhitungkan di sastra Indonesia.',
            showDesk: false
        },
        {
            id: 11,
            name: 'Reda Gaudiamo',
            intro: 'Reda Gaudiamo adalah penulis sekaligus penyanyi. Kemampuan dan hobinya ini ditekuni sejak ia duduk di bangku Sekolah Dasar. Tulisan pertamanya menceritakan kisah sewaktu ia kelas 1 SD. Kemudian beliau semakin gemar menulis khususnya pada pelajaran Bahasa Indonesia hingga jenjang SMA.',
            description: 'Reda Gaudiamo adalah penulis sekaligus penyanyi. Kemampuan dan hobinya ini ditekuni sejak ia duduk di bangku Sekolah Dasar. Tulisan pertamanya menceritakan kisah sewaktu ia kelas 1 SD. Kemudian beliau semakin gemar menulis khususnya pada pelajaran Bahasa Indonesia hingga jenjang SMA. Ketika masa kuliah, beliau mulai mempublikasikan karya tulisnya. Karya-karyanya antara lain, Seri cerita NaWilla, Bisik-Bisik, Pengantin Baru, dan Tentang Kita. Penghargaan yang telah diraih yaitu Juara Lomba Penulisan Cerita Pendek Majalah Femina (1990), Juara Lomba Penulisan Novel Femina (1990), Juara Lomba Penulisan Cerita Pendek Majalah Gadis (1991), dan terpilih sebagai salah satu penulis Indonesia yang diundang mengikuti Ubud Writers & Readers Festival (2008 dan 2010), di mana pada tahun 2008 diundang menjadi pembicara dari kalangan penulis perempuan yang datang dengan gaya penulisan baru di wilayah ASEAN.',
            showDesk: false
        },
        {
            id: 12,
            name: 'Saras Dewi',
            intro: 'Saras Dewi lahir pada tanggal 16 September 1983 di Denpasar, Bali. Dia adalah seorang penyanyi, aktivis, penulis, sekaligus staf pengajar di Departemen Filsafat Universitas Indonesia. Dia telah menerbitkan berbagai karya tulis, termasuk kumpulan puisi Jiwa Putih (2004) kemudian buku nonfiksi berkolaborasi dengan anggota Departemen Filsafat UI, Hak Asasi Manusia (2006), buku filsafat popular Cinta Bukan Cokelat (2010), sedangkan publikasi yang terbaru diambil dari disertasinya Ekofenomenologi (2015).',
            description: 'Saras Dewi lahir pada tanggal 16 September 1983 di Denpasar, Bali. Dia adalah seorang penyanyi, aktivis, penulis, sekaligus staf pengajar di Departemen Filsafat Universitas Indonesia. Dia telah menerbitkan berbagai karya tulis, termasuk kumpulan puisi Jiwa Putih (2004) kemudian buku nonfiksi berkolaborasi dengan anggota Departemen Filsafat UI, Hak Asasi Manusia (2006), buku filsafat popular Cinta Bukan Cokelat (2010), sedangkan publikasi yang terbaru diambil dari disertasinya Ekofenomenologi (2015). Esai sastra dan pergerakan telah diterbitkan oleh Jurnal Internasional Brill dengan tajuk “Engaged Literature” (2016). Pada 2002 pernah meluncurkan album Chrysan bersama Bintang Record, dengan single “Lembayung Bali”. Sejak tahun 2014, ia aktif dalam Gerakan Bali Tolak Reklamasi. Selain pergerakan penyelamatan lingkungan hidup,  ia juga mendampingi kasus-kasus kekerasan seksual dan turut mengkampanyekan eliminasi kekerasan seksual. Ia adalah sosok yang inspiratif dan multitalenta. Ia telah memberikan banyak kontribusi untuk pendidikan, lingkungan, dan musik di Indonesia.',
            showDesk: false
        },
        {
            id: 13,
            name: 'Triyanto Triwikromo',
            intro: 'Triyanto Triwikromo adalah seorang penulis yang lahir di Salatiga 15 September 1964. Ia pernah menjadi Ketua Komite Sastra, Dewan Kesenian Jawa Tengah (DKJT) tahun 2007. Kini, di samping bekerja sebagai redaktur sastra di harian Suara Merdeka, ia juga menulis cerpen di harian Kompas, Media Indonesia, Koran Tempo, Suara Pembaruan, Suara Merdeka, dan Republika.',
            description: 'Triyanto Triwikromo adalah seorang penulis yang lahir di Salatiga 15 September 1964. Ia pernah menjadi Ketua Komite Sastra, Dewan Kesenian Jawa Tengah (DKJT) tahun 2007. Kini, di samping bekerja sebagai redaktur sastra di harian Suara Merdeka, ia juga menulis cerpen di harian Kompas, Media Indonesia, Koran Tempo, Suara Pembaruan, Suara Merdeka, dan Republika. Ia mendapat anugerah Tokoh Seni Pilihan Tempo 2015 (Sastra-Puisi) setelah menulis Kematian Kecil Kartosoewirjo. Buku yang sama juga masuk Lima Besar Kusala Sastra Khatulistiwa 2014-2015. Ia juga memperoleh Penghargaan Sastra 2009 dari Pusat Bahasa untuk buku kumpulan cerpen "Ular di Mangkuk Nabi."',
            showDesk: false
        },
        {
            id: 14,
            name: 'Zen Hae',
            intro: 'Zen Hae adalah penulis cerpen, puisi, esai, dan kritik sastra yang lahir di Jakarta, 12 April 1970. Beliau merupakan lulusan IKIP Jakarta (kini Universitas Negeri Jakarta). Beberapa karya beliau antara lain, Rumah Kawin (2004) dan Paus Merah Jambu (2007) yang mendapat penghargaan Karya Sastra Terbaik 2007 versi majalah Tempo.',
            description: 'Zen Hae adalah penulis cerpen, puisi, esai, dan kritik sastra yang lahir di Jakarta, 12 April 1970. Beliau merupakan lulusan IKIP Jakarta (kini Universitas Negeri Jakarta). Beberapa karya beliau antara lain, Rumah Kawin (2004) dan Paus Merah Jambu (2007) yang mendapat penghargaan Karya Sastra Terbaik 2007 versi majalah Tempo. Selain itu, ada pula kumpulan cerpen edisi tiga-bahasa (Indonesia, Jerman, Inggris) berjudul The Red Bowl and Other Stories (2015). Zen Hae juga pernah menjadi anggota Komite Sastra Dewan Kesenian Jakarta (2006-2012) dan berperan sebagai Ketua Komite Sastra dalam tiga tahun pertama. Pada tahun 2012, beliau juga bergabung dengan Komunitas Salihara dan sejak 2020, membantu keredaksian di Yayasan Lontar. Sebagai salah satu pendiri Koalisi Seni, Zen Hae juga beberapa kali menjadi juri di Sayembara Novel Dewan Kesenian Jakarta, Festival Teater Jakarta 2019.',
            showDesk: false
        },
        {
            id: 15,
            name: 'Agustinus Prih Adiartanto',
            intro: 'Beliau adalah seorang pendidik/guru yang mengampu mata pelajaran Bahasa Indonesia dari SMA Kolese De Britto, Yogyakarta. Dalam hal pemanfaatan buku sastra, salah satu cara yang beliau lakukan adalah memberikan tugas membaca buku-buku sastra yang berbeda untuk setiap murid dan kemudian para murid diminta membuat apresiasi bahkan kritik sastra terhadap buku sastra yang ditugaskan.',
            description: 'Beliau adalah seorang pendidik/guru yang mengampu mata pelajaran Bahasa Indonesia dari SMA Kolese De Britto, Yogyakarta. Dalam hal pemanfaatan buku sastra, salah satu cara yang beliau lakukan adalah memberikan tugas membaca buku-buku sastra yang berbeda untuk setiap murid dan kemudian para murid diminta membuat apresiasi bahkan kritik sastra terhadap buku sastra yang ditugaskan. Hal yang menarik adalah tugas membaca sastra ini beliau kreasikan dengan menentukan tema-tema tertentu yang nantinya akan didiskusikan bersama di dalam kelas dan dapat ditindaklanjuti dengan membuat satu proyek yang dapat ditampilkan. Praktik baik ini tentunya membuat murid-murid meningkat kemampuan literasinya, bahkan mengasah daya pikir dan nalar kritisnya, serta lebih lanjut membentuk karakter murid.',
            showDesk: false
        },
        {
            id: 16,
            name: 'Iin Indriyati',
            intro: 'Beliau adalah seorang pendidik/guru di SD GagasCeria Bandung. Minat beliau dalam dunia literasi membuat beliau sering diundang sebagai narasumber dalam acara-acara bertemakan literasi yang diadakan oleh komunitas guru. Dalam hal pemanfaatan buku sastra, SD GagasCeria sering melakukan kegiatan mengulas buku bersama para muridnya.',
            description: 'Beliau adalah seorang pendidik/guru di SD GagasCeria Bandung. Minat beliau dalam dunia literasi membuat beliau sering diundang sebagai narasumber dalam acara-acara bertemakan literasi yang diadakan oleh komunitas guru. Dalam hal pemanfaatan buku sastra, SD GagasCeria sering melakukan kegiatan mengulas buku bersama para muridnya. Para murid awalnya diajak untuk membaca buku secara mandiri kemudian diberikan pertanyaan-pertanyaan pemantik yang selanjutnya akan dibahas bersama. Variasi kegiatan sebagai tindak lanjut kegiatan membaca dan mengulas buku ini juga dilakukan dengan meminta murid menceritakan ulang melalui lisan ataupun gambar, dan lain-lain.',
            showDesk: false
        },
        {
            id: 17,
            name: 'Sekar Ayu Adhaningrum',
            intro: 'Beliau adalah seorang pendidik/guru sekaligus Kepala Bidang Literasi dan Perpustakaan di Sekolah Kembang, Jakarta. Beliau sering diundang sebagai narasumber di berbagai acara dengan tema buku dan kepenulisan untuk menyebarkan praktik-praktik baik yang dilakukan beliau bersama tim perpustakaan Sekolah Kembang terkait pentingnya peningkatan literasi di sekolah.',
            description: 'Beliau adalah seorang pendidik/guru sekaligus Kepala Bidang Literasi dan Perpustakaan di Sekolah Kembang, Jakarta. Beliau sering diundang sebagai narasumber di berbagai acara dengan tema buku dan kepenulisan untuk menyebarkan praktik-praktik baik yang dilakukan beliau bersama tim perpustakaan Sekolah Kembang terkait pentingnya peningkatan literasi di sekolah. Dalam hal pemanfaatan buku sastra, beliau telah memulainya sejak 2011 dengan melakukan pembacaan bersama di kelas dan dilanjutkan dengan diskusi isi buku. Selanjutnya praktik baik ini dikembangkan menjadi sebuah komunitas belajar bagi guru-guru mata pelajaran Bahasa Indonesia di Sekolah Kembang dengan pertemuan yang rutin. Sampai hari ini, praktik pemanfaatan buku sastra ini sudah dilakukan oleh para murid dari jenjang PAUD, SD, bahkan SMP di Sekolah Kembang. Kegiatan awal dengan membaca bersama dan diskusi tentang isi buku juga telah ditindaklanjuti bahkan dengan membuat variasi kegiatan seperti memperkenalkan penulis kepada anak, membuat riset dari hasil bacaan, membuat pameran, dan lain-lain yang disesuaikan dengan kebutuhan kelas.',
            showDesk: false
        },
    ]);

    return (
        <section className="py-5">
            <div className="container p-3">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <h1 className="mb-5 display-6 text-center">Profil Kurator</h1>
                        <div className="table-responsive">
                            <table className="table">
                                <thead style={{ backgroundColor: '#D5E2FF' }}>
                                    <tr>
                                        <th width="200px">Nama Kurator</th>
                                        <th>Profil Singkat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currators.map((currator, index) => (
                                            <tr key={index}>
                                                <td>{currator.name}</td>
                                                {
                                                    !currator.showDesk ? (
                                                        <td>
                                                            {currator.intro} &nbsp;
                                                            <button class="text-blue bg-transparent border-0 ps-0" onClick={() => showDesk(index)}>selengkapnya &gt;</button>
                                                        </td>
                                                    ) : (
                                                        <td>
                                                            {currator.description} 
                                                            <button class="text-blue bg-transparent border-0 ps-0" onClick={() => hideDesk(currator.id)}>&lt; kembali</button>
                                                        </td>
                                                    )
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SectionKurator