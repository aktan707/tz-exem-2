import Header from "./Header/Header.jsx";
import {Outlet} from "react-router";
import Footer from "./Footer/Footer.jsx";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;