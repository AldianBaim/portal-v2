import { Link } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNewspaper, faSearch } from "@fortawesome/free-solid-svg-icons"
const DetailBook = () => {

    return (
        <Layout>
            <section className="position-relative">
                <div className="container p-3 py-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Daftar Rekomendasi Buku</li>
                        </ol>
                    </nav>
                    <hr />

                    <div className="row">
                        <div className="col-lg-2 mb-3">
                            <div class="list-group sticky-top" style={{top: '100px', zIndex: '100'}} >
                                <img src="https://via.placeholder.com/150x200" className="w-100" alt="Book" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                <h3>Bunga Rampai Pembelajaran Numerasi Melalui MathCityMap "Geometri SMP"</h3>

                                <div className="mt-5" id="identitas-buku">
                                    <h5 className="mb-3">Identitas Buku</h5>
                                    <div>
                                        <div><b>Penulis : </b> Soesilo Toer</div>
                                        <div><b>Penerbit : </b> Pataba Press</div>
                                        <div><b>Tahun Terbit : </b> (cetakan terakhir 2015)</div>
                                        <div><b>Bentuk Sastra : </b> Novel</div>
                                        <div><b>Jenjang : </b> SD/MI</div>
                                    </div>
                                </div>
                            
                                <div className="mt-5" id="gambaran-singkat">
                                    <h5>Gambaran Singkat</h5>

                                    <div className="mt-3">
                                        <h6 className="fw-bold">Latar belakang penulis</h6>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, necessitatibus eius quam excepturi perspiciatis dolore laudantium hic itaque ducimus? Incidunt nam veniam consequuntur perspiciatis, modi recusandae, cum architecto porro sed alias quisquam possimus et quam! Consequuntur veniam laboriosam ducimus repudiandae sequi inventore totam, ratione magni temporibus repellendus doloremque voluptas adipisci aspernatur dolorum necessitatibus, commodi eligendi cupiditate magnam similique facilis? Reiciendis, quae tenetur? Architecto at asperiores pariatur. Eos rem excepturi, non optio maiores odio error veniam obcaecati, alias nihil ratione? Porro error, odit eos illo mollitia minima consequuntur sint dicta obcaecati quasi? Temporibus aperiam velit expedita officiis nihil laborum, dignissimos deserunt.</p>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam natus totam laborum tenetur, quas ratione assumenda magni, sit, provident esse earum animi rem molestiae explicabo aut commodi voluptatum? Blanditiis, dolore!</p>
                                    </div>
                                    <div className="mt-4">
                                        <h6 className="fw-bold">Ringkasan Isi</h6>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, necessitatibus eius quam excepturi perspiciatis dolore laudantium hic itaque ducimus? Incidunt nam veniam consequuntur perspiciatis, modi recusandae, cum architecto porro sed alias quisquam possimus et quam! Consequuntur veniam laboriosam ducimus repudiandae sequi inventore totam, ratione magni temporibus repellendus doloremque voluptas adipisci aspernatur dolorum necessitatibus, commodi eligendi cupiditate magnam similique facilis? Reiciendis, quae tenetur? Architecto at asperiores pariatur. Eos rem excepturi, non optio maiores odio error veniam obcaecati, alias nihil ratione? Porro error, odit eos illo mollitia minima consequuntur sint dicta obcaecati quasi? Temporibus aperiam velit expedita officiis nihil laborum, dignissimos deserunt.</p>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam natus totam laborum tenetur, quas ratione assumenda magni, sit, provident esse earum animi rem molestiae explicabo aut commodi voluptatum? Blanditiis, dolore!</p>
                                    </div>
                                    <div className="mt-4">
                                        <h6><b>Tema Buku : </b> Keluarga, Petualangan</h6>
                                    </div>
                                </div>
                                <div className="mt-5" id="catatan-penafian">
                                    <h5 >Catatan Penafian</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum repudiandae doloremque mollitia libero officia vitae sequi dicta fugit, veniam culpa a quia quam consectetur cupiditate rerum quibusdam natus dolorem aut omnis distinctio dignissimos repellendus inventore facilis? Totam modi officia et numquam unde debitis! Cum repudiandae neque tenetur iure harum ut autem id perferendis deleniti, recusandae ullam quas odit alias vel, culpa fugiat pariatur commodi quo facilis? Molestiae dolorum explicabo corrupti nihil. Labore illo dicta dolor consequatur iste quisquam ipsa at harum ipsam! Quas, tempore aspernatur, incidunt aliquid modi commodi aut dicta, et ea sapiente ipsam nemo impedit voluptates odio?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div id="list-example" class="list-group sticky-top" style={{top: '100px', zIndex: '100'}} role="tablist">
                                <a class="list-group-item list-group-item-action" href="#">Identitas Buku</a>
                                <a class="list-group-item list-group-item-action" href="#gambaran-singkat">Gambaran Singkat</a>
                                <a class="list-group-item list-group-item-action" href="#catatan-penafian">Catatan Penafian</a>
                                <a class="list-group-item list-group-item-action" href="#list-item-3">Panduan Penggunaan</a>
                                <a class="list-group-item list-group-item-action" href="#list-item-4">Keterkaitan dengan Mata Pelajaran</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default DetailBook