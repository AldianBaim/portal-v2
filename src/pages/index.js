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
import useSWR from 'swr';

const EXPIRY_DAYS = 2;

// Fungsi untuk memeriksa apakah data di localStorage sudah kadaluarsa
function isDataExpired(key) {
    const lastSavedTime = localStorage.getItem(`${key}Timestamp`);
    const currentTime = new Date().getTime();
    const expiryTime = EXPIRY_DAYS * 24 * 60 * 60 * 1000; // 2 hari dalam milidetik
  
    return !lastSavedTime || currentTime - lastSavedTime >= expiryTime;
}
  
  // Fungsi untuk mengambil data dari localStorage dengan pengecekan kadaluarsa
function getCachedData(key) {
    if (isDataExpired(key)) {
      localStorage.removeItem(key); // Hapus data kadaluarsa
      localStorage.removeItem(`data-home-timestamp`);
      return undefined;
    }
  
    const cachedData = localStorage.getItem(key);
    return cachedData ? JSON.parse(cachedData) : undefined;
}

function useAudioBooks() {
    const [audioBooks, setAudioBooks] = useState([]);
    const [loadingAudioBooks, setLoadingAudioBooks] = useState(true);
    const [errorAudioBooks, setErrorAudioBooks] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        const cachedData = getCachedData('audioBooksData');
  
        if (cachedData) {
          setAudioBooks(cachedData.results);
          setLoadingAudioBooks(false);
          return;
        }
  
        try {
          const response = await fetch(`${BASE_URL}/api/catalogue/getPenggerakTextBooks?limit=4&type_audio`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const responseData = await response.json();
          setAudioBooks(responseData.results);
          setLoadingAudioBooks(false);
  
          localStorage.setItem('audioBooksData', JSON.stringify(responseData));
          localStorage.setItem('audioBooksDataTimestamp', new Date().getTime().toString());
  
        } catch (error) {
          console.error("Error fetching audio books:", error.message);
          setErrorAudioBooks(error);
          setLoadingAudioBooks(false);
        }
      }
  
      fetchData();
    }, []);
  
    return { audioBooks, errorAudioBooks, loadingAudioBooks };
}
  
function useStatisticBook() {
    const [statisticBook, setStatisticBook] = useState({});
    const [loadingStatisticBook, setLoadingStatisticBook] = useState(true);
    const [errorStatisticBook, setErrorStatisticBook] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        const cachedData = getCachedData('statisticBookData');
  
        if (cachedData) {
          setStatisticBook(cachedData);
          setLoadingStatisticBook(false);
          return;
        }
  
        try {
          const response = await fetch(`${BASE_URL}/api/statistic/getSummary`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const responseData = await response.json();
          setStatisticBook(responseData);
          setLoadingStatisticBook(false);
  
          localStorage.setItem('statisticBookData', JSON.stringify(responseData));
          localStorage.setItem('statisticBookDataTimestamp', new Date().getTime().toString());
  
        } catch (error) {
          console.error("Error fetching data statistik:", error.message);
          setErrorStatisticBook(error);
          setLoadingStatisticBook(false);
        }
      }
  
      fetchData();
    }, []);
  
    return { statisticBook, errorStatisticBook, loadingStatisticBook };
}

function usePopularBooks() {
    const [popularBooks, setPopularBooks] = useState([]);
    const [loadingPopularBooks, setLoadingPopularBooks] = useState(true);
    const [errorPopularBooks, setErrorPopularBooks] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        const cachedData = getCachedData('popularBooksData');
  
        if (cachedData) {
          setPopularBooks(cachedData.results); // Ambil data dari cachedData
          setLoadingPopularBooks(false);
          return;
        }
  
        try {
          const response = await fetch(`${BASE_URL}/api/statistic/getPopularCatalogue?qty=4`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const responseData = await response.json();
          setPopularBooks(responseData.results);
          setLoadingPopularBooks(false);
  
          localStorage.setItem('popularBooksData', JSON.stringify(responseData)); // Simpan seluruh responseData
          localStorage.setItem('popularBooksDataTimestamp', new Date().getTime().toString());
  
        } catch (error) {
          console.error("Error fetching popular books:", error.message);
          setErrorPopularBooks(error);
          setLoadingPopularBooks(false);
        }
      }
  
      fetchData();
    }, []);
  
    return { popularBooks, errorPopularBooks, loadingPopularBooks };
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