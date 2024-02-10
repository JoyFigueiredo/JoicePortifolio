import Link from 'next/link'
import Image from 'next/image'
import { MenuCloseIcon } from '@/components/icons/MenuCloseIncon'

interface MenuProps {
    isVisible: boolean;
    onClose: () => void;
}

export const Menu = ({ isVisible, onClose }: MenuProps) => {
    return (
        <div className={`${isVisible ? 'flex' : 'hidden'}
            fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden
        `}
            onClick={onClose}
        >
            <div className='w-full bg-h-blue-900 h-96 shandow-md py-4 px-5'
            onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-between mb-5'>
                    <Link href="/">
                        <Image src="/favicon.svg" width={55} height={55} alt="Ícone da logo"></Image>
                    </Link>
                    <button onClick={onClose} >
                        <MenuCloseIcon className='fill-white w-10 h-10' />
                    </button>
                </div>
                <nav className='flex flex-col gap-5 text-xl p-5 items-center'>
                    <Link href="/" onClick={onClose}> Sobre Mim </Link>
                    <Link href="/portifolio" onClick={onClose}> Portifolio </Link>
                    <Link href="/contatos" onClick={onClose}> Contatos </Link>
                </nav>
            </div>
        </div>
    )
}
