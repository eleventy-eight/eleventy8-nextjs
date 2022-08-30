import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";
import SiteIntro from "../components/SiteIntro";
import SiteTeam from "../components/SiteTeam";
import SitePodcast from "../components/SitePodcast";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
    return (
        <div>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <title>
                    Eleventy8 | Three men in their 40s talk about... stuff
                </title>
                <meta
                    property='og:description'
                    content='Justin brings wry observations, Paul hosts and does the technical stuff, and Samir brings facts and trivia.'
                />
            </Head>
            <SiteHeader />
            <SiteHero />
            <section className='container'>
                <SiteIntro />
                <SitePodcast />
                <SiteTeam />
            </section>
            <SiteFooter />
        </div>
    );
}
