import { Link } from "react-router-dom"

const ProgramGuide = () => {

    return (
        <section className="position-relative">
            <div className="container p-3 py-5 position-relative">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-6">
                        <h2>Panduan Program & Daftar Buku</h2>
                        <p className="lead mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab consequuntur fugiat, cumque iusto fugit repellendus quia possimus impedit quis est!.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <Link to="/sastra-masuk-kurikulum/panduan-umum" className="btn btn-outline-danger mt-3">Panduan Umum</Link>
                            <Link to="/sastra-masuk-kurikulum/rekomendasi-buku" className="btn btn-outline-primary mt-3">Daftar Buku</Link>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/assets/image/hari-buku-nasional/ornamen-1.png" alt="Ornamen" />
        </section >
    )
}

export default ProgramGuide