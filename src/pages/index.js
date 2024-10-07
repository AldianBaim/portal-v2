import React from 'react'
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

function useAudioBooks() {
    const { data, error, isValidating } = useSWR(`${BASE_URL}/api/catalogue/getPenggerakTextBooks?limit=4&type_audio`, fetcher, {
        refreshInterval: 18000000,    // Re-fetch setiap 5 Jam
        dedupingInterval: 18000000,   // Cegah fetching ulang dalam 5 Jam
        revalidateOnFocus: false,  // Jangan revalidate saat window fokus kembali
        revalidateOnReconnect: false
    });

    const audioBooks = data?.results ?? [];
    const loadingAudioBooks = isValidating ?? false;
  
    return { audioBooks, errorAudioBooks: error ,loadingAudioBooks };
}

function usePopularBooks() {
    const { data, error, isValidating } = useSWR(`${BASE_URL}/api/statistic/getPopularCatalogue?qty=4`, fetcher, {
        refreshInterval: 18000000,    // Re-fetch setiap 5 Jam
        dedupingInterval: 18000000,   // Cegah fetching ulang dalam 5 Jam
        revalidateOnFocus: false,  // Jangan revalidate saat window fokus kembali
        revalidateOnReconnect: false
    });

    const popularBooks = data?.results ?? [];
    const loadingPopularBooks = isValidating ?? false;
  
    return { popularBooks, errorPopularBooks: error ,loadingPopularBooks };
}

const Home = () => {

    // Handle night mode
    let nightMode = false
    let hours = (new Date()).getHours();
    hours >= 18 || hours <= 6 ? (nightMode = true) : (nightMode = false)

    const { statisticBook } = useStatisticBook();
    const { audioBooks, loadingAudioBooks } = useAudioBooks();
    const { popularBooks, loadingPopularBooks } = usePopularBooks();

    return (
        <Layout>
            <Hero nightMode={nightMode} />
            <SectionStats data={statisticBook ?? {}} />
            <SectionPopularBook
                loading={loadingPopularBooks}
                popularBooks={popularBooks ?? []}
            />
            <SectionAccessBook />
            <SectionAudioBook
                loading={loadingAudioBooks}
                audioBooks={audioBooks}
            />
            <SectionBookForAll />
            <SectionTestimony nightMode={nightMode} />
            <SectionFAQ nightMode={nightMode} />
        </Layout>
    )
}

export default Home