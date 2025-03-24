import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/Home";
import AboutUs from "@/pages/AboutUs/AboutUs";
import HomeSearch from "@/pages/HomeSearch/HomeSearch";
import MainLayout from "@/layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import SellProperties from "@/pages/SellProperties/SellProperties";
import OurAgents from "@/pages/OurAgents/OurAgents";
import JoinTexasSkyline from "@/pages/JoinTexasSkyline/JoinTexasSkyline";
import Contact from "@/pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/aboutUs",
                element: <AboutUs />
            },
            {
                path: "/homeSearch",
                element: <HomeSearch />
            },
            {
                path: "/sellProperties",
                element: <SellProperties />
            },
            {
                path: "/ourAgents",
                element: <OurAgents />
            },
            {
                path: "/joinTexasSkyline",
                element: <JoinTexasSkyline />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
]);

export default router;