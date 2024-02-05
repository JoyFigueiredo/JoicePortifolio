import Head from "next/head";

const Contatos = () => {
    return (
        <>
            <Head>
                <title> Contatos | Joice Figueiredo</title>
            </Head>
            <div>
                <h1>Contatos</h1>

                <ul>
                    <li>
                        <span>E-mail</span>
                        <div>
                            <a href="mailto:joicebfigueiredo@gmail.com"> joicebfigueiredo@gmail.com </a>
                        </div>
                    </li>
                    <li>
                        <span>Linkedin</span>
                        <div>
                            <a href="mailto:joicebfigueiredo@gmail.com"> joicebfigueiredo@gmail.com </a>
                        </div>
                    </li>
                    <li>
                        <span>Github</span>
                        <div>
                            <a href="mailto:joicebfigueiredo@gmail.com"> joicebfigueiredo@gmail.com </a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Contatos;