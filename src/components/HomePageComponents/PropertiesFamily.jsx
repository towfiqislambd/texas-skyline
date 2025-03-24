import { ApplyNowSvg } from "../svgContainer/SvgContainer";

const PropertiesFamily = () => {
    return (
        <div className="py-7 bg-[linear-gradient(90deg,#F5CB9A_0%,#CC986C_21.06%,#CA966A_37.15%,#D19D71_51.68%,#C08A5F_68.99%,#8C4E25_100%)] text-white">
            <div className="container flex items-center text-center sm:text-left flex-col md:flex-row justify-center gap-5 md:gap-10">
                <p className="text-lg sm:text-xl font-medium tracking-[2px]">JOIN THE TEXAS SKYLINE PROPERTIES FAMILY!</p>
                <button className="flex gap-2 items-center rounded bg-[#171717] md:px-4 py-2 px-2 md:py-[10px] hover:bg-transparent border border-transparent hover:border-white transition-all duration-300">
                    <ApplyNowSvg />
                    <p>Click to Apply</p>
                </button>
            </div>
        </div>
    );
};

export default PropertiesFamily;