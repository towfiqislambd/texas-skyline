import SectionTitle from '../Common/SectionTitle';
import s1 from '../../assets/home/s1.png';
import s2 from '../../assets/home/s2.png';
import s3 from '../../assets/home/s3.png';
import { FaArrowRightLong } from 'react-icons/fa6';

const Service = () => {
  return (
    <section className="bg-[#23262d] text-center py-10 sm:py-14 md:py-20">
      <SectionTitle title="Our Services"></SectionTitle>
      <p className="max-w-[480px] mb-10 leading-tight font-semibold text-[22px] sm:text-2xl md:text-3xl xl:text-4xl container font-montserrat mx-auto text-white">
        Unmatched
        <span
        // style={{
        //     background: "linear-gradient(90deg, #F5CB9A 0%, #CC986C 21.06%, #CA966A 37.15%, #D19D71 51.68%, #C08A5F 68.99%, #8C4E25 100%)",
        //     backgroundClip: "text",
        //     WebkitBackgroundClip: "text",
        //     WebkitTextFillColor: "transparent",
        // }}
        >
          {' '}
          Expertise.
        </span>{' '}
        Tailored Service.
      </p>
      <div className="container">
        <div className="md:px-7 lg:px-10 xl:px-16 2xl:px-0 grid md:grid-cols-3 gap-5">
          {/* box 1 */}
          <div
            style={{
              backgroundImage: `url(${s1})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              objectFit: 'cover',
            }}
            className="py-16 lg:py-24 2xl:py-32 px-5 2xl:px-20 rounded-lg"
          >
            <h3
              style={{
                background:
                  'linear-gradient(90deg, #F5CB9A 0%, #CC986C 21.06%, #CA966A 37.15%, #D19D71 51.68%, #C08A5F 68.99%, #8C4E25 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="font-semibold font-montserrat text-3xl lg:text-4xl"
            >
              Buy
            </h3>
            <p className="text-white lg:text-lg pt-3 pb-5 lg:pb-6">
              Search, compare and select homes.
            </p>
            <button className="px-3 lg:px-5 text-sm xl:text-base uppercase py-2 lg:py-[10px] duration-500 hover:bg-white hover:text-black rounded text-white border border-white justify-center hover:scale-110 transition-all inline-flex gap-2 items-center">
              <span>Explore More</span>
              <FaArrowRightLong className="text-lg" />
            </button>
          </div>
          {/* box 2 */}
          <div
            style={{
              backgroundImage: `url(${s2})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              objectFit: 'cover',
            }}
            className="py-16 lg:py-24 2xl:py-32 px-5 2xl:px-20 rounded-lg"
          >
            <h3
              style={{
                background:
                  'linear-gradient(90deg, #F5CB9A 0%, #CC986C 21.06%, #CA966A 37.15%, #D19D71 51.68%, #C08A5F 68.99%, #8C4E25 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="font-semibold font-montserrat text-3xl lg:text-4xl"
            >
              Sell
            </h3>
            <p className="text-white lg:text-lg pt-3 pb-5 lg:pb-6">
              Get your Comparative Market Analysis.
            </p>
            <button className="px-3 lg:px-5 text-sm xl:text-base uppercase py-2 lg:py-[10px] duration-500 hover:bg-white hover:text-black rounded text-white border border-white justify-center hover:scale-110 transition-all inline-flex gap-2 items-center">
              <span>GET VALUATION</span>
              <FaArrowRightLong className="text-lg" />
            </button>
          </div>
          {/* box 3 */}
          <div
            style={{
              backgroundImage: `url(${s3})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              objectFit: 'cover',
            }}
            className="py-16 lg:py-24 2xl:py-32 px-5 2xl:px-20 rounded-lg"
          >
            <h3
              style={{
                background:
                  'linear-gradient(90deg, #F5CB9A 0%, #CC986C 21.06%, #CA966A 37.15%, #D19D71 51.68%, #C08A5F 68.99%, #8C4E25 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="font-semibold font-montserrat text-3xl lg:text-4xl"
            >
              Join
            </h3>
            <p className="text-white lg:text-lg pt-3 pb-5 lg:pb-6">
              Contact us today with questions.
            </p>
            <button className="px-3 lg:px-5 text-sm xl:text-base uppercase py-2 lg:py-[10px] duration-500 hover:bg-white hover:text-black rounded text-white border border-white justify-center hover:scale-110 transition-all inline-flex gap-2 items-center">
              <span>CONTACT US</span>
              <FaArrowRightLong className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
