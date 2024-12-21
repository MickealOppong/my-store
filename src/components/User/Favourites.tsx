import { Store } from "@reduxjs/toolkit"
import styled from "styled-components"
import { FavouriteDto } from "../../types/general"
import FavouriteItem from "../general/FavouriteItem"


export const loader = (store: Store) => async () => {


  return null;
}
const Favourites = () => {
  const favouriteList: FavouriteDto[] = []



  return <Wrapper>
    <div className="parent">
      <div className="title">
        <h2>Favourites</h2>
      </div>
      <div className="favourites">
        {
          favouriteList.map((item) => {
            return <FavouriteItem  {...item} key={item.id} />
          })
        }
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 99vw;


  .parent{
    display: flex;
    flex-direction:column;
    max-width: var(---maxWidth-1);
    margin: 0  auto;
    width: 100%;
  }


  .title{
    display: flex;
  }

  h2{
    font-weight:500;
  }


 .favourites{
  display: flex;
  flex-direction: column;
     row-gap: 20px;
 }
  @media screen and  (min-width: 768px){
    width: 70vw;
  }

    @media screen and  (min-width: 1092){
    width: 70vw;
  }
`
export default Favourites