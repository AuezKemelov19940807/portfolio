'use client'

//framer motion
import { motion } from 'framer-motion'

//variants
import fadeIn from '@/variants'

//icon
import { BsArrowRight } from 'react-icons/bs'

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="container mx-auto flex items-center h-full justify-center">
      <div className="flex flex-col w-full max-w-[700px]">
        {/* title */}
        <motion.h2
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 text-center"
        >
          Let&apos;s <span className="text-accent">connect.</span>
        </motion.h2>
        {/* form */}
        <form>
          {/* input group */}
          <div className="flex flex-col gap-y-6 w-full mx-auto">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col md:flex-row gap-y-6 md:gap-y-0  gap-x-6 w-full"
            >
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </motion.div>
            <motion.input
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              type="text"
              placeholder="subject"
              className="input"
            />
            <motion.textarea
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              placeholder="message"
              className="textarea"
            />
            <button className="btn rounded-full border border-white/50 max-w-[170px] flex items-center gap-x-8 transition-all duration-300 justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-[0%] group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
