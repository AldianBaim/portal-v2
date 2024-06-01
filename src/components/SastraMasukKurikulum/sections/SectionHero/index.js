import { Link } from "react-router-dom"

const Hero = () => {

    return (
        <section id="hero" className={`position-relative bg-soft-blue`} style={{ padding: '80px 0' }}>
            <div className="container p-3 py-5">
                <div className="row">
                    <div className="col-lg-7 order-last order-md-first my-5 my-md-auto">
                        <h1 className="display-6 mb-3">Sastra Masuk Kurikulum</h1>
                        <p className="lead">Memanfaatkan karya sastra dalam implementasi kurikulum <br /> merdeka untuk meningkatkan minat baca, menumbuhkan <br /> empati, dan mengasah kreativitas serta nalar kritis murid</p>
                        <Link to="#program-guide" className="btn btn-outline-primary mt-3">Pelajari Selengkapnya..</Link>
                    </div>
                    <div className="col-lg-5">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/Jvwj-A0XAqI?rel=0" className="card-rounded" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero