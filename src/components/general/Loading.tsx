import styled from "styled-components"

const Loading = () => {
  return <Wrapper >
    <div className="loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </Wrapper>

}
const Wrapper = styled.div`
  display: flex;
  
  .loading{
    display: flex;
    align-items: center;
    justify-content: center;
      column-gap:10px;
  }

  .loading span:nth-child(1){
     width: 20px;
    height: 20px;
    background-color: lightblue;
    border-radius:50%;
  }


    .loading span:nth-child(2){
     width: 15px;
    height: 15px;
    background-color: lightblue;
    border-radius:50%;
  }

  .loading span{
    width: 10px;
    height: 10px;
    background-color: lightblue;
    border-radius:50%;
    animation: bounce 1s linear infinite ;
  }

  @keyframes bounce {
    0%{
         width: 15px;
    height: 15px;
    }
50%{
     width: 10px;
    height: 10px;
}
100%{
     width: 5px;
    height: 5px;
}

  }

`
export default Loading