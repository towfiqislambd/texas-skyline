import SectionTitle from "../Common/SectionTitle";
import Marquee from "react-fast-marquee";
import { MdLocationOn } from "react-icons/md";

const locations = [
    { name: "Houston", url: "https://www.google.com/maps/place/Houston,+TX" },
    { name: "Katy", url: "https://www.google.com/maps/place/Katy,+TX" },
    { name: "Cypress", url: "https://www.google.com/maps/place/Cypress,+TX" },
    { name: "Tomball", url: "https://www.google.com/maps/place/Tomball,+TX" },
    { name: "Woodlands", url: "https://www.google.com/maps/place/The+Woodlands,+TX" },
    { name: "Conroe", url: "https://www.google.com/maps/place/Conroe,+TX" },
    { name: "Sugarland", url: "https://www.google.com/maps/place/Sugar+Land,+TX" },
    { name: "Spring", url: "https://www.google.com/maps/place/Spring,+TX" },
    { name: "Galveston", url: "https://www.google.com/maps/place/Galveston,+TX" },
    { name: "Richmond", url: "https://www.google.com/maps/place/Richmond,+TX" },
];


const OurLocations = () => {
    return (
        <section className="py-10 sm:py-12 bg-[#23262d]">
            <SectionTitle title="Our Locations" />
            <p className="text-center mb-7 sm:mb-10 leading-tight font-semibold text-[22px] sm:text-2xl md:text-3xl xl:text-4xl container font-montserrat mx-auto text-white">
                Areas we cover
            </p>

            <div className="container">
                <div className="md:px-7 lg:px-10 xl:px-16 2xl:px-0">
                    <Marquee autoFill={true} pauseOnHover={true} speed={40} className="gap-12">
                        {locations.map((location, index) => (
                            <p
                                key={index}
                                className="flex items-center gap-1 text-lg text-[#BDBDBD] hover:text-[#F9D0A0] hover:underline"
                            >
                                <MdLocationOn className="text-xl" />
                                <a
                                    href={location.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {location.name}
                                </a>
                            </p>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default OurLocations;
