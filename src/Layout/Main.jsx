import { Outlet } from "react-router-dom";
import Footer from "../Routes/Shared/Footer/Footer";
import Navbar from "../Routes/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;