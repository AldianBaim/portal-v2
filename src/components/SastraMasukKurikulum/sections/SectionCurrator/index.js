import { useState } from "react"
import { Link } from "react-router-dom"

const Currator = ({curratorsSD, curratorsSMP, curratorsSMA, loading}) => {

    const [detailCurrator, setDetailCurrator] = useState()

    return (
        <section className="bg-soft-blue" id="kurator" style={{ padding: '80px 0' }}>
            <div className="container p-3 py-5">
                <div className="text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <h2>Daftar Kurator</h2>
                            <p className="lead mt-2">Kenali para kurator sastra kami dan temukan buku-buku pilihan yang dapat menginspirasi siswa dan memperkaya pembelajaran di kelas.</p>
                            <div className="text-start mt-5 mb-4">
                                <h4>Kurator Rekomendasi Buku SD</h4>
                                <hr className="dashed" />
                            </div>
                            <div className="row justify-content-center">
                                {
                                    curratorsSD.map((currator) => {
                                        return (
                                            <div className="col-6 col-lg-2 mb-4" key={currator.id}>
                                                <div className="card-hover" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setDetailCurrator(currator)}>
                                                    <img src={currator.foto} className="rounded-circle w-75" alt="Avatar" />
                                                    <div className="mt-2 mb-1">{currator.nama}</div>
                                                    <a role="button" className="text-decoration-none text-blue">Lihat detail</a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="text-start my-4">
                                <h4>Kurator Rekomendasi Buku SMP</h4>
                                <hr className="dashed" />
                            </div>
                            <div className="row justify-content-center">
                                {
                                    curratorsSMP.map((currator) => {
                                        return (
                                            <div className="col-6 col-lg-2 mb-4" key={currator.id}>
                                                <div className="card-hover" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setDetailCurrator(currator)}>
                                                    <img src={currator.foto} className="rounded-circle w-75" alt="Avatar" />
                                                    <div className="mt-2 mb-1">{currator.nama}</div>
                                                    <a className="text-decoration-none text-blue">Lihat detail</a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="text-start my-4">
                                <h4>Kurator Rekomendasi Buku SMA</h4>
                                <hr className="dashed" />
                            </div>
                            <div className="row justify-content-center">
                                {
                                    curratorsSMA.map((currator) => {
                                        return (
                                            <div className="col-6 col-lg-2 mb-4" key={currator.id}>
                                                <div className="card-hover" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setDetailCurrator(currator)}>
                                                    <img src={currator.foto} className="rounded-circle w-75" alt="Avatar" />
                                                    <div className="mt-2 mb-1">{currator.nama}</div>
                                                    <a className="text-decoration-none text-blue">Lihat detail</a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header border-0 p-2">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body px-3 px-lg-5 py-4">
                                <div className="d-flex flex-column  align-items-center align-items-lg-start flex-lg-row gap-5">
                                    <img src={detailCurrator?.foto} className="rounded-circle" width={200} height={200} alt="" />
                                    <div>
                                        <h4>{detailCurrator?.nama}</h4>
                                        <div className="mb-4">{detailCurrator?.branding}</div>
                                        <p dangerouslySetInnerHTML={{ __html: detailCurrator?.description }}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Currator