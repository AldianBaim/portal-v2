import CardProgram from "../../card/CardProgram"

const SectionSastraKurikulum = () => {
    return (
        <section className="py-5">
            <div className="container p-3">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <h1 className="mb-5 display-6 text-center">Program “Sastra Masuk Kurikulum” <br /> penting karena...</h1>
                        <div id="cards">
                            <div className="card-program" id="card1">
                                <CardProgram 
                                    title="Mengasah Keterampilan Berpikir Kritis"
                                    description="Sastra bukan hanya tentang membaca cerita, tetapi juga tentang menganalisis dan menafsirkan pesan yang tersembunyi di balik kata-kata. Ini membangun keterampilan berpikir kritis yang penting dalam menganalisis teks, mengevaluasi argumen, dan merumuskan pendapat." 
                                    image="Card_1.png"
                                    backgroundColor="bg-soft-orange" 
                                />
                            </div>
                            <div className="card-program" id="card2">
                                <CardProgram 
                                    title="Mengabadikan Warisan Budaya"
                                    description="Sastra bukan hanya tentang membaca cerita, tetapi juga tentang menganalisis dan menafsirkan pesan yang tersembunyi di balik kata-kata. Ini membangun keterampilan berpikir kritis yang penting dalam menganalisis teks, mengevaluasi argumen, dan merumuskan pendapat."
                                    backgroundColor="bg-light-blue" 
                                    image="Card_2.png"
                                />
                            </div>
                            <div className="card-program" id="card3">
                                <CardProgram 
                                    title="Memahami Manusia dan Masyarakat"
                                    description="Di dalam cerita, kita menemukan cermin yang mencerminkan kemanusiaan kita. Sastra membawa kita ke dalam pikiran dan perasaan karakter-karakternya, membuka mata kita terhadap pengalaman manusia yang beragam dan kompleks. Dengan memahami sastra, kita memahami diri kita sendiri dan dunia di sekitar kita dengan lebih dalam."
                                    backgroundColor="bg-soft-orange" 
                                    image="Card_3.png"
                                />
                            </div>
                            <div className="card-program " id="card4">
                                <CardProgram 
                                    title="Mengasah Keterampilan Berpikir Kritis"
                                    description="Sastra bukan hanya tentang membaca cerita, tetapi juga tentang menganalisis dan menafsirkan pesan yang tersembunyi di balik kata-kata. Ini membangun keterampilan berpikir kritis yang penting dalam menganalisis teks, mengevaluasi argumen, dan merumuskan pendapat."
                                    backgroundColor="bg-light-blue" 
                                    image="Card_4.png"
                                />
                            </div>
                            <div className="card-program" id="card5">
                                <CardProgram 
                                    title="Mengabadikan Warisan Budaya"
                                    description="Sastra bukan hanya tentang membaca cerita, tetapi juga tentang menganalisis dan menafsirkan pesan yang tersembunyi di balik kata-kata. Ini membangun keterampilan berpikir kritis yang penting dalam menganalisis teks, mengevaluasi argumen, dan merumuskan pendapat."
                                    backgroundColor="bg-soft-orange" 
                                    image="Card_5.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSastraKurikulum