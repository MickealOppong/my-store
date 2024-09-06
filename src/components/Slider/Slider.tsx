import { useEffect, useState } from "react";
import Wrapper from "../../css/Slider";
import { slideDat } from "../../util/data";
import Slide from "./Slide";

const Slider = () => {
  const [currIndex, setCurrIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {

      setCurrIndex(() => currIndex + 1)

      if (currIndex >= slideDat.length - 1) {
        setCurrIndex(() => 0)
      }

    }, 4000)
    return () => clearInterval(interval)
  }, [currIndex])

  return <Wrapper>
    {
      slideDat.map((item, index) => {
        //const { text, url, id, img } = item;
        return <article className="slide" key={item.id} style={{ transform: `translateX(${100 * (index - currIndex)}%)`, opacity: currIndex === index ? 1 : 0, transition: '0.5s', visibility: index === currIndex ? 'visible' : 'hidden' }} >
          <Slide {...item} />
        </article>
      })
    }
    <div className="btns">
      {
        Array.from({ length: slideDat.length }, (_, index) => {
          return <span className={`dot-btn ${index === currIndex ? 'active-btn' : ''}`} key={index}></span>
        })
      }
    </div>
  </Wrapper>
}

export default Slider