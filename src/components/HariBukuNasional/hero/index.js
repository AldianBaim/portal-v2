import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Hero = () => {

    return (
        <section id="hero" className="">
            <div className="position-relative">
                <img src="/assets/image/hari-buku-nasional/Jumbotron-3.png" className="position-relative" width="100%" style={{height: '100vh', objectFit: 'cover'}} alt="Hero" />
                <div className="position-absolute w-100" style={{top: '40%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <h1 className="text-center text-blue text-neuton display-3">SASTRA <br /> MASUK KURIKULUM</h1>
                    <h3 className="text-center text-white mt-4 text-neuton">HARI BUKU NASIONAL 2024</h3>
                    <div className="d-flex flex-row justify-content-center card-hover">
                        <a href="#section-intro" className="d-flex flex-column bg-white rounded-pill p-2 text-orange mt-4 card-hover">
                            <FontAwesomeIcon icon={faChevronDown} />
                            <FontAwesomeIcon icon={faChevronDown} />
                            <FontAwesomeIcon icon={faChevronDown} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero