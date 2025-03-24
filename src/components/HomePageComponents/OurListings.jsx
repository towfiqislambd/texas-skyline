import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import 'swiper/css/navigation';
import 'swiper/css';
import SectionTitle from "../Common/SectionTitle";
import Listing from './Listing';
import { ListingArrowLeft, ListingArrowRight } from '../svgContainer/SvgContainer';

const listingData = [
    {
        id: 1,
        thumbnail: 'https://i.ibb.co.com/zhvs97yV/l3.png',
        amount: '870,000',
        title: 'Luxury family home',
        location: '25705 Dream Avenue, Houston',
        desc: 'Modern Family House, Single Family',
        extraInfo: {
            length: '1980',
            bed: '4',
            washroom: '3',
            car: '2',
            builtYear: '2016'
        }
    },
    {
        id: 2,
        thumbnail: 'https://i.ibb.co.com/JRDv4X3Y/l2.png',
        amount: '500,000',
        title: 'Luxury family home',
        location: '26705 Dream Avenue, Houston',
        desc: 'Modern Family House, Townhouse',
        extraInfo: {
            length: '1980',
            bed: '4',
            washroom: '3',
            car: '2',
            builtYear: '2016'
        }
    },
    {
        id: 3,
        thumbnail: 'https://i.ibb.co.com/9mYsK8DV/l1.png',
        amount: '870,000',
        title: 'Luxury family home',
        location: '25705 Dream Avenue, Houston',
        desc: 'Modern Family House, Single Family',
        extraInfo: {
            length: '1980',
            bed: '4',
            washroom: '3',
            car: '2',
            builtYear: '2016'
        }
    },
    {
        id: 4,
        thumbnail: 'https://i.ibb.co.com/zhvs97yV/l3.png',
        amount: '500,000',
        title: 'Luxury family home',
        location: '26705 Dream Avenue, Houston',
        desc: 'Modern Family House, Townhouse',
        extraInfo: {
            length: '1980',
            bed: '4',
            washroom: '3',
            car: '2',
            builtYear: '2016'
        }
    },
    {
        id: 5,
        thumbnail: 'https://i.ibb.co.com/JRDv4X3Y/l2.png',
        amount: '870,000',
        title: 'Luxury family home',
        location: '25705 Dream Avenue, Houston',
        desc: 'Modern Family House, Single Family',
        extraInfo: {
            length: '1980',
            bed: '4',
            washroom: '3',
            car: '2',
            builtYear: '2016'
        }
    },
    {
        id: 6,
        thumbnail: 'https://i.ibb.co.com/9mYsK8DV/l1.png',
        amount: '500,000',
        title: 'Luxury family home',
        location: '26705 Dream Avenue, Houston',
        desc: 'Modern Family House, Townhouse',
        extraInfo: {
            length: '1980',
            bed: '4',
            washroom: '3',
            car: '2',
            builtYear: '2016'
        }
    },
]

const OurListings = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section id='listing' className="bg-[#23262d] py-10 sm:py-14 md:py-20">
            <SectionTitle title='Our Listings' />
            <p className="text-center mb-14 md:mb-10 leading-tight font-semibold text-[22px] sm:text-2xl md:text-3xl xl:text-4xl container font-montserrat mx-auto text-white">
                Properties for Sale
            </p>

            <div className="container relative">
                {/* Unique navigation buttons */}
                <div className="absolute -top-10 sm:-top-12 right-5 flex gap-3 z-10">
                    <div ref={prevRef} className="our-listings-prev cursor-pointer">
                        <ListingArrowLeft />
                    </div>
                    <div ref={nextRef} className="our-listings-next cursor-pointer">
                        <ListingArrowRight />
                    </div>
                </div>

                <div className="pt-5 md:px-7 lg:px-10 xl:px-16 2xl:px-0">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
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
                            1536: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                        }}
                    >
                        {listingData.map(data => (
                            <SwiperSlide key={data.id}>
                                <Listing data={data} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default OurListings;