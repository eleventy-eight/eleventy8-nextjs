import { useEffect } from "react";
import Script from "next/script";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
    // Import Bootstrap's core JS
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.js");
    }, []);

    // Google Analytics
    <>
        <Script
            strategy='afterInteractive'
            src='https://www.googletagmanager.com/gtag/js?id=UA-168214894-1'
        />
        <Script strategy='afterInteractive'>
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-168214894-1');
                `}
        </Script>
    </>;

    return <Component {...pageProps} />;
}

export default MyApp;
