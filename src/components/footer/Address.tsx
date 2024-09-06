import { MyAddress } from "../../types/general";

const Address = ({ title, content }: MyAddress) => {
  return <div className="address">
    <h2>{title}</h2>
    <div>
      {
        content.map((item) => {
          return <p key={item.id}>{item.text}</p>
        })
      }
    </div>
  </div>
}
export default Address;