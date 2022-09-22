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
import raiders from "../public/images/movies/raiders.jpg";
import topGunMPosterPortrait from "../public/images/movies/top-gun-maverick-2022-portrait.jpg";
import getCarter from "../public/images/movies/get-carter-1971-portrait.jpg";
import madMaxPosterPortrait from "../public/images/movies/mad-max-1979-portrait.jpg";
import preyPosterPortrait from "../public/images/movies/prey-2022-portrait.jpg";

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
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/leqsAUfMZEw'>
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
                    src={topGunMPosterPortrait}
                    alt='Top Gun: Maverick (2022) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/OssjkfaxS6w'>
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
                    src={getCarter}
                    alt='Get Carter (1971) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/Yh9Eq6D-hfM'>
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
                    src={madMaxPosterPortrait}
                    alt='Mad Max (1979) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/MhzNcOSeR-Y'>
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
                    src={preyPosterPortrait}
                    alt='Prey (2022) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
        </Swiper>
    );
}
