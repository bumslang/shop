import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Root() {
    return (
        <div >
            <Header />
            <div style={{ background: '#FBF8EC', padding: '0 116px' }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root;