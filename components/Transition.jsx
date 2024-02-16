import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};
const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#151d2d]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#151d2db8]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#151d2d86]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
      ></motion.div>
    </>
  );
};

export default Transition;

// import { motion } from 'framer-motion';
// import PropTypes from 'prop-types'; // Adăugat pentru verificarea tipurilor

// // Variante animate mai detaliate și creative
// const transitionVariants = {
//   initial: {
//     x: '100%',
//     width: '100%',
//     opacity: 0,
//   },
//   animate: {
//     x: '0%',
//     width: '100%',
//     opacity: 1,
//   },
//   exit: {
//     x: '-100%',
//     width: '100%',
//     opacity: 0.1,
//   },
// };

// const Transition = ({ delay = 0.6, duration = 0.6 }) => {
//   return (
//     <>
//       {/* Animația îmbunătățită cu efecte suplimentare */}
//       <motion.div
//         className="fixed top-0 bottom-0 right-[-100%] w-screen h-screen z-30 bg-[#0e1536]"
//         variants={transitionVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         transition={{ delay, duration, ease: 'easeInOut' }}
//       />

//     </>
//   );
// };

// // Verificarea tipurilor pentru propietăți
// Transition.propTypes = {
//   delay: PropTypes.number,
//   duration: PropTypes.number,
// };

// export default Transition;
