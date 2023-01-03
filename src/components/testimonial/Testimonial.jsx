import React from "react";
import Hero from "../../assets/testimonialHero.png";
import css from "./Testimonial.module.css";
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
    </div>
  );
};

export default Testimonial;
