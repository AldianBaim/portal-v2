import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/global/Layout'
import Hero from '../../components/guide/Hero/Hero'
import SectionIntroTeacher from '../../components/guide/sections/SectionIntro/SectionIntroTeacher'
import SectionJelajahi from '../../components/guide/sections/SectionJelajahi/SectionJelajahi'
import SectionStats from '../../components/home/sections/SectionStats/SectionStats'
import { BASE_URL } from '../../utils/config'

const ForTeacher = () => {
    const [statisticBook, setStatisticBook] = useState([])

    useEffect(() => {
        const getStatisticBook = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/statistic/getSummary`);
                setStatisticBook(response.data)
            } catch (error) {
                return error.message
            }
        }
        getStatisticBook();
    }, [])

    const content = {
        subtitle: 'BUKU UNTUK GURU',
        title: 'Temukan referensi buku-buku resmi dari Kemdikbud',
        image: '/assets/image/guide/untuk guru.png',
        vector: '/assets/image/guide/vectorForTeacher.png',
        description: 'Akses berbagai referensi buku untuk membantu proses belajar mengajar Ibu/Bapak guru di seluruh Indonesia'
    }

    return (
        <Layout guide>
            <Hero content={content} role="teacher" />
            <SectionIntroTeacher />
            <SectionJelajahi />
            <SectionStats data={statisticBook} guide />
        </Layout>
    )
}

export default ForTeacher