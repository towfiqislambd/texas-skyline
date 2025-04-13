import SectionTitle from "../Common/SectionTitle";
import Marquee from "react-fast-marquee";
import { MdLocationOn } from "react-icons/md";

const OurLocations = () => {
    return (
        <section className="py-10 sm:py-12 bg-[#23262d]">
            <SectionTitle title='Our Locations'></SectionTitle>
            <p className="text-center mb-7 sm:mb-10 leading-tight font-semibold text-[22px] sm:text-2xl md:text-3xl xl:text-4xl container font-montserrat mx-auto text-white">Houston areas</p>

            <div className="container">
                <div className="md:px-7 lg:px-10 xl:px-16 2xl:px-0">
                    <Marquee autoFill={true} pauseOnHover={true} speed={40} className="gap-12">
                        <p className="flex items-center gap-1 text-lg text-[#BDBDBD] hover:text-[#F9D0A0] hover:underline">
                            <MdLocationOn className="text-xl" />
                            <a href="https://www.google.com/maps" target="_blank">Crockett</a>
                        </p>
                        <p className="flex items-center gap-1 text-lg text-[#BDBDBD] hover:text-[#F9D0A0] hover:underline">
                            <MdLocationOn className="text-xl" />
                            <a href="https://www.google.com/maps" target="_blank">Friendswood</a>
                        </p>
                        <p className="flex items-center gap-1 text-lg text-[#BDBDBD] hover:text-[#F9D0A0] hover:underline">
                            <MdLocationOn className="text-xl" />
                            <a href="https://www.google.com/maps" target="_blank">Grapeland</a>
                        </p>
                        <p className="flex items-center gap-1 text-lg text-[#BDBDBD] hover:text-[#F9D0A0] hover:underline">
                            <MdLocationOn className="text-xl" />
                            <a href="https://www.google.com/maps" target="_blank">Houston</a>
                        </p>
                        <p className="flex items-center gap-1 text-lg text-[#BDBDBD] hover:text-[#F9D0A0] hover:underline">
                            <MdLocationOn className="text-xl" />
                            <a href="https://www.google.com/maps" target="_blank">Kennard</a>
                        </p>
                        <p className="flex items-center gap-1 text-lg text-[#BDBDBD] hover:text-[#F9D0A0] hover:underline">
                            <MdLocationOn className="text-xl" />
                            <a href="https://www.google.com/maps" target="_blank">Latexo</a>
                        </p>
                        <p className="flex items-center gap-1 text-lg text-[#BDBDBD] hover:text-[#F9D0A0] hover:underline">
                            <MdLocationOn className="text-xl" />
                            <a href="https://www.google.com/maps" target="_blank">Willis</a>
                        </p>
                        <p className="flex items-center gap-1 text-lg text-[#BDBDBD] hover:text-[#F9D0A0] hover:underline">
                            <MdLocationOn className="text-xl" />
                            <a href="https://www.google.com/maps" target="_blank">Weldon</a>
                        </p>
                        <p className="flex items-center gap-1 text-lg text-[#BDBDBD] hover:text-[#F9D0A0] hover:underline">
                            <MdLocationOn className="text-xl" />
                            <a href="https://www.google.com/maps" target="_blank">Lovelady</a>
                        </p>
                        <p className="flex items-center gap-1 text-lg text-[#BDBDBD] hover:text-[#F9D0A0] hover:underline">
                            <MdLocationOn className="text-xl" />
                            <a href="https://www.google.com/maps" target="_blank">Pennington</a>
                        </p>
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default OurLocations;