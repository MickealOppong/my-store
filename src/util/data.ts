import { nanoid } from "nanoid";
import { BiChild } from "react-icons/bi";
import { BsLaptop } from "react-icons/bs";
import { FiFacebook, FiHeart, FiHelpCircle, FiInstagram, FiLinkedin, FiRepeat, FiSettings, FiShoppingCart, FiTag, FiUser } from "react-icons/fi";
import { LuGamepad } from "react-icons/lu";
import { PiCar, PiHospital, PiShirtFoldedThin } from "react-icons/pi";
import { RiMenuFold2Fill } from "react-icons/ri";
import { TbGardenCartOff } from "react-icons/tb";
import { Category, DeliveryOptions, ItemCategory, MyAddress, NavList, payOptions, Product, ProductBrands, SlideData, Social, Sub, UserMenuType } from "../types/general";

import { AiFillProduct, AiOutlineLike } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import bag from "../assets/bag.webp";
import blik from '../assets/blik.jpeg';
import dpd from '../assets/dpd.png';
import enyce from '../assets/enyce.png';
import gpay from '../assets/gpay.png';
import hm from '../assets/hm.png';
import inpost from '../assets/inpost.png';
import kanopy from '../assets/kanopy.webp';
import img1 from '../assets/kids.png';
import levi from '../assets/levi.png';
import nivea from '../assets/nivea.png';
import paypo from '../assets/paypo.png';
import payU from '../assets/payU.png';
import reserved from '../assets/reserved.png';
import roca from '../assets/roca.png';
import sohk from '../assets/sohk.png';
import table from '../assets/table.webp';
import tool from '../assets/tool.webp';
import visa from '../assets/visa.png';
import img2 from '../assets/women.jpg';

export const NavItems: NavList[] = [
  {
    id: 1,
    icon: RiMenuFold2Fill,
    name: 'kategorie',
    url: 'kategorie'

  },
  {

    id: 2,
    icon: FiHeart,
    name: 'ulubione',
    url: 'ulubione'
  },
  {
    id: 3,
    icon: FiShoppingCart,
    name: 'koszyk',
    url: 'cart'
  },
  {
    id: 4,
    icon: FiUser,
    name: 'swappi',
    url: 'my-account'
  },
]

export const bigNavItems: NavList[] = [
  {
    id: 1,
    icon: FiHeart,
    name: 'ulubione'
  },
  {
    id: 2,
    icon: FiUser,
    name: 'moje swappi'
  },
  {
    id: 3,
    icon: FiShoppingCart,
    name: 'moj koszyk'
  },

]


