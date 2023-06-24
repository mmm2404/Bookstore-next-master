'use client'
import css from "./booklist.module.css"
import BookCard from "./bookCard";
import Preloader from "../../../public/Book.gif";





export default function BookList({ books, buyNow, nextPage, prevPage}:any) {





  return (
    <>
      <div className={css.result}>
        <div className={css.output} id="output">

          {books && books.map( (item:any) => 
            <BookCard
              key={item.id}
              id={item.id}
              cover={(item.volumeInfo.imageLinks) ? (item.volumeInfo.imageLinks.thumbnail) : Preloader}
              authors={item.volumeInfo.authors}
              title={item.volumeInfo.title}
              averageRating={item.volumeInfo.averageRating}
              ratingCount={item.volumeInfo.ratingsCount}
              description={item.volumeInfo.description}
              price={item.saleInfo.listPrice ? item.saleInfo.listPrice : ''}
              buyNow={buyNow}
            />
          )}
        </div>

        <div className={css.more} >
            <button type="button" className={css.next} onClick={() => prevPage()}>Previous Page</button>
            <button type="button"className={css.next} onClick={() => nextPage()}>Next Page</button>
         </div>
      
      </div>
    </>
  )
}
