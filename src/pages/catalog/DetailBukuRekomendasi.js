import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroDetail from '../../components/catalog/hero/HeroDetail/HeroDetail'
import SectionBreadcumb from '../../components/catalog/sections/SectionBreadcumb/SectionBreadcumb'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const DetailBukuRekomendasi = () => {
    const token = localStorage.getItem('user_token');
    const { slug } = useParams();
    const [loading, setLoading] = useState(false)
    const [book, setBook] = useState([1])

    useEffect(() => {

        setLoading(true)
        const getBookDetail = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/catalogue/getDetails?slug=${slug}`);
                setBook(response.data.results);
            } catch (error) {
                return error.message;
            } finally {
                setLoading(false)
            }
        }
        getBookDetail()
    }, [slug])

    return (
        <Layout>
            {
                book.length !== 0 ? (
                    <>
                        <SectionBreadcumb
                            category={book.category}
                            level={book.level}
                            title={book.title}
                            slug={book.slug}
                            bookRecommendation={true}
                        />
                        <HeroDetail
                            id={book.id}
                            token={token}
                            slug={book.slug}
                            image={book.image}
                            bookType={book.type}
                            title={book.title}
                            publisher={book.publisher}
                            isbn={book.isbn}
                            edition={book.edition}
                            writer={book.writer}
                            attachment={book.attachment}
                            totalDownload={book.total_download}
                            totalRead={book.total_read}
                            totalPlay={book.total_play}
                            loading={loading}
                            category={book.category}
                            price_zone_1={book.price_zone_1}
                            price_zone_2={book.price_zone_2}
                            price_zone_3={book.price_zone_3}
                            price_zone_4={book.price_zone_4}
                            price_zone_5A={book.price_zone_5A}
                            price_zone_5B={book.price_zone_5B}
                            bookRecommendation={true}
                        />
                    </>
                ) : (
                    <div className="text-center my-5">
                        <img
                            width="60"
                            src="/assets/image/catalog/not-found.png"
                            className="img-fluid"
                            alt="Not found"
                        />
                        <div className="text-center mt-2">Buku tidak ditemukan / dalam revisi</div>
                    </div>
                )
            }
        </Layout>
    )
}

export default DetailBukuRekomendasi