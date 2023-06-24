import  { useState, useEffect} from "react";
import css from "./slider.module.css";
import first from "../../../public/slider1_new size.jpg";
import second from "../../../public/slider2.jpg";
import third  from "../../../public/slider3.jpg";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import arrow from "../../../public/arrow.svg";
import Image from "next/image";



export const sliderImage = [
    {   urls: first,
        title:'first',
},
    {   urls: second,
        title:'second',
},
    {   urls: third,
        title:'third',
}
];

const len = sliderImage.length -1;

function SliderReact(props){
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() =>{
        const interval = setInterval(() =>{
            setActiveIndex(activeIndex ===len? 0 : activeIndex +1);
        }, 3000);
        return() => clearInterval(interval);
        
    },[activeIndex])

    return(
        <>
        <div className={css.container}>
            <div className={css.sliderContainer}>
                <SliderContent activeIndex={activeIndex} sliderImage={sliderImage}/>
            </div>
                <Dots activeIndex={activeIndex}
                    sliderImage={sliderImage}
                    onclick={(activeIndex) => setActiveIndex(activeIndex)}/>
        </div>
        <div className={css.promo}><div className={css.blockone}><p>Change old book on new</p><Image src={arrow} alt="promo arrow"/></div></div>
        <div className={css.top_books}><div className={css.blocktwo}><p>top 100 books 2022</p><Image src={arrow} alt="promo arrow"/></div></div> 
         
        </>
    
         
     
    )


}

export default SliderReact;