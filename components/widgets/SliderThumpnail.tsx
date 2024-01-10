import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
interface SliderThumpnailProps {
  itemsActive: number;
  id: number; 
  image: string;
  brand: string;
  name: string;
  description: string;
  onClick: () => void;
}
export const SliderThumpnail = ({itemsActive, id, image, brand, name, description, onClick}:SliderThumpnailProps) => {
  return(
    <li className={cn ("relative w-[250px] h-[250px] cursor-pointer transition-all duration-500",itemsActive===id ? "opacity-100" : "opacity-50" )} onClick={onClick}>
      <div className='relative w-full h-full'>
        <Image src={image} fill alt='img' className='object-cover'/>
      </div>
      <div className=' space-y-4 absolute left-[10%] top-[20%] w-[500px] z-10 max-w-[80%] '>
        <p className={cn ("uppercase tracking-[10px] text-white translate-y-[30px] blur-[20px] opacity-0  animate-showContent" ,itemsActive===id ? "opacity-100" : "opacity-0")}>{brand}</p>
        <h2 className={cn( "text-6xl lg:text-8xl m-0 text-white font-bold translate-y-[30px] blur-[20px] opacity-0  animate-showContent animation-delay-3 " ,itemsActive===id ? "opacity-100" : "opacity-0")}> {name}
        </h2>
        <p className='text-gray-200 ranslate-y-[30px] blur-[20px] opacity-0  animate-showContent animation-delay-4  ' > {description} </p>
        
        
      </div>
    </li>
  )
}
