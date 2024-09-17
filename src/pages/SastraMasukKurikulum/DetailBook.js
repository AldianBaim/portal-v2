import { Link, useLocation } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL_PUSDATIN } from "../../utils/config"

const DetailBook = () => {

    const location = useLocation()
    const [book, setBook] = useState(null)

    useEffect(() => {
        const pathname = location.pathname;
        const pathSegments = pathname.split('/').filter(Boolean); // Memfilter elemen kosong
        const id = pathSegments[pathSegments.length - 1];

        axios
        .get(BASE_URL_PUSDATIN + `/api/sastra/buku/${id}`)
        .then(res => setBook(res.data))
        .catch(err => console.log(err))

    }, [location])

    return (
        <Layout>
            <section className="position-relative">
                <div className="container p-3 py-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                            <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum/rekomendasi-buku" className="text-decoration-none text-blue">Daftar Rekomendasi Buku</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Detail</li>
                        </ol>
                    </nav>
                    <hr />

                    <div className="row">
                        <div className="col-lg-2 mb-3">
                            <div class="list-group sticky-top" style={{top: '100px', zIndex: '100'}} >
                                <img src={book?.cover} className="w-100 card-rounded" alt="Book" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                <h3>{book?.judul}</h3>

                                <div className="mt-5" id="identitas-buku">
                                    <h5 className="mb-3">Identitas Buku</h5>
                                    <div>
                                        <div><b>Penulis : </b> {book?.penulis}</div>
                                        <div><b>Penerbit : </b> {book?.penerbit}</div>
                                        <div><b>Tahun Terbit : </b> {book?.tahun_terbit}</div>
                                        <div><b>Bentuk Sastra : </b> {book?.bentuk}</div>
                                        <div><b>Jenjang : </b> {book?.jenjang.toUpperCase()}</div>
                                    </div>
                                </div>
                            
                                <div className="mt-5" id="tujuan-buku">
                                    <h5>Mengapa Buku ini Perlu Dibaca oleh Para Murid?</h5>

                                    <div className="mt-3">
                                        <p dangerouslySetInnerHTML={{ __html: book?.urgensi }}></p>
                                    </div>
                                </div>
                                <div className="mt-5" id="penggunaan-buku">
                                    <h5 >Bagaimana Cara Menggunakan Buku Ini?</h5>
                                    <p dangerouslySetInnerHTML={{ __html: book?.penggunaan }}></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <div id="list-example" class="list-group sticky-top" style={{top: '100px', zIndex: '100'}} role="tablist">
                                <a class="list-group-item list-group-item-action" href="#">Identitas Buku</a>
                                <a class="list-group-item list-group-item-action" href="#tujuan-buku">Tujuan Buku</a>
                                <a class="list-group-item list-group-item-action" href="#penggunaan-buku">Penggunaan Buku</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default DetailBook