import WorkSlider from '../../components/WorkSlider';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainerAll from '../../components/ParticlesContainerAll';

const Work = () => {
  return (
    <div className="h-full bg-alt/60 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex  flex-col xl:flex-row gap-x-8">
          <div>
            <ParticlesContainerAll />
          </div>
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hiddem"
              className="lg:h2 text-2xl mb-10 xl:mt-12  mt-20"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hiddem"
              className="mb-4 max-w-[400px] text-sm lg:text-base mx-auto lg:mx-0"
            >
              Dive into my selected projects, reflecting my dedication to tech
              excellence and design innovation.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hiddem"
            className="w-full xl:max-w-[65%] "
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
