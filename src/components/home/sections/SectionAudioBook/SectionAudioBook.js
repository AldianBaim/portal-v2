import { Link, useNavigate } from 'react-router-dom'
import CardBook from '../../../global/card/CardBook/CardBook'
import CardSkeleton from '../../../global/card/CardSkeleton/CardSkeleton'

const SectionAudioBook = ({ loading, audioBooks }) => {
    const navigate = useNavigate()
    return (
        <section className="py-5">
            <div className="container p-3">
                <div className="row align-items-center">
                    <div className="col-lg-6 ">
                        <h3 className="fw-bold">Buku <div className="d-inline-flex flex-column"><span>audio</span><span className="mt-n4"><img src="/assets/image/home/line-subtitle.png" alt="line title" /></span></div></h3>
                        <p className="text-muted">Belajar lebih interaktif dan mudah dengan buku audio</p>
                    </div>
                    <div className="col-lg-6 text-end">
                        <div onClick={() => navigate('/katalog')} className="btn btn-sm btn-outline-blue">Lihat Semua Buku Audio</div>
                    </div>
                </div>
                <div className="row mt-4">
                    {
                        loading
                            ? [0, 1, 2, 3].map((item, index) => {
                                return (
                                    <div key={index} className="col-lg-3"><CardSkeleton /></div>
                                )
                            })
                            : audioBooks?.map((book, index) => {
                                return (
                                    <div key={index} className="col-lg-3 my-2">
                                        <Link key={index} to={`/katalog/${book.slug}`} className="text-decoration-none text-dark">
                                            <CardBook
                                                image={book.image}
                                                title={book.title}
                                                typeBook={book.type}
                                                level={book.level}
                                            />
                                        </Link>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </section >
    )
}

export default SectionAudioBook