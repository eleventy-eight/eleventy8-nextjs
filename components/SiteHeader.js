import Link from "next/link";
import Image from "next/image";

// Import graphics
import e8Logo from "../public/images/e8-logo.svg";
import { List } from "react-bootstrap-icons";

export default function SiteHeader() {
    return (
        <header className='fixed-top d-flex flex-row justify-content-between align-items-center align-items-stretch'>
            <Link href='/'>
                <a id='site-logo'>
                    <Image
                        src={e8Logo}
                        alt='Eleventy8 | Three men in their 40s talk about... stuff'
                        width='200'
                        height='40.4'
                    />
                </a>
            </Link>
            <a
                id='toggle-offcanvas'
                data-bs-toggle='offcanvas'
                href='#offcanvas'
                role='button'
                aria-controls='offcanvas'
            >
                <List />
            </a>
        </header>
    );
}
