import React from 'react'
import { Link, NavLink} from 'react-router-dom'

const Navbar = ({ nightMode }) => {

    // Handle night mode
    let backgroundColor = nightMode ? 'bg-night' : 'bg-soft-blue'
    let navbarType = nightMode ? 'navbar-dark' : 'navbar-light'

    return (
        <section className="sticky-top fixed-top" id="navbar">
            <nav className={`navbar navbar-expand-lg ${navbarType} ${backgroundColor}`}>
                <div className="container">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img src="/assets/image/logo-sibi.png" height={50} alt="" />
                        <div className={navbarType} style={{ fontSize: '.95rem' }}>
                            <div>Sistem Informasi</div>
                            <div className="fw-bold">Perbukuan Indonesia</div>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">
                                <NavLink to="/sastra-masuk-kurikulum" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">BERANDA</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to="/sastra-masuk-kurikulum/panduan-umum" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">PANDUAN UMUM</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to="/sastra-masuk-kurikulum/rekomendasi-buku" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">REKOMENDASI BUKU</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to="/sastra-masuk-kurikulum/tentang-program" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">TENTANG PROGRAM</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to="/sastra-masuk-kurikulum/#kurator" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">KURATOR</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to="/sastra-masuk-kurikulum/faq" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">FAQ</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar