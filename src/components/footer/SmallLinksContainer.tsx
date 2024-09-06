import { FooterLinks } from "../../types/general"
import SmallLinks from "./SmallLinks"

const SmallLinksContainer = ({ data }: { data: FooterLinks[] }) => {
  return <div className="small-links">
    {

      data.map((item) => {
        return <SmallLinks title={item.title} data={item.content} key={item.id} />
      })
    }
  </div>
}
export default SmallLinksContainer