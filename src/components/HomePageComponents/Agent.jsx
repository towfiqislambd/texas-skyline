import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";
import { RxUpload } from "react-icons/rx";
import { FaRegBookmark } from "react-icons/fa6";
import { InstagramSvg, VerifiedSvg } from "../svgContainer/SvgContainer";

const Agent = ({ data }) => {
    return (
        <div id="agent" className="rounded-lg group">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <figure className="w-10 h-10 xl:w-12 xl:h-12 flex-shrink-0 rounded-full">
                        <img src={data.author_img} className="w-full h-full rounded-full object-cover" />
                    </figure>
                    <div className="text-white">
                        <div className="flex gap-2 items-center">
                            <h4 className="font-medium">{data.author_name}</h4>
                            {
                                data.isVerified ? <VerifiedSvg /> : ''
                            }
                        </div>
                        <p className="text-sm text-gray-200">Original audio</p>
                    </div>
                </div>
                <button className="px-[10px] xl:px-4 py-[6px] text-sm xl:text-base xl:py-2 bg-[linear-gradient(90deg,#F5CB9A_0%,#CC986C_21.06%,#CA966A_37.15%,#D19D71_51.68%,#C08A5F_68.99%,#8C4E25_100%)] text-white rounded">View profile</button>
            </div>
            {/* Thumbnail */}
            <figure className="h-[300px] sm:h-[320px] xl:h-[400px] rounded-t-lg w-full relative overflow-hidden">
                <img src={data.thumbnail} alt="" className="w-full rounded-t-lg h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bg-black/30 inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </figure>
            <div className="bg-[#201D1B] rounded-b-lg">
                {/* View more btn */}
                <p className="text-[#1E9AFF] font-medium px-5 py-4">
                    <a href="#">View more on instagram</a>
                </p>
                {/* react, comment, upload, bookmark */}
                <div className="text-gray-300 border-t border-b flex justify-between items-center px-5 py-4 border-gray-500">
                    <div className="flex gap-4 items-center">
                        <a href="#"><FiHeart className="text-2xl" /></a>
                        <a href="#"><FaRegComment className="text-2xl" /></a>
                        <a href="#"><RxUpload className="text-2xl" /></a>
                    </div>
                    <a href="#"><FaRegBookmark className="text-2xl" /></a>
                </div>
                {/* Add comment */}
                <div className="flex justify-between items-center px-5 py-4">
                    <input type="text" className="border-none bg-transparent placeholder:text-gray-200 text-white outline-none" placeholder="Add a comment..." />
                    <InstagramSvg />
                </div>
            </div>
        </div>
    );
};

export default Agent;