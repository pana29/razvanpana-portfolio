import ParticlesContainer from '../components/ParticlesContainer';
import Cv from '../components/Cv';
import ContactMe from '../components/ContactMe';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-alt/60 h-full relative">
      <div className="w-full h-full bg-gradient-to-r from-alt/30 via-black/80 to-black/100">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hiden"
            className="h1"
          >
            Hi, my name is <br />{' '}
            <span className="text-accent">Razvan Pana</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hiden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8"
          >
            Passionate about web development, I specialize in creating dynamic
            websites, integrating databases, optimizing for SEO, and crafting
            visual designs. My goal is to boost your digital presence through
            effective, accessible, and visually appealing solutions.
          </motion.p>
          <div className="flex justify-center xl:hidden relative"></div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hiden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8"
          >
            <div className="flex gap-5 absolute z-10 justify-center left-0 right-0 xl:left-auto xl:right-auto">
              <Cv />
              <ContactMe />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-cover xl:bg-abstract xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-40"></div>
        <div>
          <ParticlesContainer />
        </div>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:-bottom-48 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

