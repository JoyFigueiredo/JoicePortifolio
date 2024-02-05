import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Roboto } from "next/font/google"

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
});

export const AboutMe = () => {
  return (
    <main className='flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg xl:text-left xl:text-left-nowrap xl:justify-between'>
      <div className='text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120'>
        <h1 className='text-3xl sm:text-7xl xl:leading-[5rem]'> Prazer, sou&nbsp;
        <span className='font-bold'>Joice</span>
        </h1>
        <div className='mb-12'>
          <h2 className='${roboto.className} mb-12'> 
            Sou uma desenvolvedora...
          </h2>
          <Link href={"/contatos"} className='p-3 bg-h-gray-500 w-fit text-xl rounded-lg transitio-all hover:bg-opacity-80'> Converse comigo </Link>
        </div>
        <ul className='flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3'>
          <li style={{ backgroundColor: '#2F74C8', color : '#FFFFFF' }}> Typescript</li>
          <li style={{ backgroundColor: '#535789', color : '#FFFFFF' }}> React</li>
          <li style={{ backgroundColor: '#784633', color : '#FFFFFF' }}> Java</li>
          <li style={{ backgroundColor: '#168534', color : '#FFFFFF' }}> C</li>
        
        </ul>
      </div>
      <div>
        <Image src='https://avatars.githubusercontent.com/u/87450298?v=4' 
        width={500}
        height={500}
        unoptimized
        alt='Foto de perfil da Joice.'/>
        
      </div>
    </main>
  )
}
