'use client'

//components
import { Circles, Bulb, WorkSlider } from '.'

//framer motion
import { motion } from 'framer-motion'

//variants
import fadeIn from '@/variants'

interface IWorkPageProps {}

const WorkPage: React.FC<IWorkPageProps> = () => {
  return (
    <>
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="flex flex-col text-center lg:text-left xl:w-[30vw] mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2  mt-12"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              sapiente autem consequuntur earum labore quia molestias aperiam
              accusamus, esse eligendi laborum accusantium libero harum
              repellendus sunt, recusandae, quod nam ratione?
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </>
  )
}

export default WorkPage
