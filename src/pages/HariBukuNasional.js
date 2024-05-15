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

const HariBukuNasional = () => {

    // Handle night mode
    let nightMode = false
    let hours = (new Date()).getHours();
    hours >= 18 || hours <= 6 ? (nightMode = true) : (nightMode = false)

    const [popularBooks, setPopularBooks] = useState([])
    const [loading, setLoading] = useState(false)

    const [books, setBooks] = useState([
        {
            title: 'Komponis Kecil',
            writer: 'Soesilo Toer',
            publisher: 'Pataba Press, Blora',
            published_year: '1952(cetakan terakhir 2015)',
            bentuk_sastra: 'Novel',
            peruntukan: 'SD/MI'
        },
        {
            title: 'Garuda Gaganeswara',
            writer: 'Ari Nilandary',
            publisher: 'Alif Republika',
            published_year: '2020',
            bentuk_sastra: 'Novel',
            peruntukan: 'SD/MI'
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
            <SectionGuideline/>
            <SectionCatalog books={books}/>
            <SectionTestimony/>
            <SectionCTA/>
        </Layout>
    )
}

export default HariBukuNasional