import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <Head>
                <title> 404 | Joice Figueiredo</title>
            </Head>
            <div>
                <h1> 404</h1>
                <div>
                    <p>
                        <span> Clique no botao a baixo para retornar a pagina principal</span>
                    </p>
                </div>
                <Link href={"/"}> Ir a pagina principal </Link>
            </div>
        </>
    )
}

export default NotFound;