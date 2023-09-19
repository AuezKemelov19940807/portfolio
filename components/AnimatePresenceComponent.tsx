'use client'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Transition } from '.'

interface IAnimatePresenceComponentsProps {
  children: React.ReactNode
}

const AnimatePresenceComponent: React.FC<IAnimatePresenceComponentsProps> = ({
  children,
}) => {
  const name = usePathname()

  return (
    <AnimatePresence mode="wait" key={name}>
      <div className="h-full">
        <Transition />
        {children}
      </div>
    </AnimatePresence>
  )
}

export default AnimatePresenceComponent
