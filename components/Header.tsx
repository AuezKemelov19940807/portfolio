//next image
import Image from 'next/image'

//links
import Link from 'next/link'

//components
import { Socials } from '.'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className="absolute w-full z-30 flex items-center  xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-8 gap-y-6">
          <Link href={'/'}>
            <Image
              src={'/logo.svg'}
              width={0}
              height={0}
              sizes="100vw"
              alt="logo"
              className="w-full h-auto"
              priority
            />
          </Link>
          <div>
            <Socials />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
