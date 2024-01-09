import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <section className='flex font-bold justify-center items-center' >
  <Link rel="stylesheet" href="/" className='uppercase font-black text-white flex items-center text-lg ' />
  <span className='bg-white text-black w-4 h-4 flex items-center justify-center rounded mr-px'>S</span>lider
</section>
  )
}

export default Logo