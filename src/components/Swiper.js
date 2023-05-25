import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Pagination } from "swiper";
// import Swiperitem from "./Swiperitem";

export default function App() {
    const features = [
        {
            "title": "Window Cleaning",
            "img": "https://designarc.biz/demos/cleanex/assets/images/service/service-1.jpg"
        },
        {
            "title": "Window Cleaning",
            "img": "https://designarc.biz/demos/cleanex/assets/images/service/service-3.jpg"
        },
        {
            "title": "Carpet Cleaning",
            "img": "https://designarc.biz/demos/cleanex/assets/images/service/service-2.jpg"
        }
    ]
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{ height: "500px" }}
            >
                <SwiperSlide>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="https://designarc.biz/demos/cleanex/assets/images/service/service-3.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <h5 class="card-text" style={{ display: "inline" }}>Window Cleaning</h5>
                                </div>
                                <div class="col-6">
                                    <img src="https://designarc.biz/demos/cleanex/assets/images/icons/icon-9.png" alt="arrow" ></img>
                                </div>
                            </div>
                        </div>
                    </div >
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="https://designarc.biz/demos/cleanex/assets/images/service/service-2.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <h5 class="card-text" style={{ display: "inline" }}>Carpet Cleaning</h5>
                                </div>
                                <div class="col-6">
                                    <img src="https://designarc.biz/demos/cleanex/assets/images/icons/icon-9.png" alt="arrow" ></img>
                                </div>
                            </div>
                        </div>
                    </div >
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="https://designarc.biz/demos/cleanex/assets/images/service/service-1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <h5 class="card-text" style={{ display: "inline" }}>Window Cleaning</h5>
                                </div>
                                <div class="col-6">
                                    <img src="https://designarc.biz/demos/cleanex/assets/images/icons/icon-9.png" alt="arrow" ></img>
                                </div>
                            </div>
                        </div>
                    </div >
                </SwiperSlide>

            </Swiper>
        </>
    );
}
