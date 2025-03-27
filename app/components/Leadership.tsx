'use client';

import LeadershipCarousel from './LeadershipCarousel';

const Leadership = () => {
  return (
    <>
      <section className='flex flex-col md:flex-row px-[3.5rem] py-16'>
        <div className='min-w-[400px] mr-[170px]'>
          <h2 className='text-[2rem] leading-[125%] tracking-[-0.02em] text-[#000000] font-normal'>Leadership</h2>
        </div>
        <div className='max-w-[724px]'>
          <p className='text-[3.5rem] leading-[125%] tracking-[-0.02em] text-[#000000] font-normal'>
            We aim to innovate and listen closely to our customers to provide them with the best customer experience in
            every aspect.
          </p>
        </div>
      </section>
      <LeadershipCarousel />
    </>
  );
};

export default Leadership;
