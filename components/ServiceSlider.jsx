import { Swiper, SwiperSlide } from 'swiper/react';
import { FiDatabase } from 'react-icons/fi';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Creating innovative apps for modern challenges.',
  },
  {
    icon: <FiDatabase />,
    title: 'Database',
    description: 'Streamlining data structures for peak performance.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creating visually appealing and user-friendly interfaces.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Maximizing web visibility with effective SEO strategies',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Crafting compelling, engaging content for audiences.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(64,78,99,0.08)] h-[160px] md:h-[270px] rounded-lg px-3 py-5 lg:px-6 lg:py-8 flex sm:flex-col gap-x-6 sm:gap-x-0
             group cursor-pointer hover:bg-[rgba(47,85,123,0.15)] transition-all duration-300"
            >
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8 ">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
