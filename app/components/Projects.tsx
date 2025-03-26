import Image from "next/image";
import projectimage1 from "../Images/project-1.png";
const Projects = () => {
  return (
    <>
      <section className="flex mx-[3.5rem] my-[2.5rem] py-10 border-t-2 border-b-2 gap-40">
        <Image src={projectimage1} width={400} height={200} alt="project-1" />
        {/* min-width: 724px;
    margin-left: 170px; */}
        <div className="ml-[0.625rem] flex flex-col justify-between">
          {/* negative margin */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[2.5rem] leading-[125%] tracking-[0]">
              9,588,112
            </h4>
            <span className="text-[#777777] text-[1.75rem] leading-[125%]">
              Totallandbank
            </span>
          </div>
          <p className="text-[1rem] leading-[140%] font-[325] text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna sit amet
            consectetur adipiscing elit.
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
{
  /* <div className="flex flex-col translate-x-[-52px]"> */
  //   <section className="flex mx-[3.5rem] my-[2.5rem] py-10 border-t-2 border-b-2 gap-40">
  //   <Image src={projectimage1} width={400} height={200} alt="project-1" />
  //   {/* min-width: 724px;
  // margin-left: 170px; */}
  //   <div className="ml-[0.625rem] flex flex-col justify-between">
  //     {/* negative margin */}
  //     <div className="flex flex-col gap-3">
  //       <h4 className="text-[2.5rem] leading-[125%] tracking-[0]">
  //         9,588,112
  //       </h4>
  //       <span className="text-[#777777] text-[1.75rem] leading-[125%]">
  //         Totallandbank
  //       </span>
  //     </div>
  //     <p className="text-[1rem] leading-[140%] font-[325] text-[#000000]">
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //       eiusmod tempor incididunt ut labore et dolore magna sit amet
  //       consectetur adipiscing elit.
  //     </p>
  //   </div>
  // </section>
}
