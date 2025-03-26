import Image from "next/image";
import image1 from "../Images/background-image.png";
import PrimaryLogo from "../Icons/PrimaryLogo";
import GlobeIcon from "../Icons/GlobeIcon";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        alt="hero background"
        src={image1}
        fill
        className="object-cover z-0"
        quality={100}
        priority
      />

      {/* Optional Overlay */}
      {/* <div className="absolute inset-0 bg-black/40 z-5"></div> */}

      {/* Content Layer */}
      <div className="relative z-10 text-white flex flex-col justify-center h-full">
        {/* Navbar with Equal Left & Right Padding (56px) */}
        <nav className="absolute top-0 left-0 w-full h-[6.25rem] px-[3.5rem] flex justify-between items-center">
          {/* Logo */}
          <div className="logo font-bold text-xl">
            <PrimaryLogo />
          </div>

          {/* Navigation Menu */}
          <ul className="flex items-center gap-[0.75rem] h-[3rem] w-[33.0625rem] box-border">
            {/* Our Communities */}
            <li className="flex items-center justify-center cursor-pointer hover:shadow-[0_0_0_0.0625rem_#ffffff] hover:rounded-[6.25rem] w-[9.6875rem] h-[2.25rem] px-[0.75rem] py-[0.375rem]">
              Our Communities
            </li>

            {/* Latest Updates */}
            <li className="flex items-center justify-center cursor-pointer hover:shadow-[0_0_0_0.0625rem_#ffffff] hover:rounded-[6.25rem] w-[8.625rem] h-[2.25rem] px-[0.75rem] py-[0.375rem]">
              Latest Updates
            </li>

            {/* العربية + Globe Icon */}
            <li className="cursor-pointer flex items-center group relative w-[4.0625rem] h-[1.4375rem]">
              <div className="flex items-center gap-[0.125rem] relative">
                <span>العربية</span>
                <GlobeIcon />
                {/* Underline now directly under this div */}
                <div className="absolute bottom-[1px] left-0 w-full h-[0.125rem] bg-[#cdcdcd] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </li>

            {/* Get In Touch Button */}
            <li>
              <button className="bg-[#FFFFFF] text-[#000000] hover:bg-[#cdcdcd] rounded-[6.25rem] w-[8.4375rem] h-[3rem] px-[1.25rem] py-[0.75rem]">
                Get In Touch
              </button>
            </li>
          </ul>
        </nav>

        {/* Hero Content - Aligned to Logo & Below Navbar */}
        {/* Hero Content - Aligned to Logo & Below Navbar */}
        <section className="w-[59.75rem] h-[15.25rem] flex flex-col gap-[1.5rem] pl-[3.5rem] mt-[16rem] mb-[6.25rem]">
          <h2 className="text-[7.5rem] font-medium leading-[125%] ">
            About Us
          </h2>
          <p className="text-[1.75rem] font-medium leading-[125%] ">
            Real Estate developer blending timeless <br />
            design with comfortable living.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Hero;
