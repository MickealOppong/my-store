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
export type Sub = {
  id: string;
  img: string,
  category: string;
}

export type Category = {
  id: string;
  icon: IconType;
  category: string;
  hasChildren(): boolean,
  sub: Category[]
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

export type Timeline = {
  id: string,
  text: string,
  url: string,
}



export type Option = {
  id: string,
  courier: string,
  cost: number,
  img: string,
  active: boolean
}
export type DeliveryOptions = {
  id: string,
  courier: string,
  cost: number,
  img: string,
  active: boolean

}

export type DeliveryAddress = {
  id: number,
  firstName: string,
  lastName: string,
  companyName: string,
  street: string,
  houseNumber: string,
  apartmentNumber: string,
  postCode: string,
  city: string,
  telephone?: string
}
export type InvoiceAddress = {
  id: number,
  companyTIN: string,
  companyName: string,
  street: string,
  houseNumber: string,
  apartmentNumber: string,
  postCode: string,
  city: string,

}



export type SelectedProduct = {
  id: number,
  name: string,
  price: number,
  description: string,
  shippingCost?: number,
  reducedPrice?: number,
  productImages: string[]
}

export type ProductAttributeDTO = {
  attributeName: string,
  attributeValue: string
}
export type SingleProduct = {
  id: number,
  name: string,
  price: number,
  description: string,
  shippingCost?: number,
  reducedPrice?: number,
  productImages: string[]
  productCategoryList: string[]
  productAttributeDTO: ProductAttributeDTO[]
}


export type ProductAttributeDTOS = {
  id: number,
  value: string,
  productId: number
}
export type AttributeDTO = {

  name: string,
  productAttributeDTOS: ProductAttributeDTOS[]


}

export type CartDto = {
  id: number,
  productId: number,
  productName: string,
  quantity: number,
  price: number,
  total: number,
  shippingCost: number,
  productImage: string[]
}