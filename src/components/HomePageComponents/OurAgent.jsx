import SectionTitle from "../Common/SectionTitle";
import Agent from "./Agent";
const testimonialsData = [
    {
        id: 1,
        author_img: 'https://i.ibb.co.com/Pv4fGSSx/author.png',
        author_name: 'ashleyd_realtor',
        isVerified: true,
        thumbnail: 'https://i.ibb.co.com/fGQVsmHf/a1.png',
    },
    {
        id: 2,
        author_img: 'https://i.ibb.co.com/Pv4fGSSx/author.png',
        author_name: 'ashleyd_realtor',
        isVerified: false,
        thumbnail: 'https://i.ibb.co.com/fY3wwjjF/a2.png',
    },
    {
        id: 3,
        author_img: 'https://i.ibb.co.com/Pv4fGSSx/author.png',
        author_name: 'ashleyd_realtor',
        isVerified: true,
        thumbnail: 'https://i.ibb.co.com/SX7dHJRK/a3.png',
    },
    {
        id: 4,
        author_img: 'https://i.ibb.co.com/Pv4fGSSx/author.png',
        author_name: 'ashleyd_realtor',
        isVerified: false,
        thumbnail: 'https://i.ibb.co.com/Q3VnnTct/a4.png',
    },
    {
        id: 5,
        author_img: 'https://i.ibb.co.com/Pv4fGSSx/author.png',
        author_name: 'ashleyd_realtor',
        isVerified: true,
        thumbnail: 'https://i.ibb.co.com/Cp357wN0/a5.png',
    },
    {
        id: 6,
        author_img: 'https://i.ibb.co.com/Pv4fGSSx/author.png',
        author_name: 'ashleyd_realtor',
        isVerified: true,
        thumbnail: 'https://i.ibb.co.com/CKFJ0K6B/a6.png',
    },
    {
        id: 7,
        author_img: 'https://i.ibb.co.com/Pv4fGSSx/author.png',
        author_name: 'ashleyd_realtor',
        isVerified: true,
        thumbnail: 'https://i.ibb.co.com/fGQVsmHf/a1.png',
    },
    {
        id: 8,
        author_img: 'https://i.ibb.co.com/Pv4fGSSx/author.png',
        author_name: 'ashleyd_realtor',
        isVerified: false,
        thumbnail: 'https://i.ibb.co.com/fY3wwjjF/a2.png',
    },
    {
        id: 9,
        author_img: 'https://i.ibb.co.com/Pv4fGSSx/author.png',
        author_name: 'ashleyd_realtor',
        isVerified: true,
        thumbnail: 'https://i.ibb.co.com/SX7dHJRK/a3.png',
    },
    {
        id: 10,
        author_img: 'https://i.ibb.co.com/Pv4fGSSx/author.png',
        author_name: 'ashleyd_realtor',
        isVerified: false,
        thumbnail: 'https://i.ibb.co.com/Q3VnnTct/a4.png',
    },
]

const OurAgent = () => {
    return (
        <section className="bg-[#23262d] py-10 sm:py-16">
            <SectionTitle title='Our Agents'></SectionTitle>
            <p className="max-w-[578px] text-center mb-10 md:mb-12 leading-tight font-semibold text-[22px] sm:text-2xl md:text-3xl xl:text-4xl container font-montserrat mx-auto text-white">Wall of Our Real Estate Experts</p>

            <div className="container md:px-7 lg:px-10 xl:px-16 2xl:px-0 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-14">
                {
                    testimonialsData.map(data => <Agent key={data.id} data={data} />)
                }
            </div>
        </section>
    );
};

export default OurAgent;