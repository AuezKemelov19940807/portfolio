'use client'
//next image
import Image from 'next/image'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

//swiper style
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

//icons
import { FaQuoteLeft } from 'react-icons/fa'

interface ITestimonialSliderProps {}

interface ITestimonialDataProps {
  image: string
  name: string
  position: string
  message: string
}

// testimonial data
const testimonialData: ITestimonialDataProps[] = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
]

const TestimonialSlider: React.FC<ITestimonialSliderProps> = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      className="h-[400px]"
    >
      {testimonialData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row h-full sm:px-16">
            <div className="w-full max-w-[300px] flex flex-col items-center">
              {/* avatar */}
              <div className="mb-2">
                <Image src={item.image} width={120} height={120} alt="avatar" />
              </div>
              {/* name */}
              <div className="text-lg">{item.name}</div>
              {/* position */}
              <div className="text-[12px] uppercase font-extralight tracking-widest">
                {item.position}
              </div>
            </div>
            {/* quote & message  */}
            <div className="flex-1 flex items-center justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div>
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="md:text-lg text-center mb-32 sm:mb-0  md:text-left">
                  {item.message}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TestimonialSlider
