import Link from "next/link";
import Image from "next/image";

import e8Logo from "../public/images/e8-logo.svg";

export default function SiteFooter() {
    return (
        <footer>
            <div
                className='offcanvas offcanvas-end'
                tabIndex='-1'
                id='offcanvas'
                aria-labelledby='offcanvasLabel'
            >
                <div className='offcanvas-header'>
                    <Link href='/'>
                        <a className='offcanvas-title' id='offcanvasLabel'>
                            <Image
                                src={e8Logo}
                                alt='Eleventy8 | Three men in their 40s talk about... stuff'
                                width='200'
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
                </div>
                <div className='offcanvas-body'>
                    <div>
                        Some text as placeholder. In real life you can have the
                        elements you have chosen. Like, text, images, lists,
                        etc.
                    </div>
                    <div className='dropdown mt-3'>
                        <button
                            className='btn btn-secondary dropdown-toggle'
                            type='button'
                            data-bs-toggle='dropdown'
                        >
                            Dropdown button
                        </button>
                        <ul className='dropdown-menu'>
                            <li>
                                <a className='dropdown-item' href='#'>
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className='dropdown-item' href='#'>
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a className='dropdown-item' href='#'>
                                    Something else here
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
