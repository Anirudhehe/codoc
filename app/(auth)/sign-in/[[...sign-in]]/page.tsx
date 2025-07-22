import { SignIn } from '@clerk/nextjs'
import { Mina } from 'next/font/google'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='auth-page'>
        <SignIn/>
    </main>
  )
}

export default SignInPage