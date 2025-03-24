import SectionTitle from "../Common/SectionTitle";
import testimonial from "../../assets/home/testimonial.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import Testimonial from "./Testimonial";
const testimonialData = [
    {
        id: 1,
        title: 'An exceptional experience from start to finish!',
        desc: 'Over all the experience was great. I mean home buying is a little stressful. This was our first home purchased and it was a HUD home, so there were certain deadlines we had to meet, but Jennifer was great at calling us days ahead to let us know what the next steps were.',
        author_name: 'E. Salinas',
        author_location: 'Dallas, Texas'
    },
    {
        id: 2,
        title: 'An exceptional experience from start to finish!',
        desc: 'Over all the experience was great. I mean home buying is a little stressful. This was our first home purchased and it was a HUD home, so there were certain deadlines we had to meet, but Jennifer was great at calling us days ahead to let us know what the next steps were.',
        author_name: 'E. Salinas',
        author_location: 'Dallas, Texas'
    },
    {
        id: 3,
        title: 'An exceptional experience from start to finish!',
        desc: 'Over all the experience was great. I mean home buying is a little stressful. This was our first home purchased and it was a HUD home, so there were certain deadlines we had to meet, but Jennifer was great at calling us days ahead to let us know what the next steps were.',
        author_name: 'E. Salinas',
        author_location: 'Dallas, Texas'
    },
    {
        id: 4,
        title: 'An exceptional experience from start to finish!',
        desc: 'Over all the experience was great. I mean home buying is a little stressful. This was our first home purchased and it was a HUD home, so there were certain deadlines we had to meet, but Jennifer was great at calling us days ahead to let us know what the next steps were.',
        author_name: 'E. Salinas',
        author_location: 'Dallas, Texas'
    },
    {
        id: 5,
        title: 'An exceptional experience from start to finish!',
        desc: 'Over all the experience was great. I mean home buying is a little stressful. This was our first home purchased and it was a HUD home, so there were certain deadlines we had to meet, but Jennifer was great at calling us days ahead to let us know what the next steps were.',
        author_name: 'E. Salinas',
        author_location: 'Dallas, Texas'
    },
]

const Testimonials = () => {
    return (
        <section
            id="testimonial"
            style={{
                backgroundImage: `url(${testimonial})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                objectFit: 'cover'
            }}
            className="py-10 sm:py-14 md:py-20"
        >
            <SectionTitle title='Testimonials'></SectionTitle>
            <p className="max-w-[544px] text-center mb-8 md:mb-12 leading-tight font-semibold text-[22px] sm:text-2xl md:text-3xl xl:text-4xl container font-montserrat mx-auto text-white">Real Stories from Our Happy Clients</p>

            {/* Swiper Slider here... */}
            <div className="container">
                <div className="md:px-7 lg:px-10 xl:px-16 2xl:px-0">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                        }}
                    >
                        {
                            testimonialData.map(data => <SwiperSlide>
                                <Testimonial key={data.id} data={data} />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;