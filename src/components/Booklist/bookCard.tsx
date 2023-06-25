'use client'
import Image from "next/image";
import css from "./booklist.module.css"
import { IBookCard } from "./types";
import loader from "../../../public/Book.gif";
import { useAppDispatch } from "@/store/redux";
import { addCartItem } from "@/store/cartSlice";
import { useState } from "react";
import Rating from "../Stars/Raiting";





export default function BookCard({id,cover,authors,
      title,averageRating,ratingCount,description,price }:IBookCard) {


        const dispatch = useAppDispatch();



        const [inCart , setInCart] = useState<boolean>(false);

        // const starTotal = 5;
        // const starPercentage = (averageRating / starTotal) * 100;


        const buyNow = () => {

          dispatch(addCartItem({id,cover,authors,
            title,averageRating,ratingCount,description,price }));
             
          setInCart(!inCart);  

 
        }
        



  return (
    <>
     <div className={css.card}>
    <div className={css.container}> 
 
        <Image alt="book cover" loading="lazy" className={css.image} width={212}  height={307} src={cover}/>
  
       
    </div>
    <div className={css.info}>
      <div className={css.author}>{authors}</div>
      <div className={css.title}>{title}</div>
      <div className={css.rating}>
      <Rating
              ratingInPercent={40}
              showOutOf={true}  
          />
      <span className={css.reviews}>{ratingCount ? ratingCount : 10} reviews</span></div>
      <div className={css.description}>{description}</div>
     <p className={css.price}> {price.currencyCode}{' '}{price.amount}</p>


{inCart?
    (<button type="button" disabled={true} className={css.inCartBtn}>In the cart</button>):
    (<button type="button" onClick={() => buyNow()} className={css.buyBtn}>Buy now</button>) 
  }
    
   
    </div>

    </div>
    </>
   
  )
}