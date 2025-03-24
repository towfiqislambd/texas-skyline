import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import TopNewsBar from "@/shared/TopNewsBar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <TopNewsBar />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;