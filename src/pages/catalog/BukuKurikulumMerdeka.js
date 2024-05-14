import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/catalog/hero'
import SectionCatalog from '../../components/catalog/sections/SectionCatalog/SectionCatalog'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const BukuTeksK13 = () => {

    // State handle query params from homepage
    const location = useLocation()
    const [title, setTitle] = useState(location.state !== null ? location.state.title : null)
    const [typeSearchBook, setTypeSearchBook] = useState(location.state !== null ? location.state.typeBook : null)

    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([])
    const [limit, setLimit] = useState(12)
    const [typeBook, setTypeBook] = useState('type_pdf')
    const [typeCatalogue, setTypeCatalogue] = useState('getPenggerakTextBooks')

    // State for filter endpoints
    const [popularBook, setPopularBook] = useState('')
    const [latestBook, setLatestBook] = useState('')

    // State for filter level
    const [level, setLevel] = useState('')
    const [checkActive, setCheckActive] = useState('')

    // State for filter lesson
    const [lessonFilter, setLessonFilter] = useState([])

    // Filter jenjang kelas
    const [classFilter, setClassFilter] = useState([]);

    useEffect(() => {
        let classPattern = classFilter.join('&');
        let lessonPattern = lessonFilter.join('&');

        // Default routing endpoints
        let ENDPOINTS_URL = `${BASE_URL}/api/catalogue/${typeCatalogue}?limit=2000&${typeBook}&order_by=updated_at${latestBook}`;

        if (latestBook) ENDPOINTS_URL += `&${latestBook}`;
        if (level) ENDPOINTS_URL += `&${level}`;
        if (classPattern) ENDPOINTS_URL += `&${classPattern}`;
        if (lessonPattern) ENDPOINTS_URL += `&${lessonPattern}`;

        // Filter route endpoints for popular book
        if (popularBook) ENDPOINTS_URL = `${BASE_URL}/api/statistic/${popularBook}?qty=20`;

        // Filter search from homepage
        if (title !== null && !popularBook) {
            setTypeBook('')
            if (typeSearchBook === 'Kurikulum Merdeka') {
                ENDPOINTS_URL = `${BASE_URL}/api/catalogue/getPenggerakTextBooks?title=${title}&limit=20&offset=0`;
                setTypeCatalogue('getPenggerakTextBooks');
            }
            if (typeSearchBook === 'Teks K13') {
                ENDPOINTS_URL = `${BASE_URL}/api/catalogue/getTextBooks?title=${title}&limit=20&offset=0`;
                setTypeCatalogue('getTextBooks');
            }
            if (typeSearchBook === 'Nonteks') {
                ENDPOINTS_URL = `${BASE_URL}/api/catalogue/getNonTextBooks?title=${title}&limit=20&offset=0`;
                setTypeCatalogue('getNonTextBooks');
            }
        }

        const getBooks = async () => {
            setLoading(true)
            try {
                const response = await axios.get(ENDPOINTS_URL)
                setBooks(response.data.results)
                setLoading(false)
            } catch (err) {
                return err.message;
            }
        };
        getBooks()
    }, [title, typeSearchBook, popularBook, typeCatalogue, typeBook, level, lessonFilter, classFilter , latestBook])

    const handleSetLevel = (type) => {
        if (type == 'level_paud') {
            if (checkActive == type) {
                setCheckActive('')
                setLevel('')
            } else {
                setCheckActive(type)
                setLevel(type)
            }
        }
        if (type == 'level_sd') {
            if (checkActive == type) {
                setCheckActive('')
                setLevel('')
            } else {
                setCheckActive(type)
                setLevel(type)
            }
        }
        if (type == 'level_smp') {
            if (checkActive == type) {
                setCheckActive('')
                setLevel('')
            } else {
                setCheckActive(type)
                setLevel(type)
            }
        }
        if (type == 'level_sma') {
            if (checkActive == type) {
                setCheckActive('')
                setLevel('')
            } else {
                setCheckActive(type)
                setLevel(type)
            }
        }

        if (type == 'level_sdlb') {
            if (checkActive == type) {
                setCheckActive('')
                setLevel('')
            } else {
                setCheckActive(type)
                setLevel(type)
            }
        }
    }

    const filterSearchCatalogue = (data) => {
        setTitle(data.title)
        setTypeCatalogue(data.typeCatalogue)

        data.typeCatalogue === 'getPenggerakTextBooks' && setTypeSearchBook('Kurikulum Merdeka')
        data.typeCatalogue === 'getTextBooks' && setTypeSearchBook('Teks K13')
        data.typeCatalogue === 'getNonTextBooks' && setTypeSearchBook('Nonteks')
    }

    const handleFilter = (data, type) => {

        const filterObject = {
            class: classFilter,
            lesson: lessonFilter,
        };

        let filterArray = filterObject[type];

        if (!filterArray.includes(data)) {
            filterArray = [...filterArray, data];
        } else {
            filterArray = filterArray.filter(item => item !== data);
        }

        // Update state sesuai dengan filterType yang digunakan
        switch (type) {
            case 'class':
                setClassFilter(filterArray);
                break;
            case 'lesson':
                setLessonFilter(filterArray);
                break;
        }
    }

    return (
        <Layout>
            <Hero
                typeCatalogue={typeCatalogue}
                setTypeCatalogue={(type) => {
                    setTypeCatalogue(type)
                }}
            />
            <SectionCatalog
                setPopularBook={(popular) => setPopularBook(popular)}
                setLatestBook={(latest) => setLatestBook(latest)}
                searchTitle={title}
                books={books}
                loading={loading}
                skeletonCount={limit}
                typeBook={typeBook}
                typeCatalogue={typeCatalogue}
                checkActive={checkActive}
                setSearchTypeCatalogue={(data) => filterSearchCatalogue(data)}
                setTypeCatalogue={(type) => setTypeCatalogue(type)}
                setTypeBook={(type) => setTypeBook(type)}
                setLevel={(level) => handleSetLevel(level)}
                setClass={(value) => handleFilter(value, 'class')}
                setLesson={(value) => handleFilter(value, 'lesson')}
            />
        </Layout>
    )
}

export default BukuTeksK13