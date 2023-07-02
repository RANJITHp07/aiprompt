import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './component/navbar'
import Provider from './component/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata={
  title:"Promptophia",
  description:"Discover & share AI prompts"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Provider>
      <div className='main'>
            <div className='gradient'>
            </div>
         </div>
         <main className='app'>
          <Navbar/>
            {children}
         </main>
      </Provider>
        </body>
    </html>
  )
}
