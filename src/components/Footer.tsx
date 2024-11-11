import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-auto w-full h-full py-4 bg-[#1c1c1c] rounded-t-3xl">
      <div className="flex flex-col w-full items-center py-10">
        <h2 className="text-2xl md:text-5xl font-extrabold text-center">
          Ready to get started?
        </h2>
        <p className="text-sm md:text-lg text-center leading-relaxed md:first-letter w-full px-5 md:px-0 md:w-1/2 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
      </div>
      <div className="flex justify-center w-full">
        <Link href={"https://github.com/Kiwari-Labs"}>
          <Image
            src="/assets/github.png"
            alt="Faq image"
            width={25}
            height={25}
          />
        </Link>
      </div>
    </footer>
  );
};
