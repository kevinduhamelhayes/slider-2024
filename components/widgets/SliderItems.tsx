import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'

const SliderItems = () => {
  return (
    <li className={cn ("absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0")}>
      <div className='relative w-full h-full'>
        <Image src='/images/1.jpg' fill alt='img' className='object-cover'/>

      </div>
    </li>
  )
}

export default SliderItems