import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Headers = () => {
  return (
    <div className='fixed w-full left-0 top-0 z-50'>
      <div className='container mx-auto flex items-center justify-between p-5 lg:py-5 lg:px-0 '>
<Logo/>
<section className=''>
  <ul className='hidden lg:flex  items-center gap-x-8'>
    <li className=''><Link className='relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full ' href='/'>Inicio</Link></li>
    <li className=''><Link className='relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full ' href='/'>Nosotros</Link></li>
    <li className=''><Link className='relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full ' href='/'>Servicios</Link></li>
    <li className=''><Link className='relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full ' href='/'>Contacto</Link></li>

  </ul>
  <button className='relative lg:hidden '>
    <span className='absolute right-0 -top-4 w-8 h-0.5 bg-white'></span>
    <span className='absolute right-0 -top-2 w-8 h-0.5 bg-white'></span>
    <span className='absolute right-0 top-0 w-8 h-0.5 bg-white'></span>
  </button>
</section>
      </div>
      </div>
  )
}

export default Headers