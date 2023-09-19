//metadata
import type { Metadata } from 'next'

//components
import AboutPage from '@/components/AboutPage'

interface IAboutProps {}

export const metadata: Metadata = {
  title: 'About',
  description: '...',
  icons: {
    icon: ['/metaIcons/about/favicon.ico?v=4'],
    apple: ['/metaIcons/about/apple-touch-icon.png?v=4'],
    shortcut: ['/metaIcons/about/apple-touch-icon.png'],
  },
  manifest: '/metaIcons/about/site.webmanifest',
}

const About: React.FC<IAboutProps> = () => {
  return <AboutPage />
}

export default About
