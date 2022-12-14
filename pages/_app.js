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
        <Script id='ga' strategy='afterInteractive'>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-168214894-1');
            `}
        </Script>
        <Script
            strategy='afterInteractive'
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6140993113558726'
            crossorigin='anonymous'
        />
        <Script
            strategy='afterInteractive'
            src='https://cdn.onesignal.com/sdks/OneSignalSDK.js'
        />
        <Script id='oneSignal' strategy='afterInteractive'>
            {`
            window.OneSignal = window.OneSignal || [];
                OneSignal.push(function() {
                OneSignal.init({
                    appId: "364e5837-42bc-4c84-8bfa-74409932026d",
                });
            });
            `}
        </Script>
    </>;

    return <Component {...pageProps} />;
}

export default MyApp;
