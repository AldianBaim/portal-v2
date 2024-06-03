import { Link } from "react-router-dom"

const ProgramGuide = () => {

    return (
        <section className="bg-soft-orange position-relative" style={{ padding: '80px 0' }}>
            <div className="container p-3 py-5 position-relative">
                <div className="row justify-content-center text-center">
                    <div className="col-md-9 col-lg-6">
                        <h2>Panduan Program & Daftar Buku</h2>
                        <p className="lead mt-4">Tingkatkan efektivitas pengajaran di kelas dengan panduan kami yang mudah diikuti dan dirancang khusus untuk para pendidik.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <Link to="/sastra-masuk-kurikulum/panduan-umum" className="btn btn-outline-danger mt-3">Panduan Umum</Link>
                            <Link to="/sastra-masuk-kurikulum/rekomendasi-buku" className="btn btn-outline-primary mt-3">Daftar Buku</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute bottom-0">
                <img src="/assets/image/hari-buku-nasional/ornamen-1.png" alt="Ornamen" />
            </div>
        </section >
    )
}

export default ProgramGuide