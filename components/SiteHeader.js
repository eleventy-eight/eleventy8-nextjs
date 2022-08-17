import Link from "next/link";
import Image from "next/image";

import e8Logo from "../public/images/e8-logo.svg";

export default function SiteHeader() {
    return (
        <header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Link href='/'>
                            <a>
                                <Image
                                    src={e8Logo}
                                    alt='Eleventy8 | Three men in their 40s talk about... stuff'
                                    width='200'
                                    height='55'
                                />
                            </a>
                        </Link>
                    </div>
                    <div className='col'>
                        <a
                            className='btn btn-primary'
                            data-bs-toggle='offcanvas'
                            href='#offcanvas'
                            role='button'
                            aria-controls='offcanvas'
                        >
                            OffCanvas
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
