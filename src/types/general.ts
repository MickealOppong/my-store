import { IconType } from "react-icons";

export type Search = {
  name: string;
  placeholder: string;

}

export type NavList = {
  id: number;
  icon: IconType
  name: string;
  url?: string
}


export type Category = {
  id: string;
  icon: IconType;
  category: string;
  url: string
}
export type Social = {
  id: string;
  icon: IconType;
  url: string
}

export type ItemCategory = {
  id: string;
  img: string;
  category: string;
  url: string
}

export type SlideData = {
  id: string;
  img: string;
  text: string;
  url: ''
}

export type ProductBrands = {
  id: string;
  brand: string;
  url?: string
}
export type Title = {
  title: string
}

export type Product = {
  id: string,
  img: string;
  description: string;
  price: number;
  shipping: string
}

export type Content = {

  id: string,
  text: string,
  url?: string

}
export type MyAddress = {
  id: string,
  title: string,
  content: Content[]

}

export type FooterLinks = {
  id: string,
  title: string,
  content: Content[]
}
export type payOptions = {
  id: string,
  icon: string
}

export type UserMenuType = {
  id: string,
  text: string,
  url?: string,
  icon: IconType,
  quantity?: number

}

export type ProductImages = {

  id: string,
  img: string
}