import Link from "next/link";
import Image from "next/image";

// Import SwiperJS modules and core
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
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
    return (
        <Swiper
            // Throw kitchen sink at it
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
        >
            <SwiperSlide>
                <Image
                    src={preyPosterPortrait}
                    alt='Prey (2022)'
                    width={1320}
                    height={1980}
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
