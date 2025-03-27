'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// Images
import akramImage from '../Images/akram.png';
import ahmedImage from '../Images/ahmed.png';
import monaImage from '../Images/mona.png';
import personalImage from '../Images/personal.png';
const leadershipData = [
  {
    id: 1,
    name: 'Akram Ziyad',
    position: 'Vice President - Strategy',
    image: akramImage,
  },
  {
    id: 2,
    name: 'Ahmed Khaled',
    position: 'Vice President - Real Estate',
    image: ahmedImage,
  },
  {
    id: 3,
    name: 'Mona Wael',
    position: 'Head of People',
    image: monaImage,
  },
  {
    id: 4,
    name: 'Personal',
    position: 'Subtitle',
    image: personalImage,
  },
];

const LeadershipCarousel = () => {
  const swiperRef = useRef<SwiperType>();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== 'boolean'
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className='relative px-6 py-16 overflow-hidden'>
      <div className='max-w-screen-xl mx-auto relative'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          onBeforeInit={swiper => {
            swiperRef.current = swiper;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='overflow-hidden' // Important fix!
          watchOverflow={false}
        >
          {leadershipData.map(leader => (
            <SwiperSlide key={leader.id}>
              <div className='bg-white shadow-md'>
                <div className='relative w-full h-[347px] bg-[#F8F8F8]'>
                  <Image src={leader.image} alt={leader.name} fill className='object-contain' />
                </div>
                <div className='p-6'>
                  <h3 className='text-[2rem] font-semibold text-black mb-2 leading-[125%]'>{leader.name}</h3>
                  <p className='text-[#777777] text-[1rem] leading-[125%]'>{leader.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <button
          ref={prevRef}
          className='carousel-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white'
          aria-label='Previous slide'
        >
          <svg width='20' height='20' fill='none' viewBox='0 0 24 24'>
            <path d='M15 6L9 12L15 18' stroke='white' strokeWidth='1.5' />
          </svg>
        </button>
        <button
          ref={nextRef}
          className='carousel-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white'
          aria-label='Next slide'
        >
          <svg width='20' height='20' fill='none' viewBox='0 0 24 24'>
            <path d='M9 6L15 12L9 18' stroke='white' strokeWidth='1.5' />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default LeadershipCarousel;
