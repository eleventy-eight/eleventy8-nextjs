import Head from "next/head";
import SiteHeader from "../../components/SiteHeader";
import ModuleVideoPlayer from "../../components/ModuleVideoPlayer";
import SiteFooter from "../../components/SiteFooter";

export default function MovieReviews() {
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
            <section>
                <main className='container'>
                    <header className='row'>
                        <div className='col'>
                            <h1>Movie Reviews</h1>
                        </div>
                    </header>
                    <div className='row'>
                        <div className='col'>
                            <ModuleVideoPlayer videoId='MhzNcOSeR-Y' />
                        </div>
                    </div>
                </main>
            </section>
            <SiteFooter />
        </div>
    );
}
