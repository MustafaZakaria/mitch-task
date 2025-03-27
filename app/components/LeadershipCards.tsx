'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface LeadershipItem {
  id: number;
  name: string;
  position: string;
  image: string;
}

const leadershipData: LeadershipItem[] = [
  {
    id: 1,
    name: 'John Smith',
    position: 'Chief Executive Officer',
    image: '/leadership/leader1.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'Chief Operating Officer',
    image: '/leadership/leader2.jpg',
  },
  {
    id: 3,
    name: 'Michael Brown',
    position: 'Chief Financial Officer',
    image: '/leadership/leader3.jpg',
  },
  {
    id: 4,
    name: 'Emily Davis',
    position: 'Chief Technology Officer',
    image: '/leadership/leader4.jpg',
  },
  {
    id: 5,
    name: 'David Wilson',
    position: 'Chief Marketing Officer',
    image: '/leadership/leader5.jpg',
  },
];

const LeadershipCards = () => {
  return (
    <section className='px-[3.5rem] py-16'>
      <div className='relative'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          loop={true}
          className='!overflow-visible'
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={swiper => {
            const progressBar = document.querySelector('.leadership-progress-bar') as HTMLElement;
            if (progressBar) {
              const activeIndex = swiper.realIndex;
              const slideWidth = 100 / leadershipData.length;
              const translateX = activeIndex * slideWidth + '%';
              progressBar.style.transform = `translateX(${translateX})`;
              progressBar.style.width = `${slideWidth}%`;
            }
          }}
          onInit={swiper => {
            const progressBar = document.querySelector('.leadership-progress-bar') as HTMLElement;
            if (progressBar) {
              const slideWidth = 100 / leadershipData.length;
              progressBar.style.width = `${slideWidth}%`;
            }
          }}
        >
          {leadershipData.map(leader => (
            <SwiperSlide key={leader.id}>
              <div className='relative h-[500px] w-full overflow-hidden bg-[#F8F8F8]'>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white h-[143px] flex flex-col p-[28px] justify-center w-[95%] shadow-sm'>
                  <h3 className='text-[2rem] leading-[125%] tracking-[-0.02em] font-normal mb-2 text-[#000000]'>
                    {leader.name}
                  </h3>
                  <p className='text-[#777777] text-[1rem] leading-[125%]'>{leader.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='relative mt-8 mx-auto w-full'>
          <div className='w-full h-[2px] bg-[#E5E5E5]'></div>
          <div className='leadership-progress-bar absolute top-0 left-0 h-[2px] bg-black transition-transform duration-300 ease-in-out'></div>
        </div>

        <button
          className='swiper-button-prev !w-[48px] !h-[48px] !bg-black !rounded-full !left-[-60px] !mt-[-24px] hover:opacity-80 transition-opacity'
          aria-label='Previous slide'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='relative z-10'
          >
            <path d='M15 6L9 12L15 18' stroke='white' strokeWidth='1.5' />
          </svg>
        </button>
        <button
          className='swiper-button-next !w-[48px] !h-[48px] !bg-black !rounded-full !right-[-60px] !mt-[-24px] hover:opacity-80 transition-opacity'
          aria-label='Next slide'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='relative z-10'
          >
            <path d='M9 6L15 12L9 18' stroke='white' strokeWidth='1.5' />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default LeadershipCards;
