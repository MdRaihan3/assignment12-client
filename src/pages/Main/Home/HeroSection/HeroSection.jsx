import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperStyles.css';
const HeroSection = () => {
    return (
        <div>
             <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper">
                <SwiperSlide id='banner1' className=' text-white text-center '>
                    <div className='h-full flex flex-col justify-center items-center'>
                        <h1 className=' text-3xl'>Get Started Right Away</h1>
                        <p className=' text-lg'>more than 80k+ task completed by workers worldwide</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='banner2' className=' text-white text-center'>
                <div className='h-full flex flex-col justify-center items-center'>
                        <h1 className=' text-3xl'>Continuos Job</h1>
                        <p className=' text-lg'>Complete our task</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='banner3' className=' text-white text-center'>
                <div className='h-full flex flex-col justify-center items-center'>
                        <h1 className=' text-3xl'>Find Job</h1>
                        <p className=' text-lg'>more than 500k+ task worldwide</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSection;