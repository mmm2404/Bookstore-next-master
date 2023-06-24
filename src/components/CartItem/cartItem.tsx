import { ICartItem } from "@/types";
import css from "./cartItem.module.css";
export type {ICartItem} from "../../types" ;
import Image from "next/image";
import Preloader from "../../../public/placeholder.png";
import { useAppDispatch} from "@/store/redux";
import { incrementQuantity, decrementQuantity, removeItem} from "../../store/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import Rating from "../Stars/Raiting";



function CartItem ({ id, cover, authors, title, averageRating, ratingCount, price, quantity=0, delivery}:ICartItem){

const dispatch = useAppDispatch();

// const starTotal = 5;
// const starPercentage = (averageRating / starTotal) * 100;


 
 return(
<>
    <div className={css.book}>
      <div className={css.cover}>
        
{cover? <Image alt="book cover"loading="lazy" className={css.image} width={102}  height={151} src={cover}/>
: <Image alt="preloader book" className={css.loader} width={40}  height={40} src={Preloader}/>}
      </div>
      <div className={css.description}>
        <h2 className={css.title}>
          {title}
        </h2>
        <p className={css.author}>
          {authors}
        </p>
        <div className={css.rate}>
            <Rating
              ratingInPercent={40}
              showOutOf={true}/>
            <div className={css.reviews}>{ratingCount ? ratingCount : 10} reviews</div>
        </div>
        </div>
      </div>
  
    <div className={css.quantity}>
      <div className={css.counter}>
        <div title="press to deduct"                
                className={css.minusplus}
                onClick={() => {
                  dispatch(decrementQuantity(id))
             
          }}
        >-</div>
        <span>{quantity}</span>
        <div  title="press to add"
                 className={css.minusplus}
                 onClick={() => {
                   dispatch(
                    incrementQuantity(id)
            )
          }}
        >+</div>
      </div>
    </div>
    <div className={css.price}>
      {price.currencyCode }{' '}
      {(price.amount*quantity).toFixed(2)}
    </div>
    <div className={css.delivery}>
      Shipping: {delivery}
    </div>
    <div  className={css.trash} onClick={() => {
                   dispatch(
                    removeItem(id)
            )
          }}>
    <FaRegTrashAlt title="press to delete" />
    </div>   
 
    </>
 )
};

export default CartItem;