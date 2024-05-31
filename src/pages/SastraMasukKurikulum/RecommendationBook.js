import { Link } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNewspaper, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../utils/config"
const RecommendationBook = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [level, setLevel] = useState("sd")

    useEffect(() => {
        setLoading(true)
        axios
        .get(`${BASE_URL}/api/entry/sastra_buku`)
        .then(response => setBooks(response.data.results))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    return (
        <Layout>
            <section>
                <div className="container p-3 py-5">
                    <div className="row">
                        <div className="col-lg-10">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Daftar Rekomendasi Buku</li>
                                </ol>
                            </nav>
                            <hr />
                        </div>
                        <div className="col-lg-2">
                            <button className="btn btn-outline-primary">
                                <FontAwesomeIcon icon={faNewspaper} className="me-2" />
                                Panduan Umum
                            </button>
                        </div>
                    </div>

                    <div>Filter berdasarkan tingkat :</div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div className="d-flex gap-2">
                            <button className={`btn ${level === "all" ? "btn-primary" : "btn-outline-primary"}`}>Semua</button>
                            <button className={`btn ${level === "sd" ? "btn-primary" : "btn-outline-primary"}`}>SD</button>
                            <button className={`btn ${level === "smp" ? "btn-primary" : "btn-outline-primary"}`}>SMP</button>
                            <button className={`btn ${level === "sma" ? "btn-primary" : "btn-outline-primary"}`}>SMA</button>
                        </div>
                        <div class="input-group w-25">
                            <input type="text" class="form-control border-end-0" placeholder="Cari buku.."/>
                            <span class="input-group-text bg-white border-start-0" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
                        </div>
                    </div>

                    <div className="row mt-4">

                        {
                            books.map((book, index) => {
                                return (
                                    <div className="col-lg-3 mb-4">
                                        <Link to={`/sastra-masuk-kurikulum/rekomendasi-buku/${book.id}`} className="text-decoration-none" key={index}>
                                            <div class="card card-hover border-0">
                                                <div className="position-relative">
                                                    <img src={book.cover} className="w-100 position-relative" alt="..."/>
                                                    <div className="rounded-pill px-3 py-1 bg-secondary d-inline-block text-white position-absolute bottom-0 start-0 m-2 fw-bold">SD</div>
                                                </div>
                                                <div class="card-body">
                                                    <h4 class="card-title mb-3 text-dark">{book.judul}</h4>
                                                    <a href="#" class="text-decoration-none text-blue">Lihat detail</a>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }

                        <div className="text-center mt-3">
                            <button className="btn btn-outline-primary">Muat data lainnya..</button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default RecommendationBook