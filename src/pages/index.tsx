

import Layout from "@/components/layout/layout";
import Categories from "@/components/Categories/categories";
import BookList from "@/components/Booklist/booklist";
import SliderReact from "@/components/SliderReact/Slider";
import { useState, useEffect } from "react";
import css from "../styles/home.module.css";
import scrollTo from "@/utils";
import { sliderImage } from "@/components/SliderReact/Slider";




const apiURL = "https://www.googleapis.com/books/v1/volumes?";
const apiKey = "AIzaSyAYv6TrMmr1DRuHh5PRlztKi-ATjoGNPMU";




export default function Home() {

 
  
const categories = [
  'Architecture','Art & Fashion', 'Biography','Business','Crafts & Hobbies','Drama', 'Fiction',
'Food & Drink','Health & Wellbeing','History & Politics', 'Humor','Poetry','Psychology','Science', 'Technology',
  'Travel & Maps']

  const [activeCategory, setActiveCategory] = useState(0);
  const [booksNow, setBooks] = useState([])
  const [startIndex, setStartIndex] = useState(0);


  let query = {
    key: `${apiKey}`,
    maxResults:`8`,
    printType: 'books',
    langRestrict: 'en',
    filter:'paid-ebooks',
    startIndex: `${startIndex}`,
    q:`Subject:${categories[activeCategory]}`,

  }
  const reqParams = new URLSearchParams(query);
  const params =reqParams.toString();


  async function getBooks(){

    const res = await fetch(`${apiURL}${params}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }else{
      const data =  await res.json();
      setBooks(data.items);

    }
   
  }


  useEffect(() => {
 

    getBooks();

  },  [activeCategory, startIndex]);

  const nextPage = () => {
    setStartIndex(startIndex + 6);
    scrollTo(500,100)

  }
  const prevPage = () => {
    setStartIndex(startIndex - 6);
    scrollTo(500,100)
  }

  
  return (
    <Layout>
      
      <SliderReact sliderImage={sliderImage}/>
      <div className={css.container}>
        <div className={css.section}>
          <Categories categories={categories} active={activeCategory} setActiveCategory={setActiveCategory} />
          <BookList books={booksNow} nextPage={nextPage} prevPage={prevPage}/> 
         </div>
  
      </div> 

    </Layout>
  )
}
