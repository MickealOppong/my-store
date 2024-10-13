
import { useState } from "react"
import { IoGrid } from "react-icons/io5"
import { TfiLayoutColumn3Alt } from "react-icons/tfi"
import styled from "styled-components"
import { CategoryProductContainer, CategoryProductContainerGrid, FeaturedProducts, Filter, PageHeader, PaginationContainer } from "../components"
import { lastWatched, polecamy } from "../util/data"
import { getFromLocalStorage, saveToLocalStorage } from "../util/util"
const ProductByCategory = () => {
  const [layout, setLayout] = useState<string>(getFromLocalStorage('layout') || 'landscape');

  const changeLayout = (input: string) => {
    if (layout !== input) {
      setLayout(input)
    }
    saveToLocalStorage('layout', input)
  }



  return <Wrapper>
    <div className="parent">
      <div className="title" >
        <PageHeader />
      </div>
      <section className="main">
        <div className="filter-container" >
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
                <button className={`grid ${layout === 'grid' ? 'active-btn' : ''}`} onClick={() => changeLayout('grid')}><IoGrid /></button>
                <button className={`landscape ${layout === 'landscape' ? 'active-btn' : ''}`} onClick={() => changeLayout('landscape')}><TfiLayoutColumn3Alt /></button>
              </div>
            </div>
            {
              layout === 'grid' ? <CategoryProductContainerGrid data={lastWatched} /> : <CategoryProductContainer data={lastWatched} />
            }
            <div className="pagination">
              <PaginationContainer />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  display: flex;
  width: 100vw;
  background-color: var(---ghost);

.parent{
  display: flex;
  flex-direction:column;

}
  .main{
    display: flex;
    align-items: start;
    justify-content: space-between;
    column-gap:1rem;
    width: 100%;
  }

  .filter-container{
    position: sticky;
    display: none;
    background-color:var(---white);
  }


  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(---maxWidth-2);
    margin: 1rem auto;
    width: 100%;
    
  }
  .products-container{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100vw;
  }

.btn-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap:2px;

}

.grid,
.landscape{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-color:transparent;
}

.active-btn{
  border:var(---primary) solid 2px;
  border-radius:5px;
}

.pagination{
  display: flex;
  align-items: center;
  justify-content: center;
  padding:1rem;
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
    flex-direction: column;
    width: 20vw;
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

    }

    .products-container{
      display: flex;
      width: 72vw;
  }

  }
`
export default ProductByCategory