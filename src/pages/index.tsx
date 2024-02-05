import { Inter } from "next/font/google";
import Head from "next/head";
import {AboutMe} from '@/components/Home/AboutMe';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title> Sobre Mim | Joice Figueiredo</title>
      <meta name="description" content="Sou uma desenvolvedora"></meta>
    </Head>
    <div>
        <AboutMe/>
    </div>
    </>
  )
}