'use client';

import Link from 'next/link';

const GetInTouch = () => {
  return (
    <section className='w-full bg-[#EAEAEA] py-24'>
      <div className='container mx-auto px-4  flex flex-col md:flex-row justify-between items-start md:items-center'>
        <h2 className='text-[2.5rem] text-[#000000] leading-[120%] max-w-[600px]'>
          Are you interested in a property or have any other inquiries?
        </h2>
        <Link
          href='/contact'
          className='bg-black text-white px-8 py-4 mt-4 md:mt-0 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2'
        >
          Get in touch
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='relative top-[1px]'
          >
            <path
              d='M5 12H19M19 12L12 5M19 12L12 19'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default GetInTouch;
