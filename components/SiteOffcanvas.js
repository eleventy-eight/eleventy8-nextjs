import Link from "next/link";
import Image from "next/image";

// Import graphics
import e8Circle from "../public/images/e8-circle.svg";

export default function SiteOffcanvas() {
    return (
        <section
            className='offcanvas offcanvas-end'
            tabIndex='-1'
            id='offcanvas'
            aria-labelledby='offcanvasLabel'
        >
            <header className='offcanvas-header'>
                <Link href='/'>
                    <a className='offcanvas-title' id='offcanvasLabel'>
                        <Image
                            src={e8Circle}
                            alt='Eleventy8 | Three men in their 40s talk about... stuff'
                            width='55'
                            height='55'
                        />
                    </a>
                </Link>
                <button
                    type='button'
                    className='btn-close btn-close-white'
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                ></button>
            </header>
            <main className='offcanvas-body'>
                <div id='offcanvas-intro'>
                    <p>
                        Three men in their 40s talking about... stuff. Justin
                        brings wry observations, Paul hosts and does the
                        technical stuff, and Samir brings facts and trivia.
                    </p>
                </div>
            </main>
        </section>
    );
}
