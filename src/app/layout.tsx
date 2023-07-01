import TopHeader from '@/components/navigation/TopHeader'
import './globals.css'
import { Kanit } from 'next/font/google'

const kanit = Kanit({ subsets: ['latin'], weight: ['400', '600', '800'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <TopHeader />
        {children}
      </body>
    </html>
  )
}
