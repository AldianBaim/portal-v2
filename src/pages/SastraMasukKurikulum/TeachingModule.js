import { Link } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import Sidebar from "../../components/SastraMasukKurikulum/sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpen, faDownload } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { BASE_URL } from "../../utils/config"
import { useEffect, useState } from "react"
import Modal from "../../components/catalog/modal/Modal"
import PdfViewer from "../../components/global/PdfViewer"
const TeachingModule = () => {

    const [modules, setModules] = useState([])
    const [attachment, setAttachment] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        axios
        .get(`${BASE_URL}/api/entry/sastra_modulajar`)
        .then(response => setModules(response.data.results))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
        .finally(() => setLoading(false))

    }, [])

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
                                            <th>Judul</th>
                                            <th>Mata Pelajaran</th>
                                            <th>Kelas</th>
                                            <th>Sastra Yang Digunakan</th>
                                            <th>Opsi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loading && (
                                                <tr>
                                                    <td colSpan="6" className="text-center">
                                                        <div className="spinner-border" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        {
                                            modules.map((module, index) => (
                                                <tr key={index}>
                                                    <td>{module.judul}</td>
                                                    <td>Bahasa</td>
                                                    <td>{module.kelas.toUpperCase()}</td>
                                                    <td>{module.karya}</td>
                                                    <td><a href={module.url} download={module.judul} target="_blank" className="text-decoration-none text-blue"><FontAwesomeIcon icon={faDownload} /></a></td>
                                                    <td role="button" data-bs-toggle="modal" data-bs-target="#readBook" onClick={() => setAttachment(module.url)} ><FontAwesomeIcon className="text-blue" icon={faBookOpen} /></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal id="readBook" setCloseModal={() => setAttachment(null)}>
                    {
                    attachment && 
                    <object
                        type="application/pdf"
                        data={attachment}
                        width="100%"
                        style={{height: '90vh'}}
                    >
                        <PdfViewer url={attachment}></PdfViewer>
                    </object>
                    }
                </Modal>

            </section>
        </Layout>
    )
}

export default TeachingModule