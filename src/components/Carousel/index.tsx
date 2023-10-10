"use client";
import React, { ReactNode } from "react";

import { Swiper, SwiperProps } from "swiper/react";

import "swiper/css";

const Carousel: React.FC<
  { children: ReactNode; className?: string } & SwiperProps
> = ({ children, className, ...props }) => {
  return (
    <Swiper className={className} slidesPerView={1}>
      {children}
    </Swiper>
  );
};

export default Carousel;
