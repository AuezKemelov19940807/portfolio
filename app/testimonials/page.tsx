import { TestimonialsPage } from '@/components'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Testimonials',
  description: '...',
  icons: {
    icon: ['/metaIcons/testimonials/favicon.ico?v=4'],
    apple: ['/metaIcons/testimonials/apple-touch-icon.png?v=4'],
    shortcut: ['/metaIcons/testimonials/apple-touch-icon.png'],
  },
  manifest: '/metaIcons/testimonials/site.webmanifest',
}

interface ITestimonialsProps {}

const Testimonials: React.FunctionComponent<ITestimonialsProps> = (props) => {
  return (
    <div className="h-full bg-primary/30 flex items-center">
      <TestimonialsPage />
    </div>
  )
}

export default Testimonials
