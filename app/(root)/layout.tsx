import React, { ReactNode } from 'react'

const RootLayout = ({ children }: {children: ReactNode}) => {
  return (
    <main>
        {/* nav */}
        {children}
        {/* foot */}
    </main>
  )
}

export default RootLayout