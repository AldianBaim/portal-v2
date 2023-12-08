import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/catalog/hero'
import SectionCatalog from '../../components/catalog/sections/SectionCatalog/SectionCatalog'
import Layout from '../../components/global/Layout'
import {staticBooks} from '../../utils/static/index'

const BukuNonTeks = () => {

    // State handle query params from homepage
    const location = useLocation()
    const [title] = useState(location.state !== null ? location.state.title : null)
    const [loading] = useState(false)
    const [books] = useState(staticBooks)
    const [limit] = useState(12)
    const [typeBook] = useState('type_pdf')
    const [typeCatalogue, setTypeCatalogue] = useState('getRecommendationBooks')

    // State for filter level
    const [level, setLevel] = useState('')

    const handleFilterLevel = (filter) => {
        filter === level ? setLevel("") : setLevel(filter)
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
                searchTitle={title}
                books={books}
                loading={loading}
                skeletonCount={limit}
                typeBook={typeBook}
                typeCatalogue={typeCatalogue}
                level={level}
                setLevelNonText={(filter) => handleFilterLevel(filter)}
            />
        </Layout>
    )
}

export default BukuNonTeks