import { Link } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import Sidebar from "../../components/SastraMasukKurikulum/sidebar"
const CurrationStage = () => {

    return (
        <Layout>
            <section>
                <div className="container p-3 py-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Tahapan Kurasi</li>
                        </ol>
                    </nav>
                    <hr />
                    <div className="row mt-4">
                        <div className="col-lg-3 mb-4">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-9">
                            <h4 className="mb-4">Tahapan Kurasi Sastra Masuk Kurikulum</h4>
                            {/* <p className="lh-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, commodi provident voluptate doloremque consequatur architecto ex aspernatur natus quod, rerum odio optio accusamus nihil, ratione quasi. Est pariatur a officia?</p> */}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default CurrationStage