import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import SectionTitle from "../Common/SectionTitle";
import { useRef } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { ListingArrowLeft, ListingArrowRight } from '../svgContainer/SvgContainer';
const neighbourhoodsData = [
    {
        id: 1,
        thumbnail: 'https://i.ibb.co.com/gFy9VHyM/n1.png',
        title: 'Katy',
    },
    {
        id: 2,
        thumbnail: 'https://i.ibb.co.com/Z6jgTbkP/n2.png',
        title: 'Pearland',
    },
    {
        id: 3,
        thumbnail: 'https://i.ibb.co.com/wZ4cVs7F/n3.png',
        title: 'Cypress',
    },
    {
        id: 4,
        thumbnail: 'https://i.ibb.co.com/3yhygLjb/n4.png',
        title: 'Austin',
    },
    {
        id: 5,
        thumbnail: 'https://i.ibb.co.com/gFy9VHyM/n1.png',
        title: 'Katy',
    },
    {
        id: 6,
        thumbnail: 'https://i.ibb.co.com/Z6jgTbkP/n2.png',
        title: 'Pearland',
    },
]

const Neighborhoods = () => {
    const previousRef = useRef(null);
    const newRef = useRef(null);
    return (
        <section id='Neighborhoods' className="bg-[#23262d] py-10 sm:py-14 md:py-20 xl:py-24">
            <SectionTitle title='Neighborhoods'></SectionTitle>
            <p className="max-w-[578px] text-center mb-20 md:mb-10 xl:mb-16 leading-tight font-semibold text-[22px] sm:text-2xl md:text-3xl xl:text-4xl container font-montserrat mx-auto text-white">Search our interactive map for active listings</p>

            {/* Swiper Slider here... */}
            <div className="container relative">
                <div className="absolute -top-16 right-5 flex gap-3 z-10">
                    <div ref={previousRef} className="our-listings-prev cursor-pointer">
                        <ListingArrowLeft />
                    </div>
                    <div ref={newRef} className="our-listings-next cursor-pointer">
                        <ListingArrowRight />
                    </div>
                </div>
                <div className="md:px-7 lg:px-10 xl:px-16 2xl:px-0">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{ prevEl: previousRef.current, nextEl: newRef.current }}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = previousRef.current;
                                swiper.params.navigation.nextEl = newRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                        }}
                    >
                        {
                            neighbourhoodsData.map(data => <SwiperSlide key={data.id}>
                                <div className="relative overflow-hidden h-[300px] md:h-[380px] xl:h-[450px] rounded-lg group">
                                    <img src={data.thumbnail} alt="thumbnail" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                                    <h3 className='text-white font-medium text-2xl absolute bottom-3 left-1/2 -translate-x-1/2'>{data.title}</h3>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Neighborhoods;