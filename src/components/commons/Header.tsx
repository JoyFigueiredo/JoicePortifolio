import Link from "next/link"
import Image from "next/image"


export const Header = () => {
    return (
        <header>
        <Link href={"/"}>
            <Image src="/favicon.svg" width={55} height={55} alt=" Logo"/>
        </Link>
        <nav>
            <Link href={"/"}> Sobre Mim </Link>
            <Link href={"/portifolio"}> Portifolio </Link>
            <Link href={"/contatos"}> Contato </Link>

        </nav>
    </header>
    )
  }

export default Header