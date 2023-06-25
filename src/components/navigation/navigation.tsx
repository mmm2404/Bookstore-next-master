import Link from "next/link";
import Image from "next/image";
import user from "../../../public/user.svg";
import basket from "../../../public/cart.svg";
import css from "./navigation.module.css";
import { useRouter } from 'next/router';
import LoginPage from "../loginpage/login";
import { useState } from "react";
import clsx from "clsx";
import { useAppSelector, useAppDispatch } from "@/store/redux";




export  default function Navigation (){
    const router = useRouter();
    const [menuActive, setMenuActive] = useState(false);

    const {items }= useAppSelector((state) => state.cart);

console.log(items)

    const handleLoginMenu = () =>{
   
    setMenuActive(!menuActive)
    };
    
    const getTotalQuantity = () => {
        let total = 0;
        items.forEach((item: { quantity: number; }) => {
          total += item.quantity
        })
        return total
      }

    return(
        <>
        <nav className={css.container}>
            <ul className={css.list}>
                <li className={css.item}><Link href="./" className={clsx({ [css.disabled]: router.asPath === "./" })}>books</Link></li>
                <li className={css.item}><Link href="./audio">Audiobooks</Link></li>
                <li className={css.item}><Link href="./stationery">Stationery & gifts</Link></li>
                <li className={css.item}><Link href="./blog">blog</Link></li>
                <li className={css.item}>
                    <Image className={css.user}
                    onClick={handleLoginMenu}
                     src={user} 
                     alt="Personal account "/></li>
                      {menuActive && <LoginPage/>}
                <li className={css.item}>
                    <Image onClick= {() => router.push('/shoppingcart')}className={css.cart}
                     src={basket}
                      alt="Your shopping cart"/><div className={css.inCart}>{getTotalQuantity() || 0}</div></li>
                     
            </ul>
        </nav>
        </>

    )
}