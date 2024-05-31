import { Link, useNavigate } from "react-router-dom"
import Layout from "../../components/SastraMasukKurikulum/layout"
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../utils/config"
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
const Feedback = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const { resetField, register, getValues, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setLoading(true)
        const payload = JSON.stringify(data)

        try {
            const response = await axios.post(`${BASE_URL}/api/user/register`, payload)

            if (response.data.status == 'failed') {
                setMessage(response.data.message)
            } else {
                setMessage('')
                navigate(`/login?register=success&email=${getValues('email')}`)
                resetField('email')
            }
        } catch (error) {
            return error.message
        } finally {
            resetField('password')
            resetField('confirm_password')
            setLoading(false)
            setTimeout(() => {
                window.scrollTo({ top: '0', behavior: 'smooth' })
            }, 500)
        }
    }

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
                        message !== '' && (
                            <div className="alert alert-danger alert-dismissible fade show">
                                {message}
                            </div>
                        )
                    }
                    <div className="row">
                        <div className="col-lg-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Nama Lengkap</label>
                                    <input {...register('name', { required: true })} type="text" className="form-control" placeholder="Masukan nama lengkap" />
                                    {errors.name && errors.name.type === 'required' && <small className="text-danger">Nama lengkap harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Email</label>
                                    <input {...register('email', { required: true })} type="text" className="form-control" placeholder="Masukan alamat email" />
                                    {errors.email && errors.email.type === 'required' && <small className="text-danger">Email harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Nomor Whatsapp</label>
                                    <input {...register('phone', { required: true })} type="text" className="form-control" placeholder="Masukan nomor telepon" />
                                    {errors.phone && errors.phone.type === 'required' && <small className="text-danger">Nomor telepon harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Pertanyaan, Saran, atau Masukan</label>
                                    <textarea {...register('name', { required: true })} type="text" rows="7" className="form-control" placeholder="Masukan nama lengkap"></textarea>
                                    {errors.name && errors.name.type === 'required' && <small className="text-danger">Nama lengkap harus diisi</small>}
                                </div>
                                <div className="form-group d-grid gap-2">
                                    {loading && (
                                        <button type="submit" className="btn btn-orange py-2 disabled">
                                            <div className="spinner-border" role="status"></div>
                                        </button>
                                    )}
                                    {!loading && <button type="submit" className="btn btn-orange py-2">Kirim</button>}
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