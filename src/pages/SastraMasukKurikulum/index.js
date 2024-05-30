import Layout from "../../components/SastraMasukKurikulum/layout"
import SectionAboutProgram from "../../components/SastraMasukKurikulum/sections/SectionAboutProgram"
import SectionCurrator from "../../components/SastraMasukKurikulum/sections/SectionCurrator"
import Hero from "../../components/SastraMasukKurikulum/sections/SectionHero"
import SectionProgramGuide from "../../components/SastraMasukKurikulum/sections/SectionProgramGuide"

const SastraMasukKurikulum = () => {

    return (
        <Layout>
            <Hero />
            <SectionProgramGuide/>
            <SectionAboutProgram/>
            <SectionCurrator/>
        </Layout>
    )
}

export default SastraMasukKurikulum