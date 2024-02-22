import { FaCartShopping } from "react-icons/fa6";
import { CartStyle } from "./style";

interface CartProps {
  color?: string
  colorIcons?: string
  functionNavigate?: () => void
}

export const Cart = ({ color, colorIcons, functionNavigate }: CartProps) => {
  return (
    <CartStyle
      color={color}
      colorIcons={colorIcons}
      onClick={functionNavigate}
    >
      <FaCartShopping size={22} />
    </CartStyle>
  )
}
