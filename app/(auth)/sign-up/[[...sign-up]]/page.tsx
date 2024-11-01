import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function SignUpPage() {
  return (
    <main className='flex h-screen w-full flex-center'>
        <SignUp/>
    </main>
  )
}