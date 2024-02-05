import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const AboutMe = () => {
  return (
    <main>
      <div>
        <h1> Prazer, sou &nbsp;</h1>
        <span>Joice</span>
        <div>
          <h2> 
            Sou uma desenvolvedora...
          </h2>
          <Link href={"/contatos"}> Converse comigo</Link>
        </div>
        <ul>
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
