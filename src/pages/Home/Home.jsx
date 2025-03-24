import Service from "@/components/HomePageComponents/Service";
import Banner from "../../components/HomePageComponents/Banner"
import OurSolution from "@/components/HomePageComponents/OurSolution";
import OurListings from "@/components/HomePageComponents/OurListings";
import OurStory from "@/components/HomePageComponents/OurStory";
import Neighborhoods from "@/components/HomePageComponents/Neighborhoods";
import PropertiesFamily from "@/components/HomePageComponents/PropertiesFamily";
import Testimonials from "@/components/HomePageComponents/Testimonials";
import OurAgent from "../../components/HomePageComponents/OurAgent";
import FollowUs from "@/components/HomePageComponents/FollowUs";
import ContactUs from "@/components/HomePageComponents/ContactUs";
import OurLocations from "@/components/HomePageComponents/OurLocations";

const Home = () => {
    return (
        <>
            <Banner />
            <Service />
            <OurSolution />
            <OurListings />
            <OurStory />
            <Neighborhoods />
            <PropertiesFamily />
            <Testimonials />
            <OurAgent />
            <FollowUs />
            <ContactUs />
            <OurLocations />
        </>
    );
};

export default Home;