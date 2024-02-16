import React, { useState } from 'react';
import ParticlesContainerAll from '../../components/ParticlesContainerAll';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaYoast,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobephotoshop,
  SiMysql,
  SiMongodb,
  SiPhp,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTypescript />,
          <SiFramer />,
          <SiTailwindcss />,
          <SiPhp />,
          <FaWordpress />,
        ],
      },
      {
        title: 'Database',
        icons: [<SiMysql />, <SiMongodb />],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
      {
        title: 'SEO',
        icons: [<FaYoast />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Web Developer - Freelancer Independent',
        stage: '2022 - 2024',
        desc: 'Website and platform development and maintenance.',
      },
      {
        title: 'Business Owner - La Fleur Constanta',
        stage: '2016 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'SQL Database - Telecom Academy Romania',
        stage: '2024',
      },
      {
        title: 'JavaScript From Scratch - Software Development Academy ',
        stage: '2022',
      },
    ],
  },
  {
    title: 'studies',
    info: [
      {
        title: 'Titu Maiorescu University - Computer Science',
        stage: '2023-2025',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-alt/60 from-alt/150  py-40 text-center xl:text-left">
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-8 -left-[390px] "
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
        <div className="flex-1 flex flex-col justify-center lg:pb-20">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 className='lg:text-4xl text-4xl"
          >
            Dive into my
            <span className="text-accent"> world</span> of digital creativity.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[700px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-[12px] md:text-xl"
          >
            Passionate about mastering new skills through hard work, I excel in
            detail-oriented and organized teamwork. With strong communication
            and innovative thinking, I contribute effectively to any group. My
            technical skills, combined with interpersonal abilities, drive me to
            positively impact people and organizations, always eager to embrace
            growth and challenges in the IT field.
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          ></motion.div>
        </div>
        <div>
          <ParticlesContainerAll />
        </div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                   after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-3">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
