import footerFeather from "../assets/shared/footerFeather.png"
import { FooterFacebookSvg, FooterIconFour, FooterInstagramSvg, FooterXSvg, NavLogo, TopBarSocialIconFive, TopBarSocialIconFour } from "@/components/svgContainer/SvgContainer"

const Footer = () => {
    return (
        <footer className="bg-[#16181C] pt-8 sm:pt-16 pb-5">
            {/* Upper Part */}
            <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-7 md:gap-10 2xl:gap-5 pb-10 container md:px-7 lg:px-10 xl:px-16 2xl:px-0">
                {/* part one */}
                <div className="space-y-5">
                    <NavLogo />
                    <div className="space-y-2">
                        <p className="flex gap-2 items-center">
                            <TopBarSocialIconFour />
                            <span className="text-[#BDBDBD]">(713) 232 9770</span>
                        </p>
                        <p className="flex gap-2 items-center">
                            <TopBarSocialIconFive />
                            <span className="text-[#BDBDBD]">info@txskyline.com</span>
                        </p>
                    </div>
                    <div className="flex gap-2 sm:gap-3 items-center">
                        <a href="https://www.facebook.com" target="_blank" className="hover:bg-white duration-500 transition-all border rounded-full w-10 h-10 border-[#CC986C] grid place-items-center">
                            <FooterFacebookSvg />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="hover:bg-white duration-500 transition-all border rounded-full w-10 h-10 border-[#CC986C] grid place-items-center">
                            <FooterInstagramSvg />
                        </a>
                        <a href="https://x.com" target="_blank" className="hover:bg-white duration-500 transition-all border rounded-full w-10 h-10 border-[#CC986C] grid place-items-center">
                            <FooterXSvg />
                        </a>
                    </div>
                </div>
                {/* part two */}
                <div className="">
                    <h3 className="font-medium text-lg text-white mb-3">Company</h3>
                    <div className="text-[#D9D9D9] flex flex-col gap-3">
                        <a href="#about">About us</a>
                        <a href="">Solutions</a>
                        <a href="#agent">Our agents</a>
                        <a href="#testimonial">Testimonials</a>
                    </div>
                </div>
                {/* part three */}
                <div className="">
                    <h3 className="font-medium text-lg text-white mb-3">Help</h3>
                    <div className="text-[#D9D9D9] flex flex-col gap-3">
                        <a href="#">FAQs</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                {/* part four */}
                <div className="">
                    <h3 className="font-medium text-lg text-white mb-3">Office Location </h3>
                    <p className="text-[#CECECE]">1923 Washington Ave., Ste. 2041, Houston, TX 77007</p>
                    <div className="flex gap-2 sm:gap-3 items-center py-4">
                        <FooterIconFour />
                        <a
                            href="https://www.google.com/maps/place/1923+Washington+Ave+Ste+2041,+Houston,+TX+77007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white sm:text-lg"
                        >
                            See on Map
                        </a>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#BDBDBD]">Office Phone: (713) 232 9770</p>
                        <p className="text-[#BDBDBD]">Office Email: info@txskyline.com</p>
                    </div>
                </div>
                {/* part five */}
                <div>
                    <img src={footerFeather} alt="footerFeather" className="object-cover" />
                </div>
            </div>
            {/* Lower Part */}
            <div className="border-t border-gray-700 pt-6">
                <p className="text-[#BDBDBD] container text-center">© Texas Skyline Properties - All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;