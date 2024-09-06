import Wrapper from "../../css/Slider"
import { SlideData } from "../../types/general"


const Slide = ({ img, text, url }: SlideData) => {
  return <Wrapper>
    <img src={img} alt={url} />
    <div className="slide-content" >
      <div className="slide-text">
        <h2>{text}</h2>
      </div>
      <button className="slide-link"><a href={url}>sprawdz</a></button>
    </div>
  </Wrapper>
}

export default Slide