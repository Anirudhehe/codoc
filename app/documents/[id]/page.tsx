import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedOut,SignedIn, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Document = () => {
  return (
    <div>
        <Header>
            <div className='flex w-fit items-center justify-center gap-2'>
                <p className='document-title'>Share</p>
            </div>
            <SignedOut>
          <div className="flex gap-2">
            <SignInButton />
            <SignUpButton />
          </div>
        </SignedOut>

      
        <SignedIn>
          <UserButton />
        </SignedIn>
        </Header>
        <Editor/>
    </div>
  )
}

export default Document