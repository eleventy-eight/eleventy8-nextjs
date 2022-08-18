import Link from "next/link";
import Image from "next/image";

// Import SwiperJS modules and core
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import SwiperJS default styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Graphics
import preyPosterPortrait from "../public/images/movies/prey-2022-portrait.jpg";
import preyPosterWide from "../public/images/movies/prey-2022-wide.jpg";

export default function SiteHero() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    return (
        <Swiper
            // Throw kitchen sink at it
            modules={[Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            effect={'fade'}
            pagination={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
        >
            <SwiperSlide>
                <Image
                    src={preyPosterPortrait}
                    alt='Prey (2022)'
                    width={1320}
                    height={1980}
                    layout='responsive'
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={preyPosterWide}
                    alt='Prey (2022)'
                    width={3840}
                    height={2160}
                    priority
                />
            </SwiperSlide>
        </Swiper>
    );
}
