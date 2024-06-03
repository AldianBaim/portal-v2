import { Link } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import Sidebar from "../../components/SastraMasukKurikulum/sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
const CurrationStage = () => {

    return (
        <Layout>
            <section>
                <div className="container p-3 py-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Tahapan Kurasi</li>
                        </ol>
                    </nav>
                    <hr />
                    <div className="row mt-4">
                        <div className="col-lg-3 mb-4">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-9">
                            <h4 className="mb-4">Proses dan Kriteria Kurasi</h4>
                            <div className="mt-3">
                                <h5>Proses Kurasi dan Reviu Buku Sastra</h5>
                                <div className="table-responsive">
                                    <img src="https://static.buku.kemdikbud.go.id/content/sastra/img/proses-kurasi-min.png" style={{width: '900px'}} alt="" />
                                </div>
                            </div>
                            <div className="mt-3">
                                <h5>Kriteria yang digunakan</h5>
                                <ol>
                                    <li className="mb-3">
                                        Kriteria Utama yang khusus per jenjang  disusun berdasarkan Dimensi, Elemen, dan Subelemen dalam Profil Pelajar Pancasila (Keputusan Kepala BSKAP No.009/H/KR/2022).

                                        <ul className="mt-2">
                                            <li>
                                                Kriteria dibagi menjadi 3 jenjang, yaitu
                                                <ul className="mt-2">
                                                    <li>SD : <a href="http://ringkas.kemdikbud.go.id/KriteriaJenjangSD" target="_blank" className="text-decoration-none text-blue small">[Unduh Dokumen]</a></li>
                                                    <li>SMP : <a href="http://ringkas.kemdikbud.go.id/KriteriaJenjangSMP" target="_blank" className="text-decoration-none text-blue small">[Unduh Dokumen]</a></li>
                                                    <li>SD : <a href="http://ringkas.kemdikbud.go.id/KriteriaJenjangSMA" target="_blank" className="text-decoration-none text-blue small">[Unduh Dokumen]</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Kriteria Satrawi adalah kriteria umum yang bersifat tambahan atau tidak wajib, tetapi menjadi pertimbangan dalam kurasi buku sastra.

                                        <ul className="mt-2">
                                            <li>Penulis buku sastra merepresentasikan gender dan daerah;</li>
                                            <li>Penulis buku sastra merepresentasikan keberagaman zaman; </li>
                                            <li>Buku sastra merepresentasikan keberagaman tema;</li>
                                            <li>Penulis buku dan tema buku sastra merepresentasikan kelompok minoritas;</li>
                                            <li>Buku sastra merepresentasikan keberagaman bentuk sastra dan genre; serta</li>
                                            <li>Penulis buku dan karyanya telah mendapatkan penghargaan, diterjemahkan, dialihwahanakan, dan dibuat resensi di media yang memiliki kredibilitas</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default CurrationStage