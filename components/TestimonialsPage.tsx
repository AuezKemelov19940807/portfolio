'use client'

//components
import { Circles, Bulb, TestimonialSlider } from '.'

//framer motion
import { motion } from 'framer-motion'

//variants
import fadeIn from '@/variants'

interface TestimonialsPageProps {}

const TestimonialsPage: React.FC<TestimonialsPageProps> = () => {
  return (
    <>
      <Circles />
      <div className="container mx-auto">
        <div className="text-center">
          {/* text */}
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            What clients <span className="text-accent">say.</span>
          </motion.h2>
          {/* slider */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </>
  )
}

export default TestimonialsPage
