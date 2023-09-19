'use client'
//framer motion
import { motion } from 'framer-motion'

//components
import { Avatar, ParticlesContainer, ProjectsBtn } from '@/components'

//variants
import fadeIn from '@/variants'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        {/* text */}
        <div className="container mx-auto  flex justify-center flex-col xl:text-left h-full xl:pt-40">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-center xl:text-left"
          >
            Transforming Ideals <br /> Into{' '}
            <span className="text-accent"> Digital reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto text-center xl:text-left xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quae
            illo dolorum voluptatibus asperiores vero magni iure cupiditate
            blanditiis enim?
          </motion.p>
          {/* btn */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="flex items-center  text-center xl:hidden relative"
          >
            <ProjectsBtn />
          </motion.div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* image bg */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-0 mix-blend-color-dodge"></div>
        {/* particles */}
        <div>
          <ParticlesContainer />
        </div>
        {/* avatar */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
