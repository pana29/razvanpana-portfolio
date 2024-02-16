import ServiceSlider from '../../components/ServiceSlider';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainerAll from '../../components/ParticlesContainerAll';

const Services = () => {
  return (
    <div className="h-full bg-alt/60 py-36 flex items-center">
      <div className="container mx-auto">
        <div>
          <ParticlesContainerAll />
        </div>
        <div className="flex  flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hiddem"
              className="h2 xl:mt-8"
            >
              Digital excellence <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hiddem"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Focusing on enhancing digital presence, I bring a holistic
              approach to web development and design. My work is aimed at
              creating accessible, efficient, and visually compelling digital
              experiences.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hiddem"
            className="w-full xl:max-w-[65%] "
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
