const OurStory = () => {
  return (
    <section className='flex flex-col md:flex-row px-[3.5rem] py-16'>
      <div className='min-w-[400px] mr-[170px]'>
        <h3 className='text-[1.75rem] text-[#777777] leading-[125%]'>Our Story</h3>
      </div>
      <div className='max-w-[724px]'>
        <p className='text-[2.5rem] text-[#000000] leading-[125%] tracking-[-0.02em]'>
          We are a family-owned real estate
          <br /> development company based in Egypt.
          <br />
          Since 1955, we have been committed to
          <br /> delivering timeless, quality developments
          <br /> that epitomize comfort and functionality.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
