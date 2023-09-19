'use client'

// next Link
import Link from 'next/link'

// next pathname
import { usePathname } from 'next/navigation'

//data
import { navData } from '@/data/navData'

interface INavProps {}

const Nav: React.FC<INavProps> = () => {
  const pathname = usePathname()
  return (
    <div className="">
      <div className="absolute z-50 max-[1200px]:bottom-0   bg-white/30 w-full  xl:w-auto xl:right-[2%] md:px-28  xl:px-0 flex xl:translate-y-[-50%]  xl:top-[50%] xl:rounded-full">
        <div className="flex  justify-between w-full md:inline-flex xl:flex-col  py-5 xl:py-10 xl:gap-y-10  px-4">
          {navData.map((link, index) => {
            const active = pathname === link.path
            return (
              <Link
                key={index}
                href={link.path}
                className={` ${
                  active ? 'text-accent' : ''
                } group text-xl xl:text-2xl transition-all duration-300 xl:hover:text-accent`}
              >
                <div className="absolute right-0 pr-16">
                  <div className="hidden items-center xl:group-hover:flex">
                    <div className="text-primary  text-[15px] bg-white px-2 rounded-md ">
                      {link.name}
                    </div>
                    <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-8 border-r-0"></div>
                  </div>
                </div>
                {link.icon}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav
