export const workSlide = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/work-fleur.png',
          url: 'https://florarialafleur.ro/',
        },
        {
          title: 'title',
          path: '/work-football.png',
          url: 'https://football-blog-mu.vercel.app/',
        },
        {
          title: 'title',
          path: '/work-autopontus.png',
          url: 'https://autopontus.ro/',
        },
        {
          title: 'title',
          path: '/work-crypto.png',
          url: 'https://master-crypto.netlify.app/',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/work-aqua.png',
          url: 'https://aqua-five.vercel.app/',
        },
        {
          title: 'title',
          path: '/work-residential.png',
          url: 'https://dynamic-area.netlify.app/',
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';

const WorkSlider = () => {
  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlide.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div
                      className="flex items-center justify-center relative overflow-hidden group"
                      key={index}
                      onClick={() => handleProjectClick(image.url)}
                    >
                      <Image src={image.path} width={500} height={300} alt="" />
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#151d2db8] to-[rgba(47,85,123,0.88)] opacity-0 
                      group-hover:opacity-80 transition-all duration-700"
                      ></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
