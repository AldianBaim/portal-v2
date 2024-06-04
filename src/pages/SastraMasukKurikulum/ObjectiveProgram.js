import { Link } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import Sidebar from "../../components/SastraMasukKurikulum/sidebar"
const ObjectiveProgram = () => {

    return (
        <Layout>
            <section>
                <div className="container p-3 py-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Tujuan Program</li>
                        </ol>
                    </nav>
                    <hr />
                    <div className="row mt-4">
                        <div className="col-lg-3 mb-4">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-9">
                            <h4 className="mb-4">Tujuan Program Sastra Masuk Kurikulum</h4>
                            <blockquote class="blockquote border-start border-5 ps-4">Memanfaatkan karya sastra dalam implementasi kurikulum merdeka untuk meningkatkan minat baca, menumbuhkan empati, dan mengasah kreativitas serta nalar kritis murid</blockquote>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ObjectiveProgram