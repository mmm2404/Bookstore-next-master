export type Price = {
    amount: number
    currencyCode: string
  }
  
  export interface IBookCard {
    key:string
    id: string
    cover: string
    authors: string[]
    title: string
    averageRating: number
    ratingCount: number
    description: string
    price: Price
    buyNow: Function
  }
  

export interface IBookList {
  books:IBookCard[];

}