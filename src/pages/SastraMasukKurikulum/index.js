import { useLocation } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import SectionAboutProgram from "../../components/SastraMasukKurikulum/sections/SectionAboutProgram"
import SectionCurrator from "../../components/SastraMasukKurikulum/sections/SectionCurrator"
import Hero from "../../components/SastraMasukKurikulum/sections/SectionHero"
import SectionProgramGuide from "../../components/SastraMasukKurikulum/sections/SectionProgramGuide"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../utils/config"

const SastraMasukKurikulum = () => {

    const location = useLocation();
    const [curratorsSD, setCurratorsSD] = useState([])
    const [curratorsSMP, setCurratorsSMP] = useState([])
    const [curratorsSMA, setCurratorsSMA] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        axios
        .get(`${BASE_URL}/api/entry/sastra_kurator?filter[jenjang]=sd&orderby=nama&direction=asc`)
        .then(response => setCurratorsSD(response.data.results))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))

        axios
        .get(`${BASE_URL}/api/entry/sastra_kurator?filter[jenjang]=smp&orderby=nama&direction=asc`)
        .then(response => setCurratorsSMP(response.data.results))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))

        axios
        .get(`${BASE_URL}/api/entry/sastra_kurator?filter[jenjang]=sma&orderby=nama&direction=asc`)
        .then(response => setCurratorsSMA(response.data.results))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))

    }, [])

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location, location.hash]);

    return (
        <Layout>
            <Hero />
            <SectionProgramGuide/>
            <SectionAboutProgram/>
            <SectionCurrator curratorsSD={curratorsSD} curratorsSMP={curratorsSMP} curratorsSMA={curratorsSMA} loading={loading}/>
        </Layout>
    )
}

export default SastraMasukKurikulum