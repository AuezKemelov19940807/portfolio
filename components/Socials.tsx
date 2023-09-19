//next link
import Link from 'next/link'

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri'

interface ISocialsProps {}

const Socials: React.FC<ISocialsProps> = () => {
  const linkClass = `hover:text-accent transition-all duration-300`
  return (
    <div className="flex items-center gap-x-2 xl:gap-x-5 text-lg">
      <Link href={''} className={linkClass}>
        <RiYoutubeLine />
      </Link>
      <Link href={''} className={linkClass}>
        <RiInstagramLine />
      </Link>
      <Link href={''} className={linkClass}>
        <RiFacebookLine />
      </Link>
      <Link href={''} className={linkClass}>
        <RiDribbbleLine />
      </Link>
      <Link href={''} className={linkClass}>
        <RiBehanceLine />
      </Link>
      <Link href={''} className={linkClass}>
        <RiPinterestLine />
      </Link>
    </div>
  )
}

export default Socials
