import { Link } from "react-router-dom"

const Sidebar = () => {

    const menuActive = window.location.pathname.split("/").pop()

    return (
        <section id="sidebar-kurikulum">
            <div className="d-flex flex-column">
                <Link to="/sastra-masuk-kurikulum/tentang-program" className={`${menuActive == 'tentang-program' && 'menu-active'} p-3 px-3 text-decoration-none text-dark`}>Tentang Program</Link>
                {/* <Link to="/sastra-masuk-kurikulum/tujuan-program" className={`${menuActive == 'tujuan-program' && 'menu-active'} p-3 px-3 text-decoration-none text-dark`}>Tujuan Program</Link> */}
                <Link to="/sastra-masuk-kurikulum/tahapan-kurasi" className={`${menuActive == 'tahapan-kurasi' && 'menu-active'} p-3 px-3 text-decoration-none text-dark`}>Proses dan Kriteria Kurasi</Link>
                <Link to="/sastra-masuk-kurikulum/modul-ajar" className={`${menuActive == 'modul-ajar' && 'menu-active'} p-3 px-3 text-decoration-none text-dark`}>Modul Ajar</Link>
            </div>
        </section>
    )
}

export default Sidebar