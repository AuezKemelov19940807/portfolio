'use client'
//framer motion
import { motion, Variants } from 'framer-motion'

const variantsTransition: Variants = {
  initial: { x: '100%', width: '100%' },
  animate: { x: '0%', width: '0%' },
  exit: { x: ['0%', '100%'], width: ['0%', '100%'] },
}

interface ITransitionProps {}

const Transition: React.FC<ITransitionProps> = () => {
  return (
    <div>
      <motion.div
        variants={variantsTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
        className="fixed top-0 bottom-0 right-full w-screen  h-screen  z-30 bg-[#4b3792]"
      ></motion.div>
      <motion.div
        variants={variantsTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
        className="fixed top-0 bottom-0 right-full w-screen  h-screen  z-30 bg-[#3b2d71]"
      ></motion.div>
      <motion.div
        variants={variantsTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
        className="fixed top-0 bottom-0 right-full w-screen  h-screen  z-30 bg-[#2e2257]"
      ></motion.div>
    </div>
  )
}

export default Transition
