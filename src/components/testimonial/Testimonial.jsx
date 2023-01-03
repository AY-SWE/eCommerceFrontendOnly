import React from "react";
import Hero from "../../assets/testimonialHero.png";
import css from "./Testimonial.module.css";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Our doubts are traitors and make us lose the good we oft might win
            by fearing to attempt
          </span>
        </div>

        <img src={Hero} alt="" />

        <div className={css.container}>
          <span>100k</span>
          <span>Happy Customer Review</span>
        </div>
      </div>
      <div className={css.reviews}>Reviews</div>
      <div className={css.carousel}>
        <Swiper
          className={css.tCarousel}
          slidesPerView={3}
          spaceBetween={25}
          slidesPerGroup={1}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
