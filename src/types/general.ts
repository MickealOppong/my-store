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

export type DeliveryAddressDto = {
  orderId?: number,
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
export type InvoiceAddressDto = {
  id: number,
  companyNIP: string,
  companyName: string,
  lastName: string,
  firstName: string,
  street: string,
  houseNumber: string,
  apartmentNumber: string,
  postCode: string,
  city: string,
  telephone: string,
  orderId?: number,

}

export type AddressDto = {
  id: number,
  companyNIP: string,
  companyName: string,
  lastName: string,
  firstName: string,
  street: string,
  houseNumber: string,
  apartmentNumber: string,
  postCode: string,
  city: string,
  telephone: string
  orderId: number,
  globalAddressId: number

}


export type SelectedProduct = {
  id: number,
  name: string,
  price: number,
  description: string,
  shippingCost?: number,
  reducedPrice?: number,
  productImages: string[],
}

export type ProductAttributeDTO = {
  attributeName: string,
  attributeValue: string
}
export type SingleProductDto = {
  id: number,
  name: string,
  price: number,
  description: string,
  shippingCost?: number,
  reducedPrice?: number,
  productImages: string[]
  productCategoryList: string[]
  productAttributeDTO: ProductAttributeDTO[],
  isFavourite: boolean
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

export type UserCart = {
  cartList: CartDto[]
  includeAllItems: boolean
  id: number
}


export type UserFavourite = {
  favouriteList: FavouriteDto[]
  id: number
}


export type CartDto = {
  id: number,
  productId: number,
  productName: string,
  quantity: number,
  price: number,
  total: number,
  shippingCost: number,
  productImages: string[],
  include: boolean
}


export type FavouriteDto = {
  id: number,
  productId: number,
  productName: string,
  price: number,
  productImage: string,
}

export type PaymentMethod = {
  id: number,
  paymentMethod: string
  image: string
}

export type OrderLines = {
  productName: string,
  quantity: number,
  price: number,
  productImage: string,
  productId: number
}
export type Order = {
  id: number,
  username: string,
  courier: string;
  courierCost: number,
  completed: boolean,
  paid: boolean,
  delivered: boolean,
  shipped: boolean,
  paymentMethod: string,
  orderTotal: number,
  orderLineItems: OrderLines[],
  orderDeliveryAddress: AddressDto,
  orderInvoiceAddress: AddressDto
}
export type ResponseData = {
  deliveryAddressList: AddressDto[],
  invoiceAddressList: InvoiceAddressDto[],
  courierList: CourierDto[],
  paymentMethods: PaymentMethod[],
  userOrder: Order,
  invoicePersonAddressList: AddressDto[],
  invoiceFirmAddressList: AddressDto[]
}

export type CourierDto = {
  id: number,
  courier: string;
  price: number,
  deliveryDate: string
}


export type UserResponseData = {
  deliveryAddressList: AddressDto[],
  invoicePersonAddressList: AddressDto[],
  invoiceFirmAddressList: AddressDto[],
  userOrder: Order[],
  likedProducts: UserFavourite[]
}