import Link from 'next/link'
import React from 'react'

const OverlayContent = () => {
  return (
      <section className='z-10 fixed top-0  w-screen'>
          <div className='flex flex-col  justify-between'>
              <div className='flex flex-col text-white p-4 gap-2'>
                    <h1 className='text-xl md:text-4xl font-semibold'>Virtual QR</h1>
                    <p className='text-sm md:text-2xl '>Scan QR Code to view 3D models in AR.</p>
              </div>
          </div>
    </section>
  )
}

export default OverlayContent