export const category: Category[] = [
  {
    id: nanoid(),
    category: 'Clothing',
    icon: CiShop,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [
      {
        id: nanoid(),
        category: 'Brand',
        icon: CiShop,
        hasChildren() {
          return this.sub.length > 0
        },
        sub: [
          {
            id: nanoid(),
            category: 'Enyce',
            icon: CiShop,
            hasChildren() {
              return this.sub.length > 0
            },
            sub: [
              {
                id: nanoid(),
                category: 'shoe',
                icon: CiShop,
                hasChildren() {
                  return this.sub.length > 0
                },
                sub: []
              },
              {
                id: nanoid(),
                category: 'suite',
                icon: CiShop,
                hasChildren() {
                  return this.sub.length > 0
                },
                sub: []
              },
              {
                id: nanoid(),
                category: 'Bags',
                icon: CiShop,
                hasChildren() {
                  return this.sub.length > 0
                },
                sub: []
              }
            ]
          },
          {
            id: nanoid(),
            category: 'Gucci',
            icon: CiShop,
            hasChildren() {
              return this.sub.length > 0
            },
            sub: []
          }
        ]
      },
      {
        id: nanoid(),
        category: 'Kitchen',
        icon: CiShop,
        hasChildren() {
          return this.sub.length > 0
        },
        sub: []
      }
    ]
  },
  {
    id: nanoid(),
    category: 'Ogrod',
    icon: TbGardenCartOff,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [
      {
        id: nanoid(),
        category: 'Machine',
        icon: CiShop,
        hasChildren() {
          return this.sub.length > 0
        },
        sub: [
          {
            id: nanoid(),
            category: 'Knife',
            icon: CiShop,
            hasChildren() {
              return this.sub.length > 0
            },
            sub: []
          },
          {
            id: nanoid(),
            category: 'Plates',
            icon: CiShop,
            hasChildren() {
              return this.sub.length > 0
            },
            sub: []
          }
        ]
      }
    ]
  },
  {
    id: nanoid(),
    category: 'Elektronika',
    icon: BsLaptop,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: []
  },
  {
    id: nanoid(),
    category: 'Moda',
    icon: PiShirtFoldedThin,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: []
  },
  {
    id: nanoid(),
    category: 'Motoryzacja',
    icon: PiCar,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [
      {
        id: nanoid(),
        category: 'BMW',
        icon: PiCar,
        hasChildren() {
          return this.sub.length > 0
        },
        sub: []
      }
    ]
  },
  {
    id: nanoid(),
    category: 'Dziecko',
    icon: BiChild,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: []
  },
  {
    id: nanoid(),
    category: 'Gry',
    icon: LuGamepad,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: []
  },

  {
    id: nanoid(),
    category: 'Zdrowie',
    icon: PiHospital,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: []
  }
  ,
  {
    id: nanoid(),
    category: 'Other',
    icon: AiFillProduct,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: []
  }


]
export const categoryMain: Category[] = [
  {
    id: nanoid(),
    category: 'Clothing',
    icon: CiShop,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [
      {
        id: nanoid(),
        category: 'Men',
        icon: CiShop,
        hasChildren() {
          return this.sub.length > 0
        },
        sub: [
          {
            id: nanoid(),
            category: 'Boxers',
            icon: CiShop,
            hasChildren() {
              return this.sub.length > 0
            },
            sub: []
          },
          {
            id: nanoid(),
            category: 'Shirts',
            icon: CiShop,
            hasChildren() {
              return this.sub.length > 0
            },
            sub: []
          }
        ]
      },
      {
        id: nanoid(),
        category: 'women',
        icon: CiShop,
        hasChildren() {
          return this.sub.length > 0
        },
        sub: []
      }
    ]
  },
  {
    id: nanoid(),
    category: 'Ogrod',
    icon: TbGardenCartOff,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [
      {
        id: nanoid(),
        category: 'Machine',
        icon: CiShop,
        hasChildren() {
          return this.sub.length > 0
        },
        sub: [
          {
            id: nanoid(),
            category: 'Knife',
            icon: CiShop,
            hasChildren() {
              return this.sub.length > 0
            },
            sub: []
          },
          {
            id: nanoid(),
            category: 'Plates',
            icon: CiShop,
            hasChildren() {
              return this.sub.length > 0
            },
            sub: []
          }
        ]
      }
    ]
  },
  {
    id: nanoid(),
    category: 'Elektronika',
    icon: BsLaptop,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [{
      id: nanoid(),
      category: 'Item 1',
      icon: CiShop,
      hasChildren() {
        return this.sub.length > 0
      },
      sub: [
        {
          id: nanoid(),
          category: 'Sub  1',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        },
        {
          id: nanoid(),
          category: 'Sub 2',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        }
      ]
    }]
  },
  {
    id: nanoid(),
    category: 'Moda',
    icon: PiShirtFoldedThin,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [{
      id: nanoid(),
      category: 'Item 1',
      icon: CiShop,
      hasChildren() {
        return this.sub.length > 0
      },
      sub: [
        {
          id: nanoid(),
          category: 'Sub  1',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        },
        {
          id: nanoid(),
          category: 'Sub 2',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        }
      ]
    }]
  },
  {
    id: nanoid(),
    category: 'Motoryzacja',
    icon: PiCar,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [
      {
        id: nanoid(),
        category: 'BMW',
        icon: PiCar,
        hasChildren() {
          return this.sub.length > 0
        },
        sub: []
      }
    ]
  },
  {
    id: nanoid(),
    category: 'Dziecko',
    icon: BiChild,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [{
      id: nanoid(),
      category: 'Item 1',
      icon: CiShop,
      hasChildren() {
        return this.sub.length > 0
      },
      sub: [
        {
          id: nanoid(),
          category: 'Sub  1',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        },
        {
          id: nanoid(),
          category: 'Sub 2',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        }
      ]
    }]
  },
  {
    id: nanoid(),
    category: 'Gry',
    icon: LuGamepad,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [{
      id: nanoid(),
      category: 'Item 1',
      icon: CiShop,
      hasChildren() {
        return this.sub.length > 0
      },
      sub: [
        {
          id: nanoid(),
          category: 'Sub  1',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        },
        {
          id: nanoid(),
          category: 'Sub 2',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        }
      ]
    }]
  },

  {
    id: nanoid(),
    category: 'Zdrowie',
    icon: PiHospital,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [{
      id: nanoid(),
      category: 'Item 1',
      icon: CiShop,
      hasChildren() {
        return this.sub.length > 0
      },
      sub: [
        {
          id: nanoid(),
          category: 'Sub  1',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        },
        {
          id: nanoid(),
          category: 'Sub 2',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        }
      ]
    }]
  }
  ,
  {
    id: nanoid(),
    category: 'Other',
    icon: AiFillProduct,
    hasChildren() {
      return this.sub.length > 0
    },
    sub: [{
      id: nanoid(),
      category: 'Item 1',
      icon: CiShop,
      hasChildren() {
        return this.sub.length > 0
      },
      sub: [
        {
          id: nanoid(),
          category: 'Sub  1',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        },
        {
          id: nanoid(),
          category: 'Sub 2',
          icon: CiShop,
          hasChildren() {
            return this.sub.length > 0
          },
          sub: []
        }
      ]
    }]
  }


]

export const subCategory: Sub[] = [
  {
    id: nanoid(),
    category: 'Clothing',
    img: table
  },
  {
    id: nanoid(),
    category: 'Ogrod',
    img: table
  },
  {
    id: nanoid(),
    category: 'Elektronika',
    img: table
  },
  {
    id: nanoid(),
    category: 'Moda',
    img: table
  },
  {
    id: nanoid(),
    category: 'Motoryzacja',
    img: table
  },
  {
    id: nanoid(),
    category: 'Dziecko',
    img: table
  },
  {
    id: nanoid(),
    category: 'Gry',
    img: table
  },

  {
    id: nanoid(),
    category: 'Zdrowie',
    img: table
  }


]

export const slideDat: SlideData[] = [
  {
    id: nanoid(),
    img: img1,
    text: 'summer sale',
    url: ''
  },
  {
    id: nanoid(),
    img: img2,
    text: 'women winter collections',
    url: ''
  },
  {
    id: nanoid(),
    img: img2,
    text: 'men',
    url: ''
  }
]


export const brands: ProductBrands[] = [
  { id: nanoid(), brand: hm },
  { id: nanoid(), brand: levi },
  { id: nanoid(), brand: nivea },
  { id: nanoid(), brand: reserved },
  { id: nanoid(), brand: enyce },
  { id: nanoid(), brand: sohk },
  { id: nanoid(), brand: roca },

]

export const polecamy: Product[] = [
  {
    id: nanoid(),
    img: bag,
    description: 'SPAWARKA INWERTOROWA INWERTEROWA 315A LCD MMA TIG KĄTOWNIK MASKA PRZEWODY',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {
    id: nanoid(),
    img: bag,
    description: 'SPAWARKA INWERTOROWA INWERTEROWA 315A LCD MMA TIG KĄTOWNIK MASKA PRZEWODY',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {
    id: nanoid(),
    img: bag,
    description: 'SPAWARKA INWERTOROWA INWERTEROWA 315A LCD MMA TIG KĄTOWNIK MASKA PRZEWODY',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {

    id: nanoid(),
    img: bag,
    description: 'SPAWARKA INWERTOROWA INWERTEROWA 315A LCD MMA TIG KĄTOWNIK MASKA PRZEWODY',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {
    id: nanoid(),
    img: bag,
    description: 'SPAWARKA INWERTOROWA INWERTEROWA 315A LCD MMA TIG KĄTOWNIK MASKA PRZEWODY',
    price: 120.99,
    shipping: 'darmowa dostawy'
  }
]

export const sale: Product[] = [
  {
    id: nanoid(),
    img: kanopy,
    description: 'Sofa STELLA rozkładana z pojemnikiem na pościel kanapa łóżko',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {
    id: nanoid(),
    img: kanopy,
    description: 'Sofa STELLA rozkładana z pojemnikiem na pościel kanapa łóżko',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {
    id: nanoid(),
    img: bag,
    description: 'SPAWARKA INWERTOROWA INWERTEROWA 315A LCD MMA TIG KĄTOWNIK MASKA PRZEWODY',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {
    id: nanoid(),
    img: kanopy,
    description: 'Sofa STELLA rozkładana z pojemnikiem na pościel kanapa łóżko',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {
    id: nanoid(),
    img: bag,
    description: 'SPAWARKA INWERTOROWA INWERTEROWA 315A LCD MMA TIG KĄTOWNIK MASKA PRZEWODY',
    price: 120.99,
    shipping: 'darmowa dostawy'
  }
]

export const lastWatched: Product[] = [
  {
    id: nanoid(),
    img: tool,
    description: 'Zestaw narzędzi do naprawy telefonów gsm tabletów',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {

    id: nanoid(),
    img: tool,
    description: 'Zestaw narzędzi do naprawy telefonów gsm tabletów',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {
    id: nanoid(),
    img: bag,
    description: 'SPAWARKA INWERTOROWA INWERTEROWA 315A LCD MMA TIG KĄTOWNIK MASKA PRZEWODY',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {
    id: nanoid(),
    img: tool,
    description: 'Zestaw narzędzi do naprawy telefonów gsm tabletów',
    price: 120.99,
    shipping: 'darmowa dostawy'
  },
  {
    id: nanoid(),
    img: bag,
    description: 'SPAWARKA INWERTOROWA INWERTEROWA 315A LCD MMA TIG KĄTOWNIK MASKA PRZEWODY',
    price: 120.99,
    shipping: 'darmowa dostawy'
  }
]


export let itemCategories: ItemCategory[] = [
  { id: nanoid(), img: table, category: 'furniture', },
  { id: nanoid(), img: table, category: 'Cosmetics' },
  { id: nanoid(), img: table, category: 'Jeans', },
  { id: nanoid(), img: table, category: 'Books', },
]



export let addressData: MyAddress = {
  id: nanoid(),
  title: 'address',
  content: [
    { id: nanoid(), text: '21 Mango Street Avenue, Apartment 1 Shawshank, Wolborz Gmina' },
    { id: nanoid(), text: 'opp.mic@gmail.com' },
    {
      id: nanoid(), text: '+48 759 593 752'
    }
  ]

}

export let footerContent = [
  {
    id: nanoid(),
    title: 'O nas',
    content: [
      { id: nanoid(), text: 'Firma', url: '' },
      { id: nanoid(), text: 'Karery', url: '' },
      { id: nanoid(), text: 'wisja', url: '' },
      { id: nanoid(), text: 'Kontakt', url: '' },
    ]
  },
  {
    id: nanoid(),
    title: 'Informacje',
    content: [
      { id: nanoid(), text: 'polityka prywatnosći', url: '' },
      { id: nanoid(), text: 'regulaminy', url: '' },
      { id: nanoid(), text: 'twoje zgody na ciasteczka', url: '' },
      { id: nanoid(), text: 'Stosowanie rozporządzeń UE', url: '' },
    ]
  },
  {
    id: nanoid(),
    title: 'Dla kupujących',
    content: [
      { id: nanoid(), text: 'Darmowa dostawa', url: '' },
      { id: nanoid(), text: 'Polityka zwrotów', url: '' },
      { id: nanoid(), text: 'Zwroty', url: '' },
      { id: nanoid(), text: 'Program Ochrony Kupujących', url: '' },
      { id: nanoid(), text: 'płatnosci', url: '' },
    ]
  },
  {
    id: nanoid(),
    title: 'Pomoc',
    content: [
      { id: nanoid(), text: 'kontakt', url: '' },
      { id: nanoid(), text: 'moje konto', url: '' },
      { id: nanoid(), text: 'regulaminy', url: '' },
      { id: nanoid(), text: 'usługi', url: '' },
    ]
  },
]

export let paymentOptions: payOptions[] = [
  {
    id: nanoid(),
    icon: visa,
  },
  {
    id: nanoid(),
    icon: payU
  },
  {
    id: nanoid(),
    icon: paypo
  },
  {
    id: nanoid(),
    icon: blik
  },
  {
    id: nanoid(),
    icon: gpay
  }
]



export let socialLinks: Social[] = [
  {
    id: nanoid(),
    icon: FiFacebook,
    url: 'https://facebook.com'
  },

  {
    id: nanoid(),
    icon: FiInstagram,
    url: 'https://instagram.com'
  },
  {
    id: nanoid(),
    icon: FiLinkedin,
    url: 'https://linkedin.com'
  },
]

export let userMenu: UserMenuType[] = [
  {
    id: nanoid(),
    text: 'Purchased products',
    icon: FiShoppingCart,
    url: 'orders'
  },
  {
    id: nanoid(),
    text: 'Favourites',
    icon: FiHeart,
    url: 'ulubione',
    quantity: 1
  }, {
    id: nanoid(),
    text: 'Reviews',
    icon: AiOutlineLike,
    url: 'reviews',
    quantity: 2
  },
  {
    id: nanoid(),
    text: 'Discounts',
    icon: FiTag,
    url: 'discounts'
  },
  {
    id: nanoid(),
    text: 'help',
    icon: FiHelpCircle,
    url: 'help-center'
  },
  {
    id: nanoid(),
    text: 'returns',
    icon: FiRepeat,
    url: ''
  },
  {
    id: nanoid(),
    text: 'account settings',
    icon: FiSettings,
    url: 'account-setting'
  },

]

export const deliveryOptions: DeliveryOptions[] = [
  {
    id: nanoid(),
    courier: 'Inpost',
    cost: 10.99,
    img: inpost,
    active: true
  },
  {
    id: nanoid(),
    courier: 'DPD',
    cost: 11.00,
    img: dpd,
    active: false
  },

]


