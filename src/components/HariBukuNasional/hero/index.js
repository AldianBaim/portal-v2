
const Hero = () => {

    return (
        <section id="hero" className="">
            <div className="position-relative">
                <img src="/assets/image/hari-buku-nasional/Jumbotron.png" className="position-relative" width="100%" alt="Hero" />
                <div className="position-absolute w-100" style={{top: '45%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <h1 className="text-center text-blue text-neuton">SASTRA <br /> MASUK KURIKULUM</h1>
                    <h3 className="text-center text-white mt-4 text-neuton">HARI BUKU NASIONAL 2024</h3>
                </div>
            </div>
        </section>
    )
}

export default Hero