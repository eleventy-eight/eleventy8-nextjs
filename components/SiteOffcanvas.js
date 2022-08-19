import Link from "next/link";
import Image from "next/image";

// Import graphics
import e8Circle from "../public/images/e8-circle.svg";
import applePodcasts from "../public/icons/apple-podcasts.svg";
import facebook from "../public/icons/facebook.svg";
import gettr from "../public/icons/gettr.svg";
import googlePodcasts from "../public/icons/google-podcasts.svg";
import instagram from "../public/icons/instagram.svg";
import odysee from "../public/icons/odysee.svg";
import rumble from "../public/icons/rumble.svg";
import spotify from "../public/icons/spotify.svg";
import truthSocial from "../public/icons/truth-social.svg";
import twitch from "../public/icons/twitch.svg";
import twitter from "../public/icons/twitter.svg";
import youTube from "../public/icons/youtube.svg";

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
                    <p>
                        <Link href='/movie-reviews/'>
                            <a>Movie Reviews</a>
                        </Link>
                    </p>
                </div>
                <iframe
                    src='https://open.spotify.com/embed/show/0qyafuXnqprjWP5zs5wBKj?utm_source=generator&amp;theme=0'
                    width='100%'
                    height='352'
                    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                ></iframe>
                <div id='offcanvas-bmc'>
                    <Link href='https://www.buymeacoffee.com/eleventy8'>
                        <a rel='noopener noreferrer' target='_blank'>
                            <img src='https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=eleventy8&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00' />
                        </a>
                    </Link>
                </div>
                <ul id='offcanvas-socials'>
                    <li>
                        <Link href='https://podcasts.apple.com/gb/podcast/eleventy8/id1572987138'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={applePodcasts}
                                    alt='Listen on Apple Podcasts'
                                    title='Listen on Apple Podcasts'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://www.facebook.com/Eleventy8-108409931517198'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={facebook}
                                    alt='Follow on Facebook'
                                    title='Follow on Facebook'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://gettr.com/user/11ty8'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={gettr}
                                    alt='Follow on GETTR'
                                    title='Follow on GETTR'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://podcasts.google.com/feed/aHR0cHM6Ly9hZG1pbjE2MTExLnBvZG9tYXRpYy5jb20vcnNzMi54bWw'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={googlePodcasts}
                                    alt='Listen on Google Podcasts'
                                    title='Listen on Google Podcasts'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://www.instagram.com/eleventy_8/'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={instagram}
                                    alt='Follow on Instagram'
                                    title='Follow on Instagram'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://odysee.com/@Eleventy8:5'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={odysee}
                                    alt='Watch on Odysee'
                                    title='Watch on Odysee'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://rumble.com/c/Eleventy8'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={rumble}
                                    alt='Watch on Rumble'
                                    title='Watch on Rumble'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://open.spotify.com/show/0qyafuXnqprjWP5zs5wBKj?si=0a00f55bee1f4e44'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={spotify}
                                    alt='Listen on Spotify'
                                    title='Listen on Spotify'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://truthsocial.com/@eleventy8'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={truthSocial}
                                    alt='Follow on Truth Social'
                                    title='Follow on Truth Social'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://www.twitch.tv/eleventy_8'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={twitch}
                                    alt='Watch on Twitch'
                                    title='Watch on Twitch'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://twitter.com/Eleventy81'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={twitter}
                                    alt='Follow on Twitter'
                                    title='Follow on Twitter'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://www.youtube.com/c/Eleventy8/'>
                            <a rel='noopener noreferrer' target='_blank'>
                                <Image
                                    src={youTube}
                                    alt='Watch on YouTube'
                                    title='Watch on YouTube'
                                    width='45'
                                    height='45'
                                />
                            </a>
                        </Link>
                    </li>
                </ul>
                <footer>
                    <p>
                        &copy; Eleventy8 | Built by Paul with{" "}
                        <Link href='https://nextjs.org/'>
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                title='Built by Paul with NextJS'
                            >
                                NextJS
                            </a>
                        </Link>
                    </p>
                </footer>
            </main>
        </section>
    );
}
