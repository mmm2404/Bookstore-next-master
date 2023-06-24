"use client"

import clsx from "clsx";
import Image from "next/image";
import css from "./slider.module.css";



 function SliderContent({activeIndex, sliderImage}){

    return(
    
         <section>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={clsx(css.slides,`${activeIndex === index ? [css.active] : [css.inactive] }`)}>
                <Image src={slide.urls} 
                      className={css.image}
                      alt=""/>
                </div>
            ))}
        </section>
 
    )

 }

 export default SliderContent;