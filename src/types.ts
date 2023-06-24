import { Price } from "./components/Booklist/types"

export interface ICartBook {
    cover: string
    authors: string[]
    title: string
    averageRating: number
    ratingCount: number
    price: Price
  }
  
  export interface ICartItem {
    id: string
    cover: string
    authors: string[]
    title: string
    averageRating: number
    ratingCount: number
    price: Price
    quantity: number
    delivery: string

  }
  
  export interface IShoppingCart {
    items: ICartItem[]

  }
