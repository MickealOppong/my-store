import { Store } from "@reduxjs/toolkit"
import styled from "styled-components"
import { useGetUserFavouriteQuery } from "../../features/api/favouriteApi"
import { useAppSelector } from "../../hooks/hooks"
import FavouriteItem from "../general/FavouriteItem"
import Loading from "../general/Loading"


export const loader = (store: Store) => async () => {


  return null;
}
const Favourites = () => {
  const userId = useAppSelector((state) => state.userSlice.id)
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const { data: favouriteList, isLoading } = useGetUserFavouriteQuery({ userId, token })


  if (isLoading) {
    return <Loading />
  }
  if (!favouriteList) {
    return <div>
      <h2>You have not added any product to favourites</h2>
    </div>
  }


  return <Wrapper>
    <div className="parent">
      <div className="title">
        <h2>Favourites</h2>
      </div>
      <div className="favourites">
        {
          favouriteList?.favouriteList.map((item) => {
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