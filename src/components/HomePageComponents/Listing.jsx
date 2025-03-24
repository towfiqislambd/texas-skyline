import { GrLocation } from "react-icons/gr";
import { ListeningHoverOne, ListeningHoverThree, ListeningHoverTwo, ListingSvgFive, ListingSvgFour, ListingSvgOne, ListingSvgThree, ListingSvgTwo } from "../svgContainer/SvgContainer";
import { Link } from "react-router-dom";
const Listing = ({ data }) => {
    return (
        <div className="relative overflow-hidden rounded-[5px] group">
            <figure className="relative h-[270px] sm:h-[316px] overflow-hidden">
                {/* Black Overlay (only over figure) */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center px-10 xl:px-12 space-y-7 sm:space-y-10 flex-col">
                    <Link
                        to="/" className="flex gap-2 items-center text-white duration-300 transition-all hover:text-[#F9D0A0] text-lg">
                        <ListeningHoverOne />
                        <span className="">View details</span>
                    </Link>
                    <Link to="/" className="flex gap-2 items-center text-white duration-300 transition-all hover:text-[#F9D0A0] text-lg">
                        <ListeningHoverTwo />
                        <span className="">Similar properties</span>
                    </Link>
                    <Link to="/" className="flex gap-2 items-center text-white duration-300 transition-all hover:text-[#F9D0A0] text-lg">
                        <ListeningHoverThree />
                        <span className="">Save</span>
                    </Link>
                </div>
                <img src={data.thumbnail} alt="" className="w-full h-full object-cover" />
            </figure>

            <div className="md:py-3">
                <h3
                    style={{
                        background: "linear-gradient(90deg, #F5CB9A 0%, #CC986C 21.06%, #CA966A 37.15%, #D19D71 51.68%, #C08A5F 68.99%, #8C4E25 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }} className="text-2xl font-medium mb-2 mt-5">${data.amount}</h3>
                <h4 className="text-white text-xl sm:text-2xl font-semibold font-montserrat mb-3">{data.title}</h4>
                <p className="flex items-center gap-2 text-[#EEE] mb-2">
                    <GrLocation className="text-xl" />
                    <span>{data.location}</span>
                </p>
                <p className="text-[#BDBDBD] text-sm">{data.desc}</p>
                <div className="border-t my-6 border-[#b79a7890]"></div>
                <div className="flex text-[#EEE] flex-wrap items-center gap-3">
                    <p className="flex gap-1 items-center border rounded-[5px] px-2 py-2 border-[#b79a7890]">
                        <ListingSvgOne />
                        <span>{data.extraInfo.length} sqft</span>
                    </p>
                    <p className="flex gap-1 items-center border rounded-[5px] px-2 py-2 border-[#b79a7890]">
                        <ListingSvgTwo />
                        <span>{data.extraInfo.bed}</span>
                    </p>
                    <p className="flex gap-1 items-center border rounded-[5px] px-2 py-2 border-[#b79a7890]">
                        <ListingSvgThree />
                        <span>{data.extraInfo.washroom}</span>
                    </p>
                    <p className="flex gap-1 items-center border rounded-[5px] px-2 py-2 border-[#b79a7890]">
                        <ListingSvgFour />
                        <span>{data.extraInfo.car}</span>
                    </p>
                    <p className="flex gap-1 items-center border rounded-[5px] px-2 py-2 border-[#b79a7890]">
                        <ListingSvgFive />
                        <span>{data.extraInfo.builtYear} - Year of built</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Listing;
