import { Link, NavLink } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileAlt, faNewspaper, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../utils/config"
import CardSkeletonBook from "../../components/HariBukuNasional/card/CardSkeletonBook"
const RecommendationBook = () => {

    const [books, setBooks] = useState([])
    const [limit, setLimit] = useState(12)
    const [loading, setLoading] = useState(false)
    const [level, setLevel] = useState("")
    // State untuk menyimpan input pencarian dan hasil pencarian
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(books);

    // Fungsi untuk menangani perubahan input pencarian
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        // Filter data berdasarkan input pencarian
        const filtered = books.filter(item =>
        item.judul.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    useEffect(() => {
        setBooks([])
        setFilteredData([])
        setLoading(true)

        axios
        .get(`${BASE_URL}/api/sastra/buku?filter[jenjang]=${level && level}`)
        .then(response => {
            setBooks(response.data.results)
            setFilteredData(response.data.results)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [level])

    const countWords =(text) => {
        // Memecah string berdasarkan spasi atau tanda baca lain yang biasanya memisahkan kata
        let words = text.split(/\s+/);
    
        // Menghapus elemen kosong yang mungkin ada di array
        words = words.filter(word => word.trim().length > 0);
    
        // Mengembalikan jumlah kata
        return words.length;
    }

    return (
        <Layout>
            <section>
                <div className="container p-3 py-5">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Daftar Rekomendasi Buku</li>
                        </ol>
                    </nav>
                    
                    <div class="alert alert-info">
                        <strong>Catatan:</strong> Daftar buku dapat bertambah/berkurang sewaktu-waktu
                    </div>

                    <hr />
                    <div className="d-flex gap-3">
                        <NavLink to="/sastra-masuk-kurikulum/panduan-umum" className="btn btn-sm btn-outline-primary ms-0 ms-lg-auto">
                            <FontAwesomeIcon icon={faNewspaper} className="me-2" />
                            Panduan Umum
                        </NavLink>
                        {/* <div class="dropdown">
                            <a href="#" className="btn btn-sm btn-outline-secondary" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                                Dokumen Kepmen
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a href="#" class="dropdown-item">SD</a></li>
                                <li><a href="#" class="dropdown-item">SMP</a></li>
                                <li><a href="#" class="dropdown-item">SMA</a></li>
                            </ul>
                        </div> */}
                    </div>

                    <div className="mt-4 mb-3">Filter berdasarkan tingkat :</div>
                    <div className="d-flex gap-3 flex-column flex-lg-row justify-content-between mt-2">
                        <div className="d-flex gap-2">
                            <button onClick={() => setLevel("")} className={`btn ${level === "" ? "btn-primary" : "btn-outline-primary"}`}>Semua</button>
                            <button onClick={() => setLevel("sd")} className={`btn ${level === "sd" ? "btn-primary" : "btn-outline-primary"}`}>SD</button>
                            <button onClick={() => setLevel("smp")} className={`btn ${level === "smp" ? "btn-primary" : "btn-outline-primary"}`}>SMP</button>
                            <button onClick={() => setLevel("sma")} className={`btn ${level === "sma" ? "btn-primary" : "btn-outline-primary"}`}>SMA</button>
                        </div>
                        <div className="input-group" style={{ width: "300px" }}>
                            <input onChange={handleSearch} type="text" className="form-control border-end-0" placeholder="Cari buku.."/>
                            <span className="input-group-text bg-white border-start-0" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
                        </div>
                    </div>
                    <div className="mt-4 text-end">Total : {filteredData?.length} Buku</div>

                    <div className="row mt-4">
                        {
                            loading && [...Array(4)].map((item, index) => {
                                return ((<div key={index} className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4"><CardSkeletonBook /></div>))
                            })
                        }
                        {
                            filteredData?.map((book, index) => {
                                return (
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={index}>
                                        <NavLink onClick={(e) => book.status == 'draft' && e.preventDefault()} className={`${book.status == 'draft' && 'opacity-50'} text-decoration-none`} to={`/sastra-masuk-kurikulum/rekomendasi-buku/${book.id}`}>
                                            <div className="card card-hover border-0 h-100">
                                                <div className="position-relative">
                                                    <div className="image-container">
                                                        <img
                                                            src={book.cover}
                                                            className="card-rounded"
                                                            alt="Cover"
                                                        />
                                                    </div>
                                                    <div className="rounded-pill px-2 py-1 small bg-secondary d-inline-block text-white position-absolute bottom-0 start-0 m-2 fw-bold">
                                                        {book.jenjang.toUpperCase()}
                                                    </div>
                                                </div>
                                                <div className="card-body pt-2 px-0">
                                                    <h5 className={`${countWords(book.judul) > 7 && 'text-1rem'} card-title mb-3 text-dark`}>{book.judul}</h5>
                                                    {book.status == 'publish' && <a href="#" className="text-decoration-none text-blue">Lihat detail</a>}
                                                    {book.status == 'draft' && <a href="#" className="text-decoration-none text-orange">Dalam proses</a>}
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>

                                )
                            }).slice(0, limit)
                        }

                        {
                            !loading && filteredData?.length === 0 && !searchTerm && <div className="text-center py-5">Daftar buku sedang dalam proses peninjauan kembali.</div>
                        }

                        {
                            !loading && filteredData?.length === 0 && searchTerm && <div className="text-center py-5">Pencarian buku tidak ditemukan</div>
                        }

                        {
                            books.length > limit && filteredData?.length > 0 && (
                                <div className="text-center mt-3">
                                    <button onClick={() => setLimit(limit + 12)} className="btn btn-outline-primary">Muat data lainnya..</button>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default RecommendationBook