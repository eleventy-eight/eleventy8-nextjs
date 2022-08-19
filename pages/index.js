import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";
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
            </Head>
            <SiteHeader />
            <SiteHero />
            <SiteFooter />
        </div>
    );
}
