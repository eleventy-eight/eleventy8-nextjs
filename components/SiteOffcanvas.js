import Link from "next/link";
import Image from "next/image";

// Import graphics
import e8Logo from "../public/images/e8-logo.svg";

export default function SiteOffcanvas() {
    return (
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
                <div>Exciting things will happen...</div>
            </div>
        </div>
    );
}
