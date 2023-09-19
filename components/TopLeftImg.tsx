//next image
import Image from 'next/image'

interface ITopLeftImgProps {}

const TopLeftImg: React.FC<ITopLeftImgProps> = () => {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image
        src={'/top-left-img.png'}
        width={0}
        height={0}
        sizes="100vw"
        alt=""
        priority
        className="w-full h-auto"
      />
    </div>
  )
}

export default TopLeftImg
