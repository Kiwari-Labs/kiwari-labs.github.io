import { RiTokenSwapFill } from "react-icons/ri";

export const Feature = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-10 h-full md:h-svh">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white md:pt-0">
        Loyalty As A Service
      </h1>
      <p className="mt-4 leading-relaxed  text-center text-[#a2a2a2] px-5 md:px-0 text-sm md:text-base w-full md:w-4/5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 mt-5 md:mt-20">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="py-2 px-2 rounded-lg border-2 border-red-400 bg-[#f99797]">
            <RiTokenSwapFill className="w-6 h-6 md:w-10 md:h-10 text-red-700" />
          </div>
          <h3 className="font-extrabold text-lg">Lorem Ipsum</h3>
          <p className="mt-4 leading-relaxed text-[#a2a2a2] text-center px-5 md:px-0 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-5">
          <div className="py-2 px-2 rounded-lg border-2 border-red-400 bg-[#f99797]">
            <RiTokenSwapFill className="w-6 h-6 md:w-10 md:h-10 text-red-700" />
          </div>
          <h3 className="font-extrabold text-lg">Lorem Ipsum</h3>
          <p className="mt-4 leading-relaxed text-[#a2a2a2] text-center px-5 md:px-0 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-5">
          <div className="py-2 px-2 rounded-lg border-2 border-red-400 bg-[#f99797]">
            <RiTokenSwapFill className="w-6 h-6 md:w-10 md:h-10 text-red-700" />
          </div>
          <h3 className="font-extrabold text-lg">Lorem Ipsum</h3>
          <p className="mt-4 leading-relaxed text-[#a2a2a2] text-center px-5 md:px-0 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-5">
          <div className="py-2 px-2 rounded-lg border-2 border-red-400 bg-[#f99797]">
            <RiTokenSwapFill className="w-6 h-6 md:w-10 md:h-10 text-red-700" />
          </div>
          <h3 className="font-extrabold text-lg">Lorem Ipsum</h3>
          <p className="mt-4 leading-relaxed text-[#a2a2a2] text-center px-5 md:px-0 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
