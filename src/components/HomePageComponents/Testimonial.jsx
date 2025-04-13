const Testimonial = ({ data }) => {
    return (
        <div id="testimonial" className="bg-black/40 p-6 md:p-8 rounded-xl border border-[#8f4f2464]">
            <blockquote className="text-[#F9D0A0] text-xl md:text-2xl mb-3">{data.title}</blockquote>
            <p className="text-[#EAEAEA] mb-4">"{data.desc}"</p>
            <p className="text-gray-200 md:text-lg font-medium">{data.author_name}</p>
            <p className="text-[#BDBDBD]">{data.author_location}</p>
        </div>
    );
};

export default Testimonial;