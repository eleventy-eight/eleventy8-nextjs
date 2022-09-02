import Image from "next/image";

import Paul from "../public/images/team/paul.jpg";
import Justin from "../public/images/team/justin.jpg";
import Samir from "../public/images/team/samir.jpg";

export default function SiteTeam() {
    return (
        <section id='team'>
            <div className='row'>
                <div className='col'>
                    <h2>The Team</h2>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-lg-3 g-4'>
                <div className='col'>
                    <div className='team-member h-100'>
                        <p className='team-member__name'>
                            <span>Paul</span>
                        </p>
                        <Image
                            src={Paul}
                            width={768}
                            height={1024}
                            alt='Paul'
                        />
                    </div>
                </div>
                <div className='col'>
                    <div className='team-member h-100'>
                        <p className='team-member__name'>
                            <span>Samir</span>
                        </p>
                        <Image
                            src={Samir}
                            width={768}
                            height={1024}
                            alt='Samir'
                        />
                    </div>
                </div>
                <div className='col'>
                    <div className='team-member h-100'>
                        <p className='team-member__name'>
                            <span>Justin</span>
                        </p>
                        <Image
                            src={Justin}
                            width={768}
                            height={1024}
                            alt='Justin'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
