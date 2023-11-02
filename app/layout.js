import './globals.css'
import { Inter,Montserrat } from 'next/font/google'

const font = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Go North',
  description: 'Yet Another design Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
