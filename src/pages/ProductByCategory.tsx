
import { useState } from "react"
import { IoGrid } from "react-icons/io5"
import { TfiLayoutColumn3Alt } from "react-icons/tfi"
import styled from "styled-components"
import { CategoryProductContainer, CategoryProductContainerGrid, FeaturedProducts, Filter, PageHeader, PaginationContainer } from "../components"
import { lastWatched, polecamy } from "../util/data"
const ProductByCategory = () => {
  const [layout, setLayout] = useState<string>('landscape');
  const handleClick = () => {
    console.log('click');

  }
  return <Wrapper>
    <div className="parent">
      <div className="title">
        <PageHeader />
      </div>
      <section className="main">
        <div className="filter-container">
          <Filter />
        </div>

        <div className="products-container">
          <FeaturedProducts data={polecamy} title="Best  deals" />
          <div>
            <div className="header">
              <div className="sort-container">
                <select name="sort">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
              <div className="btn-container">
                <button onClick={() => handleClick()}><IoGrid /></button>
                <button onClick={() => handleClick()}><TfiLayoutColumn3Alt /></button>
              </div>
            </div>
            {
              layout === 'grid' ? <CategoryProductContainer data={lastWatched} /> :
                <CategoryProductContainerGrid data={lastWatched} />
            }
            <PaginationContainer />
          </div>

        </div>
      </section>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  
  background-color: var(---bgColor-1);



  .main{
    display: flex;
    justify-content: space-between;
    column-gap:1rem;
    width: 100%;
  }

  .filter-container{
    display: none;
  }


  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .products-container{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;

  }

.btn-container{
  display: flex;
  align-items: center;
  
}

.btn-container button{
  display: flex;
  justify-content: center;
  height: 2rem;
  background-color: transparent;
  border-color:transparent;
  color: var(---textColor-3);
  font-size:1.2rem;
}

  @media screen and (min-width: 768px){
    display: flex;
    column-gap:2rem;
  

    .parent{
      display: flex;
    flex-direction: column;
    max-width: var(---maxWidth-1);
    margin: 0 auto;
      width: 100%;
    
    }

    .filter-container{
    display: flex;
    width: 20vw;
    height: 60vh;
    background-color: var(---white);
    padding: 10px  20px 10px 20px;
  }

    .products-container{
    display: flex;
    width: 70vw;
  }

  }
  @media screen and (min-width: 1092px){
  

    .parent{
      display: flex;
    flex-direction: column;
    max-width: var(---maxWidth-1);
    margin: 0 auto;
      width: 100%;
    
    }

    .filter-container{
    display: flex;
    width: 32vw;
    }

    .products-container{
      display: flex;
      width: 72vw;
  }

  }
`
export default ProductByCategory