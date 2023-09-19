import { ServicesPage } from '@/components'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Services',
  description: '...',
  icons: {
    icon: ['/metaIcons/services/favicon.ico?v=4'],
    apple: ['/metaIcons/services/apple-touch-icon.png?v=4'],
    shortcut: ['/metaIcons/services/apple-touch-icon.png'],
  },
  manifest: '/metaIcons/services/site.webmanifest',
}

interface IServicesProps {}

const Services: React.FC<IServicesProps> = () => {
  return (
    <div className="h-full bg-primary/30 py-24 xl:py-36 flex items-center">
      <ServicesPage />
    </div>
  )
}

export default Services
