
const SectionCatalog = ({books}) => {
    return (
        <section className="py-5 bg-light-blue">
            <div className="container p-3">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <div className="table-responsive">
                            <table className="table">
                                <thead style={{ backgroundColor: '#D5E2FF' }}>
                                    <tr>
                                        <th>Kover</th>
                                        <th>Judul</th>
                                        <th>Penulis</th>
                                        <th>Penerbit</th>
                                        <th>Bentuk Sastra</th>
                                        <th>Peruntukan</th>
                                        <th>Tahun Terbit</th>
                                        <th>Opsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.map((book, index) => (
                                        <tr>
                                            <td><img src="/assets/image/hari-buku-nasional/Cover.jpeg" width={100} alt="Kover" /></td>
                                            <td>{book.title}</td>
                                            <td>{book.writer}</td>
                                            <td>{book.publisher}</td>
                                            <td>{book.bentuk_sastra}</td>
                                            <td>Kelas {book.peruntukan}</td>
                                            <td>{book.published_year}</td>
                                            <td><a role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="text-blue text-decoration-none rounded-pill px-4 py-2">Lihat Detail</a></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-4">
                            <div className="row">
                                <div className="col-6 mb-4">
                                    Judul Buku : <b>Gema Tanah Air</b>
                                </div>
                                <div className="col-6">
                                    Tahun Terbit : <b>2013</b>
                                </div>
                                <div className="col-6 mb-4">
                                    Penulis : <b>: H.B. Jassin</b>
                                </div>
                                <div className="col-6">
                                    Bentuk Sastra : <b>: Kumpulan Puisi dan Cerpen</b>
                                </div>
                                <div className="col-6 mb-4">
                                    Penerbit : <b>Pustaka Jaya</b>
                                </div>
                                <div className="col-6">
                                    Jenis Peruntukan : <b>SMP/MTs</b>
                                </div>
                            </div>

                            <div className="card card-rounded border-0 bg-light p-4 mb-4">
                                <h5 className="mb-3">Gambaran Singkat <br /> (latar belakang penulis, ringkasan isi, dan tema buku)</h5>
                                <p className="text-muted">Gema Tanah Air berisikan kumpulan puisi dan prosa tahun 1942 sampai 1951. H.B. Jassin menghimpun karya-karya terpilih para sastrawan Indonesia tanpa memandang kecenderungan ideologi politisnya. Buku ini berisikan cerita perjuangan rakyat dalam masa-masa sulit setelah kemerdekaan yang digambarkan oleh para sastrawan Indonesia di masa itu yang dihimpun menjadi 3 bagian. Ketiga bagian tersebut berisikan puisi dan prosa yang menuliskan semangat baru era reformasi, yang cenderung bercerita tentang pengalaman manusia dan masyarakatnya saat setelah kemerdekaan, ketimbang kecenderungan politis.</p>
                            </div>

                            <div className="card card-rounded border-0 bg-light p-4 mb-4">
                                <h5 className="mb-3">Penafian/Disclaimer secara Umum</h5>
                                <div className="alert rounded alert-success p-2">-</div>
                                <h5 className="mb-3">Catatan Penafian/Disclaimer secara Detail</h5>
                                <div>-</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SectionCatalog