'use client'
import css from "./categories.module.css";
import {  Categories } from "./types";

export default function Categories ({categories,active,setActiveCategory} : Categories){
   

     return(
        
        <section className={css.sidebar}>
            <div className={css.list}>
                <ul>
                    {categories.map((category, index) => (
                        <li
                        key={index}
                        className={active === index? css.active : ""}
                        onClick={() => setActiveCategory(index)}

                        >
                        {category}
                        </li>
                    ))}
                </ul>
        
            </div>
</section>
        
     )
}