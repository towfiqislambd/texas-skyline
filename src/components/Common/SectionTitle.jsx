const SectionTitle = ({ title }) => {
  return (
    <div>
      <h3 className="container w-fit !bg-[#1E2225] mx-auto text-lg px-3 py-[5px] mb-4 rounded-lg border border-[#8E5027]">
        <span className="text-white"
        //  style={{
        //     background: "linear-gradient(90deg, #F5CB9A 0%, #CC986C 21.06%, #CA966A 37.15%, #D19D71 51.68%, #C08A5F 68.99%, #8C4E25 100%)",
        //     backgroundClip: "text",
        //     WebkitBackgroundClip: "text",
        //     WebkitTextFillColor: "transparent",
        // }}
        >
          {title}
        </span>
      </h3>
    </div>
  );
};

export default SectionTitle;
