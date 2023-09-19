//next image
import Image from 'next/image'

interface IBulbProps {}

const Bulb: React.FC<IBulbProps> = () => {
  return (
    <div className=" hidden xl:flex w-[200px] xl:w-[260px] absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={'/bulb.png'}
        width={256}
        height={392}
        className="h-full w-full"
        alt=""
      />
    </div>
  )
}

export default Bulb
