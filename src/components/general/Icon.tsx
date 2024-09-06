import { IconType } from "react-icons"

type Icon = {
  icon: IconType
}
const Icon: React.FC<Icon> = ({ icon: Icon }) => {
  return <Icon />
}

export default Icon