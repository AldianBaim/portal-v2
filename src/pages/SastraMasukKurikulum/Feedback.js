import { Link } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../utils/config"
import { useForm } from "react-hook-form"
const Feedback = () => {

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const { register, setValue ,handleSubmit, formState: { errors } } = useForm();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user_token'))
    const user = JSON.parse(localStorage.getItem('user_profile'))

    const onSubmit = async (data) => {
        setLoading(true)

        const payload = new FormData()
        payload.append('user_id', data.user_id)
        payload.append('email', data.email)
        payload.append('nama', data.nama)
        payload.append('content', data.content)

        try {
            const response = await axios.post(`${BASE_URL}/api/sastra/feedback`, payload, {
                headers: {
                    Authorization: isLoggedIn
                }
            })
            console.log(response)
            if (response.data.status == 'failed') {
                setMessage({
                    status: 'failed',
                    content: response.data.message
                })
            } else {
                setMessage({
                    status: 'success',
                    content: response.data.message
                })
            }
        } catch (error) {
            setMessage({
                status: 'failed',
                content: error.message
            })
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!isLoggedIn) {
            setMessage({
                status: 'warning',
                content: 'Silahkan <a href="/login?callback=sastra-masuk-kurikulum/feedback" className="text-decoration-none text-blue">Login</a> terlebih dahulu untuk mengisi umpan balik'
            })
        } else {
            setValue('user_id', user?.user_id)
            setValue('nama', user?.fullname)
            setValue('email', user?.email)
        }
    })

    return (
        <Layout>
            <section>
                <div className="container p-3 py-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/sastra-masuk-kurikulum" className="text-decoration-none text-blue">Beranda</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Formulir Saran, Masukan dan Pertanyaan</li>
                        </ol>
                    </nav>
                    <hr />
                    
                    {
                        message?.status === 'success' && message?.content !== '' && (
                            <div className="alert alert-success alert-dismissible fade show" dangerouslySetInnerHTML={{ __html: message?.content }}></div>
                        )
                    }

                    {
                        message?.status === 'warning' && message?.content !== '' && (
                            <div className="alert alert-warning alert-dismissible fade show" dangerouslySetInnerHTML={{ __html: message?.content }}></div>
                        )
                    }

                    {
                        message?.status === 'failed' && message?.content !== '' && (
                            <div className="alert alert-warning alert-dismissible fade show" dangerouslySetInnerHTML={{ __html: message?.content }}></div>
                        )
                    }
                    <div className="row">
                        <div className="col-lg-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Nama Lengkap</label>
                                    <input {...register('nama', { required: true })} type="text" className="form-control" placeholder="Masukan nama lengkap" />
                                    {errors.nama && errors.nama.type === 'required' && <small className="text-danger">Nama lengkap harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Email</label>
                                    <input {...register('email', { required: true })} type="text" className="form-control" placeholder="Masukan alamat email" />
                                    {errors.email && errors.email.type === 'required' && <small className="text-danger">Email harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Nomor Whatsapp</label>
                                    <input {...register('whatsapp', { required: true })} type="text" className="form-control" placeholder="Masukan nomor telepon" />
                                    {errors.whatsapp && errors.whatsapp.type === 'required' && <small className="text-danger">Nomor telepon harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Pertanyaan, Saran, atau Masukan</label>
                                    <textarea {...register('content', { required: true })} type="text" rows="7" className="form-control" placeholder="Masukan nama lengkap"></textarea>
                                    {errors.content && errors.content.type === 'required' && <small className="text-danger">Nama lengkap harus diisi</small>}
                                </div>
                                <div className="form-group d-grid gap-2">
                                    {loading && (
                                        <button type="submit" className="btn btn-orange py-2 disabled">
                                            <div className="spinner-border" role="status"></div>
                                        </button>
                                    )}
                                    {!loading && <button disabled={!isLoggedIn} type="submit" className="btn btn-orange py-2">Kirim</button>}
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    )
}

export default Feedback