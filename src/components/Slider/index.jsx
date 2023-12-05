"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

const Slider = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/reviews?limit=3`
    );

    const dataTopReviews = await res.json();

    return (
        <div className="container">
            <div className="flex justify-center items-center">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {dataTopReviews.data &&
                        dataTopReviews.data.map((data) => (
                            <SwiperSlide key={data.mal_id}>
                                <Image
                                    src={data.entry.images.webp.image_url}
                                    height={100}
                                    width={100}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
