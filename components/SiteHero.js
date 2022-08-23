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
import madMaxPosterPortrait from "../public/images/movies/mad-max-1979-portrait.jpg";
import preyPosterPortrait from "../public/images/movies/prey-2022-portrait.jpg";
import NTTDPosterPortrait from "../public/images/movies/nttd-2020-portrait.jpg";
import TOTPPosterPortrait from "../public/images/movies/totp-2022-portrait.jpg";

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
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/rGBOcyh2EJ8'>
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
                    src={NTTDPosterPortrait}
                    alt='No Time To Die (2020) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-slide-content'>
                    <Link href='https://youtu.be/sHj3YBvDnXk'>
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
                    src={TOTPPosterPortrait}
                    alt='Terror on the Prairie (2022) Movie Review'
                    layout='fill'
                    priority
                />
            </SwiperSlide>
        </Swiper>
    );
}
