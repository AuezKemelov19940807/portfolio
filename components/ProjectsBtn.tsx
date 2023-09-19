//next image
import Image from 'next/image'

//next link
import Link from 'next/link'

//icons
import { HiArrowRight } from 'react-icons/hi2'

interface IProjectsBtnProps {}

const ProjectsBtn: React.FC<IProjectsBtnProps> = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={'/work'}
        className="relative h-[185px] w-[185px] flex items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt="icon rounded"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 group-hover:text-accent transition-all duration-300" />
      </Link>
    </div>
  )
}

export default ProjectsBtn
