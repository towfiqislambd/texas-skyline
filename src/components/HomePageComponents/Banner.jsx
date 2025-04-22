import banner from "../../assets/home/banner.png";
import search from "../../assets/icons/search.png";

const Banner = () => {
    return (
        <header
            style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                objectFit: 'cover'
            }}
            className="pb-28 md:pb-48 2xl:pb-60 pt-36 md:pt-56 2xl:pt-96 text-center flex justify-center items-center"
        >
            <div className="space-y-5 md:space-y-6 lg:space-y-7 container">
                <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                    <span className="block sm:mb-2"
                        style={{
                            background: "linear-gradient(90deg, #F5CB9A 0%, #CC986C 21.06%, #CA966A 37.15%, #D19D71 51.68%, #C08A5F 68.99%, #8C4E25 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            display: "inline-block"
                        }}
                    >TEXAS SKYLINE</span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-[5px]">PROPERTIES</span>
                </h1>
                <p className="sm:text-lg md:text-xl text-white font-montserrat">Turn Your Real Estate Dreams into Reality</p>
                <div className="flex items-center justify-center">
                    <a href="https://www.har.com/idx/mls/search?sitetype=cws&cid=5865&allmls=y&for_sale=1&mlsorgid=1" target="_blank">
                        <input
                            type="text"
                            className="px-3 text-sm sm:text-base sm:px-4 border-none outline-none w-[230px] sm:w-[330px] md:w-[520px] sm:py-3 py-2 rounded-tl rounded-bl bg-white" placeholder="Search by city, area, zip, MLS#, or address"
                        />
                    </a>
                    <button className="bg-[#bd8354] rounded-tr rounded-br px-3 sm:px-5 py-[6px] sm:py-3">
                        <img src={search} alt="" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Banner;
