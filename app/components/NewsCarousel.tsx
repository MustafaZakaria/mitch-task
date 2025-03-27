'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// Images
import img1 from '../Images/seashell.png';
import img2 from '../Images/building.png';

const carouselData = [
  {
    id: 1,
    title: 'G Developments launches Seashell Ras El Hekma',
    subtitle: 'News – May 2024',
    description: 'The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.',
    image: img1,
  },
  {
    id: 2,
    title: 'G Developments launches Seashell Ras El Hekma',
    subtitle: 'News – May 2024',
    description: 'The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.',
    image: img2,
  },
  {
    id: 2,
    title: 'G Developments launches Seashell Ras El Hekma',
    subtitle: 'News – May 2024',
    description: 'The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.',
    image: img2,
  },
];

const NewsCarousel = () => {
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
          slidesPerView={2}
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
            768: { slidesPerView: 2 },
          }}
          watchOverflow={false}
        >
          {carouselData.map(item => (
            <SwiperSlide key={item.id}>
              <div className='bg-white shadow-md'>
                <div className='relative w-full h-[300px] overflow-hidden'>
                  <Image src={item.image} alt={item.title} className='object-cover' />
                </div>
                <div className='p-6'>
                  <p className='text-sm text-gray-500 mb-1'>{item.subtitle}</p>
                  <h3 className='text-xl font-semibold text-black mb-2 leading-tight'>{item.title}</h3>
                  <p className='text-gray-700 text-sm leading-snug'>{item.description}</p>
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

export default NewsCarousel;
