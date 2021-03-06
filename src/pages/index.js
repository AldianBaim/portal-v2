import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/global/Layout'
import Hero from '../components/home/hero'
import SectionAccessBook from '../components/home/sections/SectionAccessBook/SectionAccessBook'
import SectionAudioBook from '../components/home/sections/SectionAudioBook/SectionAudioBook'
import SectionBookForAll from '../components/home/sections/SectionBookForAll/SectionBookForAll'
import SectionFAQ from '../components/home/sections/SectionFAQ/SectionFAQ'
import SectionPopularBook from '../components/home/sections/SectionPopularBook/SectionPopularBook'
import SectionStats from '../components/home/sections/SectionStats/SectionStats'
import SectionTestimony from '../components/home/sections/SectionTestimony/SectionTestimony'
import { BASE_URL } from '../utils/config'

const Home = () => {

    // Handle night mode
    let nightMode = false
    let hours = (new Date()).getHours();
    hours >= 18 || hours <= 6 ? (nightMode = true) : (nightMode = false)

    const [popularBooks, setPopularBooks] = useState([])
    const [audioBooks, setAudioBooks] = useState([])
    const [statisticBook, setStatisticBook] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getPopularBooks = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/statistic/getPopularCatalogue?qty=4`);
                setPopularBooks(response.data.results)
                setLoading(false)
            } catch (error) {
                return error.message
            }
        }
        const getAudioBooks = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${BASE_URL}/api/catalogue/getPenggerakTextBooks?limit=4&type_audio`);
                setAudioBooks(response.data.results)
                setLoading(false)
            } catch (error) {
                return error.message
            }
        }
        const getStatisticBook = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/statistic/getSummary`);
                setStatisticBook(response.data)
            } catch (error) {
                return error.message
            }
        }
        getStatisticBook();
        getPopularBooks();
        getAudioBooks();
    }, [])

    return (
        <Layout>
            <Hero nightMode={nightMode} />
            <SectionStats data={statisticBook} />
            <SectionPopularBook
                loading={loading}
                popularBooks={popularBooks}
            />
            <SectionAccessBook />
            <SectionAudioBook
                loading={loading}
                audioBooks={audioBooks}
            />
            <SectionBookForAll />
            <SectionTestimony nightMode={nightMode} />
            <SectionFAQ nightMode={nightMode} />
        </Layout>
    )
}

export default Home