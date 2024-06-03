import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/global/Layout'
import Hero from '../components/HariBukuNasional/hero'
import { BASE_URL } from '../utils/config'
import SectionIntro from '../components/HariBukuNasional/sections/SectionIntro'
import SectionCTA from '../components/HariBukuNasional/sections/SectionCTA'
import SectionSastraKurikulum from '../components/HariBukuNasional/sections/SectionSastraKurikulum'
import SectionGuideline from '../components/HariBukuNasional/sections/SectionGuideline'
import SectionCatalog from '../components/HariBukuNasional/sections/SectionCatalog'
import SectionTestimony from '../components/HariBukuNasional/sections/SectionTestimony'
import SectionKurator from '../components/home/sections/SectionKurator/SectionKurator'

const HariBukuNasional = () => {

    // Handle night mode
    let nightMode = false
    let hours = (new Date()).getHours();
    hours >= 18 || hours <= 6 ? (nightMode = true) : (nightMode = false)

    const [popularBooks, setPopularBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [mode, setMode] = useState('card')

    const [books, setBooks] = useState([
        {
            title: 'Komponis Kecil',
            writer: 'Soesilo Toer',
            publisher: 'Pataba Press, Blora',
            published_year: '1952(cetakan terakhir 2015)',
            bentuk_sastra: 'Novel',
            peruntukan: 'SD/MI',
            disclaimer: 'Tidak terdapat disclaimer/penafian yang perlu pendampingan khusus',
            cover: 'komponis-kecil.png'
        },
        {
            title: 'Garuda Gaganeswara',
            writer: 'Ari Nilandary',
            publisher: 'Alif Republika',
            published_year: '2020',
            bentuk_sastra: 'Novel',
            peruntukan: 'SD/MI',
            disclaimer: 'Kekerasan verbal, Kekerasan fisik',
            cover: 'garuda-gaganeswara.png'
        },
        {
            title: 'Pak Supi, Kakek Pengungsi',
            writer: 'S. Rukiah Kertapati',
            publisher: 'Ultimus',
            published_year: '1961, 2018',
            bentuk_sastra: 'Novel',
            peruntukan: 'SD/MI',
            disclaimer: 'Terdapat istilah-istilah sadisme, menyinggung ras atau antar golongan tertentu',
            cover: 'pak-supi.png'
        },
        {
            title: 'Pupus Putus Sekolah: Anak Berharga',
            writer: 'Kurnia Harta Winata',
            publisher: 'Kanisius',
            published_year: '2022',
            bentuk_sastra: 'Komik',
            peruntukan: 'SD/MI',
            disclaimer: 'Kalimat kurang sopan, trigger warning',
            cover: 'pupus-putus.png'
        },
        {
            title: 'Si Cemong Coak',
            writer: 'Iwok Abqary',
            publisher: 'Kemendikbudristek',
            published_year: '2022',
            bentuk_sastra: 'Novel',
            peruntukan: 'SD/MI',
            disclaimer: 'Terdapat istilah-istilah kekerasan verbal, terdapat perilaku kekerasan terhadap hewan, terdapat istilah kedokteran hewan, terdapat istilah biologi',
            cover: 'si-cemong-coak.png'
        },
        {
            title: 'Pilus Rumput Laut Untuk Rasi',
            writer: 'Nabila Adani dan Salma Intifada',
            publisher: 'Kemendikbudristek',
            published_year: '2022',
            bentuk_sastra: 'Novel',
            peruntukan: 'SD/MI',
            disclaimer: 'Tidak terdapat disclaimer/penafian yang perlu pendampingan khusus',
            cover: 'pilus-rumput-laut.png'
        },
        {
            title: 'Si Dul Anak Jakarta',
            writer: 'Aman Datuk Madjowindo',
            publisher: 'Balai Pustaka',
            published_year: '1932 (Cetakan Terakhir 2006)',
            bentuk_sastra: 'Novel',
            peruntukan: 'SD/MI',
            disclaimer: 'Kekerasan verbal dan fisik, beberapa norma sosial yang perlu pembahasan lebih lanjut',
            cover: 'si-dul.png'
        },
        {
            title: 'Si Jamin dan Si Johan',
            writer: 'Merari Siregar',
            publisher: 'Balai Pustaka',
            published_year: '1921 (Cetakan Terakhir 2011)',
            bentuk_sastra: 'Novel',
            peruntukan: 'SD/MI',
            disclaimer: 'Seksualitas, kekerasan fisik, kekerasan verbal, penggunaan bahasa',
            cover: 'si-jamin-johan.png'
        },
        {
            title: 'Menjebak Hantu Kuburan Pasirnaga',
            writer: 'Sri Waluyati Sandi',
            publisher: 'Balai Pustaka',
            published_year: '1987',
            bentuk_sastra: 'Novel',
            peruntukan: 'SD/MI',
            disclaimer: 'Tidak terdapat disclaimer/penafian yang perlu pendampingan khusus',
            cover: 'menjebak-hantu.png'
        },
    ])

    // useEffect(() => {
    //     setLoading(true)
    //     const getPopularBooks = async () => {
    //         try {
    //             const response = await axios.get(`${BASE_URL}/api/statistic/getPopularCatalogue?qty=4`);
    //             setPopularBooks(response.data.results)
    //             setLoading(false)
    //         } catch (error) {
    //             return error.message
    //         }
    //     }
    //     getPopularBooks();
    // }, [])

    return (
        <Layout>
            <Hero />
            <SectionIntro/>
            <SectionSastraKurikulum/>
            <SectionGuideline setMode={(mode) => setMode(mode)}/>
            <SectionCatalog books={books} mode={mode}/>
            <SectionKurator/>
            <SectionTestimony/>
            <SectionCTA/>
        </Layout>
    )
}

export default HariBukuNasional