import { Outlet } from "react-router-dom";
import Navbar from "../pages/Main/Home/Navbar/Navbar";
import Footer from "../pages/Main/Home/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;