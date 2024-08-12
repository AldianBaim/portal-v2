import React from 'react'
import Layout from '../components/global/Layout'
import Hero from '../components/guide/Hero/Hero'

const Survey = () => {

    const content = {
        subtitle: 'Survey',
        title: 'Lengkapi Survey Untuk Tingkatkan Kualitas',
        image: '/assets/image/guide/untuk ortu.png',
        vector: '/assets/image/guide/vectorForParent.png',
        description: 'Partisipasi dalam survei ini akan membantu dalam memahami apa yang berjalan baik dan di mana kita bisa melakukan perbaikan'
    }
    
    return (
        <Layout>
            <Hero content={content} role="parent" />
            <section className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm rounded p-3">
                                <div className="d-flex align-items-center gap-2">
                                    <img src="/assets/image/guide/survey/brown.svg" alt="" />
                                    <h6 className='mb-0'>M-01 Responden Kepala Sekolah 2024</h6>
                                </div>
                                <div className='p-1 my-3' style={{ borderRadius: '10px', backgroundColor: '#FFEEE7' }}>
                                    <div className="row p-2">
                                        <div className="col-4">
                                            <div className='text-muted'>ID</div>
                                            <div>M-01</div>
                                        </div>
                                        <div className="col-4">
                                            <div className='text-muted'>Version</div>
                                            <div>5</div>
                                        </div>
                                        <div className="col-4">
                                            <div className='text-muted'>Submission</div>
                                            <div>26</div>
                                        </div>
                                    </div>
                                </div>

                                <a href="" className='text-blue text-decoration-none'>Lihat selengkapnya &#8594;</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm rounded p-3">
                                <div className="d-flex align-items-center gap-2">
                                    <img src="/assets/image/guide/survey/red.svg" alt="" />
                                    <h6 className='mb-0'>M-03 Responden Guru</h6>
                                </div>
                                <div className='p-1 my-3' style={{ borderRadius: '10px', backgroundColor: '#FFE5EE' }}>
                                    <div className="row p-2">
                                        <div className="col-4">
                                            <div className='text-muted'>ID</div>
                                            <div>M-03</div>
                                        </div>
                                        <div className="col-4">
                                            <div className='text-muted'>Version</div>
                                            <div>1.3m</div>
                                        </div>
                                        <div className="col-4">
                                            <div className='text-muted'>Submission</div>
                                            <div>26</div>
                                        </div>
                                    </div>
                                </div>

                                <a href="" className='text-blue text-decoration-none'>Lihat selengkapnya &#8594;</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm rounded p-3">
                                <div className="d-flex align-items-center gap-2">
                                    <img src="/assets/image/guide/survey/purple.svg" alt="" />
                                    <h6 className='mb-0'>M-03 Responden Guru</h6>
                                </div>
                                <div className='p-1 my-3' style={{ borderRadius: '10px', backgroundColor: '#D7F5E8' }}>
                                    <div className="row p-2">
                                        <div className="col-4">
                                            <div className='text-muted'>ID</div>
                                            <div>M-04</div>
                                        </div>
                                        <div className="col-4">
                                            <div className='text-muted'>Version</div>
                                            <div>1.8m</div>
                                        </div>
                                        <div className="col-4">
                                            <div className='text-muted'>Submission</div>
                                            <div>26</div>
                                        </div>
                                    </div>
                                </div>

                                <a href="" className='text-blue text-decoration-none'>Lihat selengkapnya &#8594;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Survey