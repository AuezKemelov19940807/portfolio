// next image
import Image from 'next/image'

interface ICirclesProps {}

const Circles: React.FC<ICirclesProps> = () => {
  return (
    <div className=" hidden xl:flex w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={'/circles.png'}
        width={260}
        height={200}
        className="h-full w-full"
        alt=""
      />
    </div>
  )
}

export default Circles
