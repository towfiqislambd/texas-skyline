import SectionTitle from '../Common/SectionTitle';
import {
  SolutionSvgFive,
  SolutionSvgFour,
  SolutionSvgOne,
  SolutionSvgSix,
  SolutionSvgThree,
  SolutionSvgTwo,
} from '../svgContainer/SvgContainer';
import SolutionBox from './SolutionBox';
const solutionData = [
  {
    id: 1,
    logo: <SolutionSvgOne />,
    title: 'Buyer',
    desc: 'Assistance in buying and selling houses, apartments, offices, and retail spaces. Providing data-driven property valuations to ensure the best price. Handling legal paperwork, price negotiations, and smooth transaction finalization.',
  },
  {
    id: 2,
    logo: <SolutionSvgTwo />,
    title: 'Seller',
    desc: 'Assistance in buying and selling houses, apartments, offices, and retail spaces. Providing data-driven property valuations to ensure the best price. Handling legal paperwork, price negotiations, and smooth transaction finalization.',
  },
  {
    id: 3,
    logo: <SolutionSvgThree />,
    title: 'Investor',
    desc: 'Assistance in buying and selling houses, apartments, offices, and retail spaces. Providing data-driven property valuations to ensure the best price. Handling legal paperwork, price negotiations, and smooth transaction finalization.',
  },
  {
    id: 4,
    logo: <SolutionSvgFour />,
    title: 'Landlord',
    desc: 'Assistance in buying and selling houses, apartments, offices, and retail spaces. Providing data-driven property valuations to ensure the best price. Handling legal paperwork, price negotiations, and smooth transaction finalization.',
  },
  {
    id: 5,
    logo: <SolutionSvgFive />,
    title: 'Tenant',
    desc: 'Assistance in buying and selling houses, apartments, offices, and retail spaces. Providing data-driven property valuations to ensure the best price. Handling legal paperwork, price negotiations, and smooth transaction finalization.',
  },
  {
    id: 6,
    logo: <SolutionSvgSix />,
    title: 'Commercial Partner',
    desc: 'Assistance in buying and selling houses, apartments, offices, and retail spaces. Providing data-driven property valuations to ensure the best price. Handling legal paperwork, price negotiations, and smooth transaction finalization.',
  },
];

const OurSolution = () => {
  return (
    <section className="bg-[#20232A] py-10 sm:py-14 md:py-20">
      <SectionTitle title="Our Solutions"></SectionTitle>
      <p className="max-w-[390px] text-center mb-10 md:mb-16 leading-tight font-semibold text-[22px] sm:text-2xl md:text-3xl xl:text-4xl container font-montserrat mx-auto text-white">
        <span>Let Us Be Your </span>
        <span
        // style={{
        //     background: "linear-gradient(90deg, #F5CB9A 0%, #CC986C 21.06%, #CA966A 37.15%, #D19D71 51.68%, #C08A5F 68.99%, #8C4E25 100%)",
        //     backgroundClip: "text",
        //     WebkitBackgroundClip: "text",
        //     WebkitTextFillColor: "transparent",
        // }}
        >
          Real Estate Partner
        </span>
      </p>

      <div className="container flex gap-5 md:px-7 lg:px-10 xl:px-16 2xl:px-0 justify-center items-center flex-wrap">
        {solutionData.map((data) => (
          <SolutionBox key={data.id} data={data} />
        ))}
      </div>
      <div className="container flex justify-center items-center flex-wrap gap-3 md:gap-5 mt-5 lg:mt-10">
        <button className="bg-[linear-gradient(90deg,#F5CB9A_0%,#CC986C_21.06%,#CA966A_37.15%,#D19D71_51.68%,#C08A5F_68.99%,#8C4E25_100%)] px-3 md:px-4 lg:px-5 duration-500 py-2 text-sm md:text-base md:py-[10px] lg:py-3 rounded text-white -tracking-tighter hover:bg-none hover:text-white transition-all border border-[#D19A6E]">
          View Our Active Listings
        </button>

        <button className="hover:bg-[linear-gradient(90deg,#F5CB9A_0%,#CC986C_21.06%,#CA966A_37.15%,#D19D71_51.68%,#C08A5F_68.99%,#8C4E25_100%)] duration-500 px-3 md:px-4 lg:px-5 py-2 text-sm md:text-base md:py-[10px] lg:py-3 rounded text-white -tracking-tighter bg-none hover:text-white transition-all border border-[#D19A6E]">
          View Our Sold Listings
        </button>
      </div>
    </section>
  );
};

export default OurSolution;
