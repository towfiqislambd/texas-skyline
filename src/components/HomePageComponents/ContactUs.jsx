import SectionTitle from "../Common/SectionTitle";
import contact from "../../assets/home/contact.png"
import { AboutUsOne, AboutUsThree, AboutUsTwo } from "../svgContainer/SvgContainer";
import Swal from "sweetalert2";

const ContactUs = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            "Full Name": e.target.name.value,
            Email: e.target.email.value,
            "Phone Number": e.target.phone.value,
            Message: e.target.message.value
        }
        fetch('', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok === true) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your email has been recorded",
                        showConfirmButton: false,
                        timer: 2000
                    })
                    e.target.reset()
                }
            })
    }
    return (
        <section id="contact" className="py-10 sm:py-14 md:py-20 bg-[#1E2225]">
            <SectionTitle title='Contact Us'></SectionTitle>
            <p className="text-center mb-8 sm:mb-10 md:mb-12 leading-tight font-semibold text-[22px] sm:text-2xl md:text-3xl xl:text-4xl container font-montserrat mx-auto text-white">Follow and Contact with Us</p>

            <div className="container md:px-7 lg:px-10 xl:px-16 2xl:px-0 grid md:grid-cols-12 gap-8 xl:gap-12">
                <div className="md:col-span-5">
                    <figure className="w-full mb-7 h-[280px] sm:h-[300px] md:h-[388px]">
                        <img src={contact} alt="" className="w-full object-cover h-full rounded-lg" />
                    </figure>
                    <div className="space-y-4">
                        <p className="flex gap-2 items-center">
                            <AboutUsOne />
                            <span className="text-[#BDBDBD]">Address: 1923 Washington Ave., Ste. 2041, Houston, TX 77007</span>
                        </p>
                        <p className="flex gap-2 items-center">
                            <AboutUsTwo />
                            <span className="text-[#BDBDBD]">Phone Number: (713) 232 9770</span>
                        </p>
                        <p className="flex gap-2 items-center">
                            <AboutUsThree />
                            <span className="text-[#BDBDBD]">Email: info@txskyline.com</span>
                        </p>
                    </div>
                </div>
                <div className="md:col-span-7">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <input name="name" type="text" className="px-3 sm:px-5 py-2 sm:py-4 outline-none border placeholder:text-[#505050] text-gray-300 rounded block w-full !bg-transparent border-[#505050]" placeholder="Write your name" required />
                        <input name="email" type="email" className="px-3 sm:px-5 py-2 sm:py-4 outline-none border placeholder:text-[#505050] text-gray-300 rounded block w-full !bg-transparent border-[#505050]" placeholder="Email address" required />
                        <input name="phone" type="tel" className="px-3 sm:px-5 py-2 sm:py-4 outline-none border placeholder:text-[#505050] text-gray-300 rounded block w-full !bg-transparent border-[#505050]" placeholder="Phone number" required />
                        <select name="Select Home" className="px-3 sm:px-5 py-2 sm:py-4 outline-none border placeholder:text-[#505050] text-gray-500 rounded block w-full !bg-transparent border-[#505050]">
                            <option value="">Buying a home?</option>
                            <option value="">Home 2</option>
                            <option value="">Home 3</option>
                            <option value="">Home 4</option>
                        </select>
                        <textarea name="message" rows={5} className="px-3 sm:px-5 py-2 sm:py-4 outline-none border placeholder:text-[#505050] text-gray-300 rounded block w-full !bg-transparent border-[#505050]" placeholder="Write anything" required></textarea>
                        <button className="px-3 hover:scale-105 transition-transform duration-300 sm:px-7 py-2 sm:py-3 rounded text-white bg-[linear-gradient(90deg,#F5CB9A_0%,#CC986C_21.06%,#CA966A_37.15%,#D19D71_51.68%,#C08A5F_68.99%,#8C4E25_100%)]">Submit here</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;