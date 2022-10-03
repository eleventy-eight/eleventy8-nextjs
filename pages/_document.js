import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang='en_GB'>
            <Head>
                <meta property='og:locale' content='en_GB' />
                <meta property='og:title' content='Eleventy8' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='/images/open-graph.jpg' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#000000' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='true'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap'
                    rel='stylesheet'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/images/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/images/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/images/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/images/safari-pinned-tab.svg'
                    color='#f5061d'
                />
                <link
                    rel='alternate'
                    type='application/rss+xml'
                    title='Eleventy8 on YouTube'
                    href='https://www.youtube.com/feeds/videos.xml?channel_id=UCMwhK00OKytB3cCPpHjPY9g'
                />
                <link
                    rel='alternate'
                    type='application/rss+xml'
                    title='Eleventy8 Podcasts'
                    href='https://anchor.fm/s/6a7ec77c/podcast/rss'
                />
            </Head>
            <body className='bg-black text-white'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
