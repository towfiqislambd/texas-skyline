const SolutionBox = ({ data }) => {
    return (
        <div className="flex gap-4 sm:gap-5 flex-shrink-0 mb-5 w-full lg:w-[450px] xl:w-[500px] group">
            <div className="border flex-shrink-0 border-[#D19A6E] rounded-full w-12 h-12 sm:w-14 sm:h-14 grid place-items-center group-hover:bg-[linear-gradient(90deg,#F5CB9A_0%,#CC986C_21.06%,#CA966A_37.15%,#D19D71_51.68%,#C08A5F_68.99%,#8C4E25_100%)] transition-all duration-300">{data.logo}</div>
            <div className="">
                <h4 className="text-white text-xl font-medium mb-2 sm:mb-3">{data.title}</h4>
                <p className="text-[#BDBDBD]">{data.desc}</p>
            </div>
        </div>
    );
};

export default SolutionBox;