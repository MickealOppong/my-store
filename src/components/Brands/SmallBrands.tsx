import { useState } from "react";
import Wrapper from "../../css/SmallBrand";
import { ProductBrands } from "../../types/general";
import { brands } from "../../util/data";
import Brand from "./Brand";


const SmallBrands = () => {
  const [brandData] = useState<ProductBrands[]>(brands);



  return <Wrapper>
    <div className="small-brand">
      {
        brandData.map((br) => {
          return <Brand {...br} key={br.id} />
        })
      }

    </div>



  </Wrapper>
}


export default SmallBrands