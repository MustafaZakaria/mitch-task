import Image from 'next/image';
import projectimage1 from '../Images/project-1.png';

interface ProjectData {
  id: number;
  image: any;
  number: string;
  title: string;
  description: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    image: projectimage1,
    number: '9,588,112',
    title: 'Total landbank',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.',
  },
  {
    id: 2,
    image: projectimage1,
    number: '8',
    title: 'Projects',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.',
  },
  {
    id: 3,
    image: projectimage1,
    number: '60',
    title: 'Years of operation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.',
  },
];

const Projects = () => {
  return (
    <div className='flex flex-col divide-y-2'>
      {projectsData.map((project, index) => (
        <section key={project.id} className='flex flex-col md:flex-row px-[3.5rem] py-16 gap-[170px] items-center'>
          <div className='min-w-[400px]'>
            <Image
              src={project.image}
              width={400}
              height={250}
              alt={`project-${project.id}`}
              className='object-cover rounded-sm'
            />
          </div>
          <div className='flex flex-col justify-between gap-8 max-w-[724px]'>
            <div className='flex flex-col gap-2'>
              <h4 className='text-[2.5rem] text-[#000000] leading-[125%] tracking-[-0.02em] font-normal'>
                {project.number}
              </h4>
              <span className='text-[#777777] text-[1.75rem] leading-[125%] font-normal'>{project.title}</span>
            </div>
            <p className='text-[1rem] leading-[140%] font-[325] text-[#000000] opacity-80'>{project.description}</p>
          </div>
        </section>
      ))}
    </div>
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
