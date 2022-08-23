export default function ModuleSwiperSlide() {
    return (
        <SwiperSlide>
            <div className='swiper-slide-content'>
                <Link href={SwiperUrl}>
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
                src={SwiperImage}
                alt='Mad Max (1979) Movie Review'
                width={SwiperWidth}
                height={SwiperHeight}
                layout='responsive'
                priority
            />
        </SwiperSlide>
    );
}
