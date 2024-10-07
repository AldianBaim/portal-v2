import React from 'react'
import Layout from '../../components/global/Layout'
import Hero from '../../components/guide/Hero/Hero'
import SectionIntroParent from '../../components/guide/sections/SectionIntro/SectionIntroParent'
import SectionJelajahi from '../../components/guide/sections/SectionJelajahi/SectionJelajahi'
import SectionStats from '../../components/home/sections/SectionStats/SectionStats'
import { BASE_URL } from '../../utils/config'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function useStatisticBook() {
    const { data, error, isValidating } = useSWR(`${BASE_URL}/api/statistic/getSummary`, fetcher, {
        refreshInterval: 18000000,    // Re-fetch setiap 5 Jam
        dedupingInterval: 18000000,   // Cegah fetching ulang dalam 5 Jam
        revalidateOnFocus: false,  // Jangan revalidate saat window fokus kembali
        revalidateOnReconnect: false
    });

    const statisticBook = data ?? {};
    const loadingStatisticBook = isValidating ?? false;
  
    return { statisticBook, errorStatisticBook: error ,loadingStatisticBook };
}

const ForParent = () => {
    const { statisticBook } = useStatisticBook();

    const content = {
        subtitle: 'BUKU UNTUK ORANG TUA',
        title: 'Bantu tingkatkan proses belajar anak',
        image: '/assets/image/guide/untuk ortu.png',
        vector: '/assets/image/guide/vectorForParent.png',
        description: 'Dengan akses gratis ke semua buku pelajaran resmi kemendikbud dari jenjang pendidikan PAUD sampai SMA'
    }

    return (
        <Layout guide>
            <Hero content={content} role="parent" />
            <SectionIntroParent />
            <SectionJelajahi />
            <SectionStats data={statisticBook} guide />
        </Layout>
    )
}

export default ForParent