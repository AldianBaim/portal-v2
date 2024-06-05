import { Link } from "react-router-dom"

const Hero = () => {

    return (
        <section id="hero" className={`position-relative bg-soft-blue`} style={{ padding: '80px 0' }}>
            <div className="container p-3 py-lg-5">
                <div className="row">
                    <div className="col-lg-7 order-last order-md-first my-5 my-md-auto">
                        <h1 className="fw-bold mb-3" style={{ fontSize: '3rem', color: '#2F3E59'}}>Sastra Masuk Kurikulum</h1>
                        <p className="lead">Memanfaatkan karya sastra dalam implementasi Kurikulum Merdeka untuk meningkatkan minat baca, menumbuhkan empati, dan mengasah kreativitas serta nalar kritis murid.</p>
                        <Link to="#program-guide" className="btn btn-outline-primary my-3">Pelajari Selengkapnya..</Link>
                    </div>
                    <div className="col-lg-5">
                        <div class="ratio ratio-16x9">
                            <iframe width="560" height="315" className="card-rounded" title="YouTube video" src="https://www.youtube.com/embed/Pjz3ZGI-jS8?si=_Vrj8dvTDdzPtcZJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero