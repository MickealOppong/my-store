import { Store } from "@reduxjs/toolkit"
import { QueryClient } from "@tanstack/react-query"
import { useLoaderData } from "react-router-dom"
import styled from "styled-components"
import emptyBag from '../../assets/empty_bag.svg'
import { UserFavourite } from "../../types/general"
import { fetchFavourites } from "../../util/fetchFavourites"
import FavouriteItem from "../general/FavouriteItem"

const favCountQuery = (username: string, sessionId: string) => {
  return {
    queryKey: ['favourites'],
    queryFn: () => fetchFavourites(username, sessionId)
  }
}
export const loader = (store: Store, queryClient: QueryClient) => async () => {
  const sessionId = localStorage.getItem('_apx.sessionid') || '';
  const username = store.getState().userSlice.username;
  const response = await queryClient.fetchQuery(favCountQuery(username, sessionId))
  const userFavourite = response;
  return userFavourite;
}
const Favourites = () => {
  const { favouriteList } = useLoaderData() as UserFavourite

  if (favouriteList.length === 0) {
    return <Wrapper>
      <div>
        <img src={emptyBag} alt="" />
      </div>
    </Wrapper>
  }

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