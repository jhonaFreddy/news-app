import Image from 'next/image'
import React from 'react'

export default function NavBar() {
  return (
    <nav className='  flex bg-black justify-center md:justify-between p-3 flex-wrap items-center flex-col md:flex-row'>
        <figure className='w-36 md:w-36 justify-center flex flex-col'>
          <Image className='w-full bg-transparent' src={'/logo-news.png'} width={300} height={200} alt='logo de Funval' priority />
        </figure>
        <div className='items-center  rounded flex  gap-2'>
          <button className='justify-center flex items-center '>
            <figure >
              <Image className='' src={'/filtro.svg'} width={30} height={10} alt='logo de Funval' priority />
            </figure>
          </button>

          <div className='border-white border'>
            <input type="text " className='focus:border-black' />
            <button className='bg-black border border-white text-white px-1'> search</button>
          </div>


        </div>
      </nav>
  )
}
