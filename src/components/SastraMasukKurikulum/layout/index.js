import { NavLink } from 'react-router-dom';
import Footer from '../footer';
import Navbar from '../navbar';

const Layout = ({ children, guide }) => {

    // Handle night mode in navbar
    let nightMode = false
    let hours = (new Date()).getHours();
    hours >= 18 || hours <= 6 ? (nightMode = true) : (nightMode = false)

    return (
        <>
            <Navbar nightMode={nightMode} />
            <main>
                {children}
            </main>
            <Footer guide={guide} />
            <NavLink to="/sastra-masuk-kurikulum/feedback">
                <button className="btn btn-sm btn-primary bg-light text-primary p-2 position-fixed bottom-0 end-0 me-2">
                    Saran & Masukan
                </button>
            </NavLink>
        </>
    )
}

export default Layout