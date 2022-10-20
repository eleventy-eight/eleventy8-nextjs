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
import baron from "../public/images/movies/baron.jpg";
import joker from "../public/images/movies/joker.jpg";
import boysFromBrazil from "../public/images/movies/boysfrombrazil.jpg";
import timeBandits from "../public/images/movies/time-bandits.jpg";
import raiders from "../public/images/movies/raiders.jpg";

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
                    <Link href='https://youtu.be/Y4dzbY4tTk4'>
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
                    src={baron}
                    alt='The Adventures of Baron Munchausen (1988) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/Lu4RJvnsnB0'>
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
                    src={joker}
                    alt='Joker (2019) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/YIaRqxXpg2w'>
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
                    src={boysFromBrazil}
                    alt='The Boys From Brazil (1978) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/IA0squMxhaI'>
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
                    src={timeBandits}
                    alt='Time Bandits (1981) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/ALhpsBJnrvc'>
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
                    src={raiders}
                    alt='Raiders of the Lost Ark (1981) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
        </Swiper>
    );
}
