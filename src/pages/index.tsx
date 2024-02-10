import { Inter } from "next/font/google";
import Head from "next/head";
import { AboutMe } from '@/components/Home/AboutMe';
import { Projects } from "@/components/Home/Projects";
import { Project, AboutMe as TAboutMe } from "@/types/Home";
import { GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps{
  home: {
    aboutMe: TAboutMe;
    projects: Project[];
  }
}

const Home = ({ home }: HomeProps) => {
  const {projects, aboutMe} =home;
  return (
    <>
      <Head>
        <title> Sobre Mim | Joice Figueiredo</title>
        <meta
          name="description"
          content="Sou uma desenvolvedora">
        </meta>
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe aboutMe={aboutMe}/>
        <Projects projects={projects} />
      </div>
    </>
  );
};

const loadHome = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/JoyFigueiredo/59be359e832cc1957e9fe42867be63da/raw/dc54c6e9513a6e7a7f9e18f1f94492170b794ded/home.json'
  );
  const home = await res.json();
  return home;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const home = await loadHome();

  return {
    props: { home },
  }
};
export default Home;