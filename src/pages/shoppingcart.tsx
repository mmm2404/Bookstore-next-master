
import Layout from "@/components/layout/layout";
import css from "../styles/cart.module.css";
import { ICartItem, IShoppingCart } from "../types";
import { useAppSelector, useAppDispatch } from "@/store/redux";
import CartItem from "@/components/CartItem/cartItem";
import { checkout} from "@/store/cartSlice";


export default function ShoppingCart({ id, cover, authors, title, averageRating, ratingCount, price, quantity=0, delivery}:ICartItem) {

  const dispatch = useAppDispatch();
  const { items }:IShoppingCart = useAppSelector((state) => state.cart );
  const total = useAppSelector((state) => state.cart.items.reduce((total: number, item: { price: { amount: number; }; quantity: number; }) =>
  total + item.price.amount*item.quantity, 0))


    return (
      <Layout>
        <div className={css.cart}>
      <div className={css.container}>
        <h2 className={css.name}>Shopping cart</h2>
        <ul className={css.fields}>
          <li>item</li>
          <li>quantity</li>
          <li>price</li>
          <li>delivery</li>
          <li>delete</li>
        </ul>
        <ul className={css.cartList}>
          {+items.length?(
            items?.map((item:any) => (
             <li key={item.id}> <CartItem
              key={item.id}
              id={item.id}
              cover={item.cover}
              title={item.title}
              authors={item.authors} 
              quantity={item.quantity}
              averageRating={item.averageRating}
              ratingCount={item.ratingCount}
              price={item.price}
              delivery={item.delivery}
                /></li>
            ))
       ) : <p className={css.massage}>UPS! Your basket is still empty. Please go back to <a href="./">Home page </a>to browse some books</p>}
        </ul>
        <div className={css.total}>Total price: {total.toFixed(2)}</div>
        <button  onClick={() => dispatch(checkout())}className={css.checkout}>checkout</button>
      </div>
    </div>
  

      </Layout>
    );
}

