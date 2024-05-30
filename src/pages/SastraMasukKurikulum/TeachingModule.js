import { Link } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import Sidebar from "../../components/SastraMasukKurikulum/sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpen, faDownload } from "@fortawesome/free-solid-svg-icons"
const TeachingModule = () => {

    return (
        <Layout>
            <section>
                <div className="container p-3 py-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Modul Ajar</li>
                        </ol>
                    </nav>
                    <hr />
                    <div className="row mt-4">
                        <div className="col-lg-3">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-9">
                            <h4 className="mb-4">Modul Ajar</h4>
                            <p className="lh-lg">Modul ajar adalah Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus atque, <br /> tempore mollitia ipsa amet ipsam rerum maiores quos illo magnam magni quas odit, <br /> veniam nihil, sit minima temporibus dolor adipisci.</p>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Mata Pelajaran</th>
                                            <th>Kelas</th>
                                            <th>Sastra Yang Digunakan</th>
                                            <th>Opsi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Array(5).fill().map((_, index) => (
                                                <tr>
                                                    <td>Bahasa Indonesia</td>
                                                    <td>V</td>
                                                    <td>Na Willa karya Reda Gaudiamo halaman 48-54</td>
                                                    <td><FontAwesomeIcon icon={faDownload} /></td>
                                                    <td><FontAwesomeIcon icon={faBookOpen} /></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default TeachingModule