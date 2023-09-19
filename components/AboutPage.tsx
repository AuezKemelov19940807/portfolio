'use client'
//components

import { Circles, Avatar } from '.'

// framer motion
import { motion } from 'framer-motion'

//variants
import fadeIn from '@/variants'

//useState
import { useState } from 'react'

//countUp
import CountUp from 'react-countup'
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si'

interface IAboutDataProps {
  title: string
  info: IInfoProps[]
}

interface IInfoProps {
  title: string
  stage?: string
  icons?: React.ReactNode[]
}

//  data
const aboutData: IAboutDataProps[] = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaWordpress key={7} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key={1} />,
          <SiAdobexd key={2} />,
          <SiAdobephotoshop key={3} />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
]

interface IAboutPage {}

const AboutPage: React.FC<IAboutPage> = () => {
  const [index, setIndex] = useState<number>(0)
  const classNameInner = `flex items-center justify-center mb-4 xl:mb-0 flex-1 gap-x-2 xl:gap-x-6`
  const classNameBlock = `flex-1 relative xl:after:w-[1px] xl:after:h-full xl:after:bg-white/10
  xl:after:absolute xl:after:top-0 xl:after:right-0`

  const classNameNumber = `text-xl mb:text-2xl xl:text-4xl text-accent font-extrabold`
  const classNameText = `text-[10px] mb:text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px]`
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      {/* circles */}
      <Circles />
      {/* avatar */}
      <motion.div
        variants={fadeIn('right', 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-xl md:h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent disigns.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I began freelancing as a developer. Since then, I have
            done remote work for agencies, counsulted for startups, and
            collaborated on digital products for business and consumer use.{' '}
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`hidden md:flex ${classNameInner}`}
          >
            {/* experience */}
            <div className={classNameBlock}>
              <div className={classNameNumber}>
                <CountUp start={0} end={10} duration={5} /> +
              </div>
              <div className={classNameText}>Years of experience</div>
            </div>
            {/* clients */}
            <div className={classNameBlock}>
              <div className={classNameNumber}>
                <CountUp start={0} end={250} duration={5} /> +
              </div>
              <div className={classNameText}>Satisfied clients</div>
            </div>
            {/* projects */}
            <div className={classNameBlock}>
              <div className={classNameNumber}>
                <CountUp start={0} end={650} duration={5} /> +
              </div>
              <div className={classNameText}>Finished projects</div>
            </div>
            {/* awards */}
            <div className="flex-1">
              <div className={classNameNumber}>
                <CountUp start={0} end={8} duration={5} /> +
              </div>
              <div className={classNameText}>Winning awards</div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <div className="flex flex-col  w-full xl:max-w-[48%] h-[480px]">
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:justify-start gap-x-2 xl:gap-x-8 mb-4"
          >
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:bg-accent after:w-[100%] after:transition-all after:duration-300'
                  } cursor-pointer capitalize text-sm xl:text-lg relative after:absolute after:w-8 after:bg-white after:h-[2px] after:bottom-0 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="py-2 xl:py-6 flex flex-col  gap-y-2 xl:gap-y-4 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 text-sm xl:text-lg xl:mb-0">
                  {item.title}
                </div>
                <div className="hidden xl:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-2 xl:gap-x-4">
                  {item.icons?.map((icon, itemIndex) => (
                    <div key={itemIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
