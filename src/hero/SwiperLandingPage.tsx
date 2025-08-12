import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // تأكد تضيف استايل swiper
 
const data = [
  { id: 1, image: "/public/images/New folder/gallery1/image1.jpg" },
  { id: 1, image: "/public/images/New folder/gallery1/image2.jpg" },
  { id: 1, image: "/public/images/New folder/gallery1/image3.jpg" },
  { id: 1, image: "/public/images/New folder/gallery1/image4.jpg" },
  { id: 1, image: "/public/images/New folder/gallery1/image5.jpg" },
  { id: 1, image: "/public/images/New folder/gallery1/image6.jpg" },
 
];

const SwiperLandingPage = () => {
  return (
    // <Swiper
    //   slidesPerView={4}
    //   spaceBetween={20}
    //   autoplay={{
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   }}
    //   modules={[Autoplay]}
    //   className="w-[70%] h-[250px]" // أو الارتفاع اللي يناسبك
    // >
  <div className="">

  {/* <div className="absolute w-[5rem] bottom-[74%] h-[20rem] bg-orange-800  right-[10%]"/>
  <div className="absolute w-[5rem] bottom-[90%] h-[10rem] bg-orange-800  left-[10%]"/>

  <div className="absolute w-8 h-8 bg-orange-800 rounded-full top-[30%] left-[50%]"/>
  <div className="absolute w-8 h-8 bg-orange-800 rounded-full top-[28%] left-[30%]"/>
  <div className="absolute w-8 h-8 bg-orange-800 rounded-full top-[32%] left-[5%]"/>
    
  */}
       <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      effect="coverflow"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[Autoplay, EffectCoverflow]}
      className="w-[70%] h-[250px] mt-10"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className="flex items-center justify-center">
          <img
            src={item.image}
            alt={`Slide ${item.id}`}
            className="object-cover w-full h-full bg-center rounded-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default SwiperLandingPage;
