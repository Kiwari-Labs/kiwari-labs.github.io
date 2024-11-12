export const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center flex flex-col h-screen mt-5 justify-center items-center "
      style={{
        backgroundImage: "url('/assets/bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white pb-5 pt-5 md:pt-0">
          Kiwali Labs
        </h1>
        <p className="mt-4 leading-relaxed text-center text-[#d5d3d3] px-5 mb-16 md:mb:0 md:px-0 text-sm md:text-base font-bold">
          <span className="md:text-lg font-extrabold text-white underline">
            Research
          </span>{" "}
          and{" "}
          <span className="md:text-lg font-extrabold text-white underline">
            Development
          </span>{" "}
          team focused on distributed ledger technology and smart contracts for
          enterprise-grade software solutions.
        </p>
      </div>
    </div>
  );
};
