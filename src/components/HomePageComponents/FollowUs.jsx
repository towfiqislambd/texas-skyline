import followUs from "../../assets/home/followUs.png"
import { FollowOnFacebook, FollowOnInstagram, FollowOnX } from "../svgContainer/SvgContainer";

const FollowUs = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${followUs})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                objectFit: 'cover'
            }}
            className="h-[320px] md:px-7 lg:px-10 xl:px-16 2xl:px-0">
            <div className="container text-center md:text-left flex items-center flex-col md:flex-row h-full justify-center md:justify-between gap-6">
                <div className="text-white">
                    <p className="tracking-[3px] sm:tracking-[6px] text-xl md:text-2xl xl:text-3xl mb-[10px]">FOLLOW US ON</p>
                    <p className="text-[22px] sm:text-2xl md:text-3xl xl:text-4xl">
                        <span
                            style={{
                                background: "linear-gradient(90deg, #F5CB9A 0%, #CC986C 21.06%, #CA966A 37.15%, #D19D71 51.68%, #C08A5F 68.99%, #8C4E25 100%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >TEXAS SKYLINE</span> PROPERTIES MEDIAS
                    </p>
                </div>
                <div className="flex gap-4 md:gap-5 items-center lg:pr-14">
                    <a href="https://www.instagram.com" target="_blank" className="transition-transform duration-300 hover:scale-110"><FollowOnInstagram /></a>
                    <a href="https://www.facebook.com" target="_blank" className="transition-transform duration-300 hover:scale-110"> <FollowOnFacebook /></a>
                    <a href="https://x.com" target="_blank" className="transition-transform duration-300 hover:scale-110"><FollowOnX /></a>
                </div>
            </div>
        </section>
    );
};

export default FollowUs;