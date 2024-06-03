import { Link } from "react-router-dom"

const AboutProgram = () => {

    return (
        <section className="bg-soft-orange" id="program-guide" style={{ padding: '80px 0' }}>
            <div className="container p-3 py-5">
                <div className="text-center">
                    <h2>Tentang Program</h2>
                    <p className="lead mt-2">Dukung kampanye pengajaran sastra di sekolah<br/>untuk menumbuhkan kecintaan siswa terhadap literatur.</p>
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-2 mb-3">
                            <Link to="/sastra-masuk-kurikulum/tentang-program" className="text-decoration-none text-dark">
                                <div class="card border-0 card-hover">
                                    <div className="d-flex align-items-center justify-content-center card-img-top" style={{width: '100%', height: '200px'}}>
                                        <img src="/assets/image/hari-buku-nasional/img-tentang-program.png" width={80} alt="..."/>
                                    </div>
                                    <div class="card-body p-0 py-1">
                                        <h5 class="card-title">Apa itu program "Sastra Masuk Kurikulum"</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 mb-3">
                            <Link to="/sastra-masuk-kurikulum/tujuan-program" className="text-decoration-none text-dark">
                                <div class="card border-0 card-hover h-100 rounded p-2">
                                    <div className="d-flex align-items-center justify-content-center card-img-top" style={{width: '100%', height: '200px'}}>
                                        <img src="/assets/image/hari-buku-nasional/img-tujuan-program.png" width={80} alt="..."/>
                                    </div>
                                    <div class="card-body p-0 py-1">
                                        <h5 class="card-title">Tujuan Sastra Masuk Kurikulum</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 mb-3">
                            <Link to="/sastra-masuk-kurikulum/tahapan-kurasi" className="text-decoration-none text-dark">
                                <div class="card border-0 card-hover h-100 rounded p-2">
                                    <div className="d-flex align-items-center justify-content-center card-img-top" style={{width: '100%', height: '200px'}}>
                                        <img src="/assets/image/hari-buku-nasional/img-tahapan-kurasi.png" width={80} alt="..."/>
                                    </div>
                                    <div class="card-body p-0 py-1">
                                        <h5 class="card-title">Tahapan Kurasi</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 mb-3">
                            <Link to="/sastra-masuk-kurikulum/modul-ajar" className="text-decoration-none text-dark">
                                <div class="card border-0 card-hover h-100 rounded p-2">
                                    <div className="d-flex align-items-center justify-content-center card-img-top" style={{width: '100%', height: '200px'}}>
                                        <img src="/assets/image/hari-buku-nasional/img-module-ajar.png" width={80} alt="..."/>
                                    </div>
                                    <div class="card-body p-0 py-1">
                                        <h5 class="card-title">Modul Ajar</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProgram