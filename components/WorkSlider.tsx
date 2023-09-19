'use client'
//next image
import Image from 'next/image'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

//swiper style
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

//icons
import { BsArrowRight } from 'react-icons/bs'

interface IWorkSliderProps {}

interface IImagesProps {
  title: string
  path: string
}

interface ISlidesProps {
  images: IImagesProps[]
}
interface IWorkSlidesProps {
  slides: ISlidesProps[]
}

// data
const workSlides: IWorkSlidesProps = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
}

const WorkSlider: React.FC<IWorkSliderProps> = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative flex justify-center items-center rounded-lg overflow-hidden group"
                  >
                    <div className="relative flex justify-center items-center overflow-hidden">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
                      {/* titles */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 xl:group-hover:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100 uppercase">live</div>
                          {/* title part 2 */}
                          <div className="delay-150 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 uppercase">
                            project
                          </div>
                          {/* icon */}
                          <div className="text-xl delay-200 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default WorkSlider
