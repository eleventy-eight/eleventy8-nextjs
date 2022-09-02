import Link from "next/link";
import Image from "next/image";

import Logo from "../public/images/e8-logo.svg";

export default function SiteIntro() {
    return (
        <section id='intro'>
            <div className='row'>
                <div className='col-lg-5'>
                    <h1>
                        <strong>
                            Eleventy8 | Three men in their 40s talk about...
                            stuff
                        </strong>
                        <Image
                            src={Logo}
                            alt='Eleventy8 | Three men in their 40s talk about...
                            stuff'
                            width={400}
                            height={100}
                        />
                    </h1>
                    <p>
                        Three men in their 40s talking about... stuff. Justin
                        brings wry observations, Paul hosts and does the
                        technical stuff, and Samir brings facts and trivia.
                    </p>
                    <p>
                        <Link href='https://www.youtube.com/c/Eleventy8'>
                            <a
                                className='btn btn-primary btn-intro'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <span>Watch Our Videos</span>
                            </a>
                        </Link>
                    </p>
                </div>
                <div className='col'>
                    <div className='ratio ratio-16x9'>
                        <iframe
                            src='https://www.youtube-nocookie.com/embed?listType=playlist&amp;list=UUMwhK00OKytB3cCPpHjPY9g'
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
