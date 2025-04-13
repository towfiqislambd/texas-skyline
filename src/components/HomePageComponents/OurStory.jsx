import aboutUs from "../../assets/home/aboutUs.png"
import { AboutUsOne, AboutUsThree, AboutUsTwo } from "../svgContainer/SvgContainer";

const OurStory = () => {
    return (
        <section id="about" className="py-10 sm:py-14 md:py-20 bg-[#20232B]">
            <div className="container">
                <div className="md:px-7 lg:px-10 xl:px-16 2xl:px-0 grid lg:grid-cols-12 gap-7 sm:gap-10 2xl:gap-16 items-center">
                    <div className="lg:col-span-5">
                        <img src={aboutUs} alt="aboutUs" className="w-full object-cover h-[280px] md:h-[400px] lg:h-[600px] xl:h-[766px] rounded-lg" />
                    </div>
                    <div className="lg:col-span-7">
                        <h3
                            // style={{
                            //     background: "linear-gradient(90deg, #F5CB9A 0%, #CC986C 21.06%, #CA966A 37.15%, #D19D71 51.68%, #C08A5F 68.99%, #8C4E25 100%)",
                            //     backgroundClip: "text",
                            //     WebkitBackgroundClip: "text",
                            //     WebkitTextFillColor: "transparent",
                            // }}
                            className="w-fit text-white text-lg px-3 py-[5px] mb-4 rounded-lg border border-[#8E5027]">About Us</h3>
                        <p className="mb-3 xl:mb-7 leading-tight font-semibold text-2xl md:text-3xl xl:text-4xl font-montserrat mx-auto text-white">Read Our Story</p>
                        <div className="space-y-3 xl:space-y-5 text-[#BDBDBD] xl:text-lg mb-5 xl:mb-8">
                            <p>When working with Texas Skyline Properties, our clients place their trust in their real estate agent to provide them with a motivated, knowledgeable, and professional guide throughout the complex and time-sensitive process of buying or selling a home. </p>
                            <p>This begins at the first consultation, continues throughout the process, and more often than not results in a meaningful business relationship for many years to come. You can trust that our team of real estate agents will attentively listen to your requirements and provide unparalleled services.</p>
                            <p>At Texas Skyline Real Estate, we hold a deep commitment to integrity and fostering meaningful relationships with our clients to deliver unparalleled service. When you entrust a Texas Skyline Agent to represent you in a real estate transaction, you can be assured that they are bound to act as a fiduciaries for you. This means that they have a legal and moral duty to prioritize your interests above their own. It’s important for you to know that your agent is committed to serving your needs and ensuring that you have a positive experience throughout the process.</p>
                        </div>
                        <div className="space-y-3 xl:space-y-4">
                            <p className="flex gap-2 items-center">
                                <div className="flex-shrink-0">
                                    <AboutUsOne />
                                </div>
                                <span className="text-[#BDBDBD]">Address: 1923 Washington Ave., Ste. 2041, Houston, TX 77007</span>
                            </p>
                            <p className="flex gap-2 items-center">
                                <div className="flex-shrink-0">
                                    <AboutUsTwo />
                                </div>
                                <span className="text-[#BDBDBD]">Phone Number: (713) 232 9770</span>
                            </p>
                            <p className="flex gap-2 items-center">
                                <div className="flex-shrink-0">
                                    <AboutUsThree />
                                </div>
                                <span className="text-[#BDBDBD]">Email: info@txskyline.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;