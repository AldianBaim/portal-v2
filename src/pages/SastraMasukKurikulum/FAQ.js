import { Link, NavLink } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../utils/config"
const SastraFAQ = () => {

    const [FAQ, setFAQ] = useState(null)

    useEffect(() => {
        axios
        .get(`${BASE_URL}/api/entry/sastra_faq?orderby=ordernum&direction=asc&filter[publish]=1`)
        .then(res => setFAQ(res.data.results))
        .catch(err => console.log(err))

    }, [])

    return (
        <Layout>
            <section>
                <div className="container p-3 py-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">FAQ</li>
                        </ol>
                    </nav>
                    <hr />
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="mt-5">Pertanyaan yang Sering Ditanyakan</h4>
                            <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
                                {
                                    FAQ?.map((item, index) => {
                                        return (
                                            <div class="accordion-item" key={index}>
                                                <h2 class="accordion-header" id={`flush-heading-${index}`}>
                                                    <button class="accordion-button px-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index}`} aria-expanded="false" aria-controls={`flush-collapse-${index}`}>
                                                        {item?.question}
                                                    </button>
                                                </h2>
                                                <div id={`flush-collapse-${index}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading-${index}`} data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body" dangerouslySetInnerHTML={{__html: item?.answer}}></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 d-flex justify-content-center">
                            <img src="/assets/image/hari-buku-nasional/FAQ.png" width={"300px"} height={"300px"} alt="" />
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <div>Masih punya pertanyaan lain?</div>
                        <NavLink to="/sastra-masuk-kurikulum/feedback" className="btn btn-outline-primary mt-3">Hubungi kami</NavLink>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default SastraFAQ