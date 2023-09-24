import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

 

const MainLayout = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;