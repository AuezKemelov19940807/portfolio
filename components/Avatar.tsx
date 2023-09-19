import Image from 'next/image'

interface IAvatarProps {}

const Avatar: React.FC<IAvatarProps> = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/avatar.png'}
        width={0}
        height={0}
        sizes="100vw"
        alt="Avatar"
        className="w-full h-auto"
        priority
      />
    </div>
  )
}

export default Avatar
