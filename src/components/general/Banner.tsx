import { FiChevronRight } from "react-icons/fi";
import Wrapper from "../../css/Banner";

const Banner = ({ text, url, image }: { text: string, url: string, image: string }) => {
  return <Wrapper>
    <img src={image} alt="" />
    <div className="banner-info">
      <h2>{text}</h2>
    </div>
    <button className="link-btn"><a href={url}>sprawdz</a><FiChevronRight /></button>
  </Wrapper>

}

export default Banner;