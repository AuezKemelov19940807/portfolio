//component
import { WorkPage } from '@/components'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Work',
  description: '...',
  icons: {
    icon: ['/metaIcons/work/favicon.ico?v=4'],
    apple: ['/metaIcons/work/apple-touch-icon.png?v=4'],
    shortcut: ['/metaIcons/work/apple-touch-icon.png'],
  },
  manifest: '/metaIcons/work/site.webmanifest',
}

interface IWorkProps {}

const Work: React.FC<IWorkProps> = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <WorkPage />
    </div>
  )
}

export default Work
