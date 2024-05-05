import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
      <div className='h-[80vh] flex flex-col gap-2 justify-center items-center'>
          <h1 className='text-4xl'>Comming Soon</h1>
          <p className='font-mono'>This Feature is in Beta Testing.</p>
          <Link href='/' className='text-blue-500 underline underline-offset-4'>
              Go back home
            </Link>
    </div>
  )
}

export default page