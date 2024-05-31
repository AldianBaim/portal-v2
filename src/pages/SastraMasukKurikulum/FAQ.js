import { Link } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../utils/config"
const SastraFAQ = () => {

    const [FAQ, setFAQ] = useState(null)

    useEffect(() => {
        axios
        .get(`${BASE_URL}/api/entry/sastra_faq?orderby=ordernum&direction=asc`)
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
                    <h4 className="mt-5">Pertanyaan yang Sering Ditanyakan</h4>
                    <div className="row">
                        <div className="col-lg-6">
                            <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
                                {
                                    FAQ.map((item, index) => {
                                        return (
                                            <div class="accordion-item" key={index}>
                                                <h2 class="accordion-header" id={`flush-heading-${index}`}>
                                                    <button class="accordion-button px-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index}`} aria-expanded="false" aria-controls={`flush-collapse-${index}`}>
                                                        {item?.question}
                                                    </button>
                                                </h2>
                                                <div id={`flush-collapse-${index}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading-${index}`} data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">{item?.answer}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 d-flex justify-content-center">
                            <img src="https://via.placeholder.com/400x200" width={"400px"} height={"200px"} alt="" />
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <div>Masih punya pertanyaan lain?</div>
                        <button type="button" class="btn btn-primary mt-3">Hubungi kami</button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default SastraFAQ