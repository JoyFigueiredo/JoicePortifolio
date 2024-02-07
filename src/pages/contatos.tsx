import Head from "next/head";

const Contatos = () => {
    return (
        <>
            <Head>
                <title> Contatos | Joice Figueiredo</title>
            </Head>
            <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
                <h1 className="tect-5xl md:text-7xl font-bold text-center">Contatos</h1>

                <ul className="table mx-auto space-y-6 md:space-y-8">
                    <li className="md:text-xl">
                        <span className="font-bold">E-mail</span>
                        <div className=" flex gap-1 md:gap-3 items-center">
                            <a href="mailto:joicebfigueiredo@gmail.com" className="text-sm md:text-lg text-slate-300 underline truncate"> joicebfigueiredo@gmail.com </a>
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">Linkedin</span>
                        <div className=" flex gap-1 md:gap-3 items-center">
                            <a href="mailto:joicebfigueiredo@gmail.com" className="text-sm md:text-lg text-slate-300 underline truncate"> joicebfigueiredo@gmail.com </a>
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">Github</span>
                        <div className=" flex gap-1 md:gap-3 items-center">
                            <a href="mailto:joicebfigueiredo@gmail.com" className="text-sm md:text-lg text-slate-300 underline truncate"> joicebfigueiredo@gmail.com </a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Contatos;