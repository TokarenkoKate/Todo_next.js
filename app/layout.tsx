import './globals.css'

import type { Metadata } from 'next'
import { manrope } from './fonts'
import clsx from 'clsx'
import Providers from './providers'
import Header from '@features/header/header'

export const metadata: Metadata = {
  title: 'Todo: tasks management application',
  description: 'Application to track your tasks, their complete and incomplete status',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(manrope.className, 'page')}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
