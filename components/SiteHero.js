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
import diehard2 from "../public/images/movies/diehard2.jpg";
import movie71 from "../public/images/movies/71.jpg";
import battle from "../public/images/movies/battle.jpg";
import lotr from "../public/images/movies/lotr.jpg";
import temple from "../public/images/movies/temple.jpg";

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
                    <Link href='https://youtu.be/0UDViQZoz8s'>
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
                    src={diehard2}
                    alt='Die Hard 2 (1990) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/bf5uv5XBCBE'>
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
                    src={movie71}
                    alt='71 (2014) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
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
        </Swiper>
    );
}
