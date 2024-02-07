import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { MenuCloseIcon } from '@/components/icons/MenuCloseIncon'

export const Menu = () => {
    return (
        <div>
            <div>
                <div>
                    <Link href="/">
                        <Image src="/favicon.svg" width={55} height={55} alt = "Ícone da logo"></Image>
                    </Link>
                    <button>
                        <MenuCloseIcon/>
                    </button>
                </div>
                <nav>
                    <Link href="/"> Sobre Mim </Link>
                    <Link href="/portifolio"> Portifolio </Link>
                    <Link href="/contatos"> Contatos </Link>
                </nav>
            </div>
        </div>
    )
}
