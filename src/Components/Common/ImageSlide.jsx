
import { Swiper, SwiperSlide } from "swiper/react"
import image1 from '../../assests/Black-Rifle-CC-300x300.webp'
import image2 from '../../assests/Speedo-300x300.webp'
import image3 from '../../assests/SRAM-300x300.webp'
import image4 from '../../assests/Rossignol-300x300.webp'
import image5 from '../../assests/Good-Year-300x300.webp'
import image6 from '../../assests/ACS-300x300.webp'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';

// Import required modules
import { Autoplay, FreeMode} from 'swiper/modules';

const ImageSlider = () => {
  return (
    <div className='my-[20px] max-w-maxContentTab lg:max-w-maxContent'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          680: {slidesPerView: 4},
          1024: {slidesPerView: 5}
        }}

        navigation={true}
        modules={[Autoplay, FreeMode]}
          
          className="w-[100%] text-white flex items-center justify-center"

      >
        <SwiperSlide>
            <img src={image1}/>
        </SwiperSlide>

        <SwiperSlide>
            <img src={image2}/>
        </SwiperSlide>

        <SwiperSlide>
            <img src={image3}/>
        </SwiperSlide>

        <SwiperSlide>
            <img src={image4}/>
        </SwiperSlide>

        <SwiperSlide>
            <img src={image5}/>
        </SwiperSlide>

        <SwiperSlide>
            <img src={image6}/>
        </SwiperSlide>

      </Swiper>


    </div>
  )
}

export default ImageSlider





