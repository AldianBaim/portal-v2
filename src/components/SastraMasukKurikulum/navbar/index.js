import { faDoorOpen, faSignOut, faTachometerAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'

const Navbar = ({ nightMode }) => {

    // Handle night mode
    let backgroundColor = nightMode ? 'bg-night' : 'bg-soft-blue'
    let navbarType = nightMode ? 'navbar-dark' : 'navbar-light'
    let buttonColor = nightMode ? 'btn-outline-white' : 'btn-outline-blue'

    const location = useLocation()
    const navigate = useNavigate()
    const logout = () => {

        // Check if collapsed is show
        const toggler = document.getElementById('navbarNav')
        toggler.classList.contains('show') && toggler.classList.remove('show')

        // Delete localstorage and navigate route to root
        localStorage.removeItem('user_token')
        localStorage.removeItem('user_profile')
        navigate('/')
    }

    // Handle page on scroll navbar change background 
    const navbar = document.querySelector('.navbar');
    let button = document.querySelector('.btn-login')
    if (location.pathname.includes('/katalog')) {
        window.onscroll = () => {
            if (window.pageYOffset > 100) {
                if (nightMode) {
                    button.classList.remove('btn-outline-white')
                    button.classList.add('btn-outline-primary')

                    navbar.classList.remove('navbar-dark')
                    navbar.classList.add('navbar-light')

                    navbar.classList.remove('bg-night')
                    navbar.classList.add('bg-white')
                } else {
                    navbar.classList.remove('bg-white')
                    navbar.classList.add('bg-soft-blue')
                }
            }
            if (window.pageYOffset < 100) {
                if (nightMode) {
                    navbar.classList.remove('navbar-light')
                    navbar.classList.add('navbar-dark')

                    button.classList.remove('btn-outline-primary')
                    button.classList.add('btn-outline-white')

                    navbar.classList.remove('bg-white')
                    navbar.classList.add('bg-night')
                } else {
                    navbar.classList.remove('bg-soft-blue')
                    navbar.classList.add('bg-soft-white')

                }
            }
        }
    } else {
        window.onscroll = () => {
            if (window.pageYOffset > 100) {
                if (nightMode) {
                    button.classList.remove('btn-outline-white')
                    button.classList.add('btn-outline-blue')

                    navbar.classList.remove('navbar-dark')
                    navbar.classList.add('navbar-light')
                }

                navbar.classList.remove('bg-soft-blue')
                navbar.classList.add('bg-white')
            }
            if (window.pageYOffset < 100) {
                if (nightMode) {
                    navbar.classList.remove('navbar-light')
                    navbar.classList.add('navbar-dark')

                    button.classList.remove('btn-outline-blue')
                    button.classList.add('btn-outline-white')
                }
                navbar.classList.remove('bg-white')
                navbar.classList.add('bg-soft-blue')
            }
        }
    }

    // Handle user is logged in
    const token = localStorage.getItem('user_token');
    const user = JSON.parse(localStorage.getItem('user_profile'))

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
                                <NavLink to="/sastra-masuk-kurikulum" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">PANDUAN UMUM</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to="/sastra-masuk-kurikulum/rekomendasi-buku" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">REKOMENDASI BUKU</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to="/sastra-masuk-kurikulum/tentang-program" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">TENTANG PROGRAM</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to="/sastra-masuk-kurikulum" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">KURATOR</NavLink>
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