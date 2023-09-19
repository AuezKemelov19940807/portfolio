//component
import { ContactPage } from '@/components'

//metadata
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact',
  description: '...',
  icons: {
    icon: ['/metaIcons/contact/favicon.ico?v=4'],
    apple: ['/metaIcons/contact/apple-touch-icon.png?v=4'],
    shortcut: ['/metaIcons/contact/apple-touch-icon.png'],
  },
  manifest: '/metaIcons/contact/site.webmanifest',
}

interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
  return (
    <div className="bg-primary/30 h-full flex items-start  py-32">
      <ContactPage />
    </div>
  )
}
export default Contact
