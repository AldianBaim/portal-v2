const SectionIntro = () => {
    return (
        <section className="py-5" style={{backgroundColor: '#FFFBF3'}}>
            <div className="container p-3">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-9">
                        <h1 className="mb-4 display-5">Apa itu Program <br /> “Sastra Masuk Kurikulum”?</h1>
                        <p>Program “Sastra Masuk Kurikulum” adalah turunan dari program Episode Merdeka Belajar 15: Kurikulum <br /> Merdeka dan Platform Merdeka Mengajar. Program ini dirancang untuk memperkenalkan siswa pada <br /> beragam karya sastra dari berbagai budaya dan periode waktu.</p>
                        <div class="embed-responsive embed-responsive-16by9 w-100" style={{ marginTop: '100px' }}>
                            <iframe class="embed-responsive-item w-100" height={"500"} style={{ borderRadius: '20px' }} src="https://www.youtube.com/embed/0w0OvOEv43w?rel=0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionIntro