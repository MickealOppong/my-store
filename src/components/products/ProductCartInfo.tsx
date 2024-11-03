import { FormEvent } from "react";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAddToCart } from "../../hooks/useAddToCart";
import { useFetchProductAttributes } from "../../hooks/useFetchProductAttributes";
import { ProductAttributeDTO } from "../../types/general";
import FormInputNumber from "../general/FormInputNumber";
import ProductAttributeContainer from "../general/ProductAttributeContainer";



const ProductCartInfo = ({ id, name: productName, price, reducedPrice, productAttributeDTO }: { id: number, price: number, name: string, reducedPrice: number, productAttributeDTO: ProductAttributeDTO[] }) => {


  const { attributes } = useFetchProductAttributes(productName)
  const { addProductToCart, error, response } = useAddToCart()

  console.log(error);

  console.log(response);

  // console.log(attributes);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { quantity } = Object.fromEntries(formData);
    console.log(quantity);
    console.log(id);
    addProductToCart(id, parseInt(quantity as string))

  }




  return <Wrapper >
    <section className="cart-total-section">
      <div className="product-info" >
        <div className="name">
          <div className="name-container">
            <h2>{productName}</h2>
          </div>
        </div>
        <div className="product">
          <div className="product-price">
            <div className="price-info">
              <div className="price-container">
                <span className="price">{reducedPrice ? reducedPrice : price}</span>
                <span className="price-decimal">20 zl</span>
              </div>
              <div className="discount-container">
                <span>-10%</span>
              </div>
            </div>
            <div className="discount-info">
              <span>Original price before discount:</span>
              <span>{price}</span>
            </div>
          </div>
        </div>
        <div className="payment">
          <div className="payment-options">
            <h4>You can take advantage of our pay later options</h4>
            <div className="payment-info">
              <span className="icon"><GoPeople />payforme</span>
              <span className="text">zapłac pożniej</span>
            </div>
          </div>
        </div>
        <div className="form">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="attributes" style={{ display: attributes?.length === 0 ? "none" : 'flex' }}>
              <div className="product-attributes">
                {
                  attributes?.map((item) => {
                    let defIndex = 0;
                    item.productAttributeDTOS.map((i, index) => {
                      productAttributeDTO.map((t) => {
                        if (t.attributeValue === i.value) {
                          defIndex = index;
                        }
                      })

                    })

                    return <ProductAttributeContainer attribute={item.name} data={item.productAttributeDTOS} key={item.name} defAttributeValue={defIndex} />
                  })
                }
              </div>
            </div>
            <div className="quantity-container">
              <FormInputNumber defValue={1} name="quantity" width="input-width" />
            </div>
            <div className="btn-container">
              <button type="submit" className="add-cart-btn"><span>Add to cart</span></button>
              <Link to={'/checkout'} type="button" className="buy-now-btn"><span>Buy now</span></Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  </ Wrapper>
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
.cart-total-section{
    display: flex;
  flex-direction:column;
  background-color: var(---white);
}

   .product-info{
  display: flex;
  flex-direction:column; 
  }



    .name-container,
    .btn-container,
    .product-price,
    .payment-options,
    .product-attributes,
    .btn-container,
    .quantity-container{
      display: flex;
      flex-direction: column;
      max-width: var(---maxWidth-1);
      margin: 0 auto;
      width: 100%;
       }

       

       .product-price{
        flex-direction: row;
       }

       .quantity-container{
             padding-top:10px;
              padding-bottom:10px;
       }
        .name,
        .product,
        .payment,
        .attributes{
          padding-top:5px;
          padding-bottom:10px;
          border-bottom:var(---border) solid 1px;
       }

       .link{
        margin-top:1rem;
       }

.product-attributes{
  row-gap: 1rem;
}
.price-info{
  display: flex;
  align-items: center;
  column-gap:1rem;
  width: 100%;

}

.discount-info{
   display: flex;
  align-items: center;
  column-gap:10px;
  width: 100%;

}
.price-container{
  display: flex;
  align-items: center;
  column-gap:10px;
}

.price{
  color: var(---priceColor);
  font-weight:900;
  font-size:var(---fontSize-3);
}

.price-decimal{
  color:#ea5858;
  font-size:var(---fontSize-1);
}

.form-control{
  row-gap: 1rem;
  padding-top:10px;
}


.btn-container{
  display: flex;
  row-gap: 10px;
  padding-bottom:15px;
}

.discount-container{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  width: 4rem;
  height: 2rem;
  font-weight:900;
}


.payment-options{
  display: flex;
  flex-direction: column;
  
}

.payment-info{
  display: flex;
  align-items: center;
  column-gap:4rem;
}

.icon{
  display: flex;
  align-items: center;
  column-gap:5px;
  color: var(---textColor);
}

.text{
    color: var(---textColor);
}
.add-cart-btn,
.buy-now-btn{
display: flex;
align-items: center;
justify-content: center;
  background-color: var(---secondary);
  border-color:transparent;
  color: var(---white);
  width: 100%;
  height: 3rem;
  font-size:1rem;
  border-radius:5px;
}


.input-width{
  width: 8rem;
}


  @media screen and (min-width: 768px){

     .product-price{
        flex-direction: column;
       }
  }

`

export default ProductCartInfo