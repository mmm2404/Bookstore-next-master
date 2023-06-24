"use client";
import clsx from "clsx";
import css from "./slider.module.css";


function Dots({activeIndex,onclick, sliderImage}){
    return(
        <>
        <div className={css.dotsContainer}>
            {sliderImage.map((slide,index) => (
              <div
                key={index}
                className={clsx(css.dots,`${activeIndex === index ? [css.activeDot] : ""}`)}
                onClick={() => onclick(index)}>
              </div> 
            ))}

        </div>
        </>
        
    )
}

export default Dots;