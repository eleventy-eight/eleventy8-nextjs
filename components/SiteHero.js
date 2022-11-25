import Link from "next/link";
import Image from "next/image";

// Import SwiperJS modules and core
import { EffectFade, Autoplay, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import SwiperJS default styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Import Graphics
import battle from "../public/images/movies/battle.jpg";
import lotr from "../public/images/movies/lotr.jpg";
import temple from "../public/images/movies/temple.jpg";
import charlie from "../public/images/movies/charlie.jpg";
import eagles from "../public/images/movies/eagles-dare.jpg";

export default function SiteHero() {
    return (
        <Swiper
            // Throw kitchen sink at it
            modules={[EffectFade, Autoplay, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            effect={"fade"}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: true,
            }}
        >
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/v9ymUwC9U5s'>
                        <a
                            className='btn btn-primary btn-hero'
                            rel='noopner noreferrer'
                            target='_blank'
                        >
                            <span>Watch Our Review</span>
                        </a>
                    </Link>
                </div>
                <Image
                    src={battle}
                    alt='Battle of Britain (1969) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/LpEFdwAWheU'>
                        <a
                            className='btn btn-primary btn-hero'
                            rel='noopner noreferrer'
                            target='_blank'
                        >
                            <span>Watch Our Review</span>
                        </a>
                    </Link>
                </div>
                <Image
                    src={lotr}
                    alt='Lord of the Rings: Fellowship of the Ring (2001) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/kxbkp73nMvY'>
                        <a
                            className='btn btn-primary btn-hero'
                            rel='noopner noreferrer'
                            target='_blank'
                        >
                            <span>Watch Our Review</span>
                        </a>
                    </Link>
                </div>
                <Image
                    src={temple}
                    alt='Indiana Jones and the Temple of Doom (1984) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/O-Ghl4De8_k'>
                        <a
                            className='btn btn-primary btn-hero'
                            rel='noopner noreferrer'
                            target='_blank'
                        >
                            <span>Watch Our Review</span>
                        </a>
                    </Link>
                </div>
                <Image
                    src={charlie}
                    alt='Goodbye Charlie Bright (2001) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href=''>
                        <a
                            className='btn btn-primary btn-hero'
                            rel='noopner noreferrer'
                            target='_blank'
                        >
                            <span>Watch Our Review</span>
                        </a>
                    </Link>
                </div>
                <Image
                    src={eagles}
                    alt='Where Eagles Dare (1968) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
        </Swiper>
    );
}
