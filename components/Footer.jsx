import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer className='w-full bg-black text-white pd-5 md:px-20'>
            <div className='flex justify-center items-center flex-col'>
                <div className='flex gap-5 items-center'>
                    <figure className='w-36 md:w-36 justify-center flex flex-col'>
                        <Image className='w-full bg-transparent' src={'/logo-news.png'} width={1000} height={500} alt='logo de Funval' priority />
                    </figure>

                </div>

                <div className='flex gap-4 p-5 w-40 h-[75px]  items-center'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                        <Image
                            src="/facebook-white.svg"
                            alt="Facebook White"
                            width={32}
                            height={26}
                            className='h-8'
                        />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/instagram-white.svg"
                            alt="Instagram White"
                            width={32}
                            height={32}
                        />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/twitter-white.svg"
                            alt="Twitter White"
                            width={32}
                            height={32}
                        />
                    </a>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-xs md:text-base text-center'>
                <h3>Home |  Terms and Condition |  Privacy Policy |  Collection Statement |  Help |  Manage Account</h3>
                <h3>Copyright © 2024 Sync Money, All Rights Reserved</h3>
            </div>
        </footer>
    )
}
