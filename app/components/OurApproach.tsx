'use client';

import { useState } from 'react';

interface ApproachItem {
  id: string;
  number: string;
  title: string;
  content: string;
}

const approachData: ApproachItem[] = [
  {
    id: '1',
    number: '01',
    title: 'Location',
    content:
      'Location serves as the foundation upon which we curate remarkable living spaces. We rigorously evaluate each plot we choose, with a focus on accessibility, convenience, and potential for growth. Our strategic selection spans diverse areas across the city, guaranteeing you the best of every neighborhood.',
  },
  {
    id: '2',
    number: '02',
    title: 'Design',
    content:
      'Our design philosophy combines aesthetic excellence with functional efficiency. We collaborate with leading architects and designers to create spaces that reflect modern living while maintaining timeless appeal. Every detail is carefully considered to enhance your daily experience.',
  },
  {
    id: '3',
    number: '03',
    title: 'Construction',
    content:
      'We maintain the highest standards of construction quality and safety. Our team of experienced professionals ensures that every project is built to last, using premium materials and innovative construction techniques. We closely monitor each phase to deliver exceptional results.',
  },
  {
    id: '4',
    number: '04',
    title: 'End-to-End Service',
    content:
      'From initial consultation to final handover, we provide comprehensive support throughout your journey. Our dedicated team ensures a smooth and transparent process, handling all aspects of your property acquisition with utmost professionalism.',
  },
];

const OurApproach = () => {
  const [activeItem, setActiveItem] = useState('1');

  return (
    <section className='px-[3.5rem]'>
      <div className='flex flex-col md:flex-row gap-[170px]'>
        <h2 className='text-[2.5rem] text-[#777777] font-normal min-w-[400px]'>Our Approach</h2>
        <div className='space-y-6 max-w-[724px]'>
          {approachData.map(item => (
            <div key={item.id} className='border-b border-[#E5E5E5] pb-6'>
              <button
                onClick={() => setActiveItem(activeItem === item.id ? '' : item.id)}
                className='w-full flex items-center justify-between text-left group'
              >
                <div className='flex items-center gap-8'>
                  <span className='text-[1.25rem] text-black font-normal'>{item.number}</span>
                  <span className='text-[1.25rem] text-black font-normal'>{item.title}</span>
                </div>
                <span className='text-2xl text-[#000000]'>{activeItem === item.id ? '−' : '+'}</span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeItem === item.id ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className='text-[#777777] text-[1rem] leading-[150%]'>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
