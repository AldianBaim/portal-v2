import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/catalog/hero'
import SectionCatalog from '../../components/catalog/sections/SectionCatalog/SectionCatalog'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const BukuNonTeks = () => {

    // State handle query params from homepage
    const location = useLocation()
    const [title, setTitle] = useState(location.state !== null ? location.state.title : null)
    const [typeSearchBook, setTypeSearchBook] = useState(location.state !== null ? location.state.typeBook : null)

    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([])
    const [limit, setLimit] = useState(12)
    const [typeBook, setTypeBook] = useState('type_pdf')
    const [typeCatalogue, setTypeCatalogue] = useState('getNonTextBooks')

    // State for filter endpoints
    const [popularBook, setPopularBook] = useState('')
    const [latestBook, setLatestBook] = useState('')

    // State for filter
    const [level, setLevel] = useState('')
    const [tag, setTag] = useState('Buku Model')


    useEffect(() => {
        let ENDPOINTS_URL = `${BASE_URL}/api/catalogue/${typeCatalogue}?limit=2000&${typeBook}&${level}&${latestBook}&tag=${tag}`;

        // Filter route endpoints for popular book
        popularBook && (ENDPOINTS_URL = `${BASE_URL}/api/statistic/${popularBook}?qty=20`)

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
                ENDPOINTS_URL = `${BASE_URL}/api/catalogue/getNonTextBooks?title=${title}&limit=20&offset=0&sort=desc`;
                setTypeCatalogue('getNonTextBooks');
            }
        }

        const getBooks = async () => {
            setLoading(true)
            try {
                const response = await axios.get(ENDPOINTS_URL)
                setBooks(response.data.results.reverse())
                setLoading(false)
            } catch (err) {
                return err.message;
            }
        };
        getBooks()
    }, [title, typeSearchBook, popularBook, typeCatalogue, typeBook, level, latestBook, tag])

    const filterSearchCatalogue = (data) => {
        setTitle(data.title)
        setTypeCatalogue(data.typeCatalogue)

        data.typeCatalogue === 'getPenggerakTextBooks' && setTypeSearchBook('Kurikulum Merdeka')
        data.typeCatalogue === 'getTextBooks' && setTypeSearchBook('Teks K13')
        data.typeCatalogue === 'getNonTextBooks' && setTypeSearchBook('Nonteks')
    }

    const handleFilter = (filter, type) => {
        if(type == 'level') {
            filter === level ? setLevel("") : setLevel(filter)
        }
        if(type == 'tag') {
            filter === tag ? setTag("") : setTag(filter)
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
                setSearchTypeCatalogue={(data) => filterSearchCatalogue(data)}
                level={level}
                setLevelNonText={(filter) => handleFilter(filter, 'level')}
                tag={tag}
                setTagNonText={(filter) => handleFilter(filter, 'tag')}
            />
        </Layout>
    )
}

export default BukuNonTeks