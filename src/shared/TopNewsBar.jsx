import { useEffect, useState } from "react"
import { TopBarSocialIconFive, TopBarSocialIconFour, TopBarSocialIconOne, TopBarSocialIconThree, TopBarSocialIconTwo } from "@/components/svgContainer/SvgContainer"

const TopNewsBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`bg-[#23262D] md:px-7 lg:px-10 xl:px-16 2xl:px-0 py-3 sticky top-0 z-40 hidden lg:block ${scrolled && 'hidden'}`}>
            <div className="container flex justify-between items-center">
                {/* Social part */}
                <div className="flex gap-2 items-center">
                    <a href="https://www.facebook.com" target="_blank" className="hover:bg-white duration-500 transition-all border rounded-full w-10 h-10 border-[#CC986C] grid place-items-center">
                        <TopBarSocialIconOne />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" className="hover:bg-white duration-500 transition-all border rounded-full w-10 h-10 border-[#CC986C] grid place-items-center">
                        <TopBarSocialIconTwo />
                    </a>
                    <a href="https://x.com" target="_blank" className="hover:bg-white duration-500 transition-all border rounded-full w-10 h-10 border-bannerTitle grid place-items-center">
                        <TopBarSocialIconThree />
                    </a>
                </div>
                {/* Contact Part */}
                <div className="flex items-center gap-10">
                    <p className="flex gap-2 items-center">
                        <TopBarSocialIconFour />
                        <span className="text-[#BDBDBD]">(713) 232 9770</span>
                    </p>
                    <p className="flex gap-2 items-center">
                        <TopBarSocialIconFive />
                        <span className="text-[#BDBDBD]">info@txskyline.com</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopNewsBar;