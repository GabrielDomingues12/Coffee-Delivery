import { FaCartShopping } from "react-icons/fa6";
import { CartStyle } from "./style";

interface CartProps {
  color?: string
  colorIcons: string
}
export const Cart = ({color, colorIcons}: CartProps) => {
  return (
    <CartStyle 
      color={color}
      colorIcons={colorIcons}
    >
        <FaCartShopping size={22}/>
    </CartStyle>
  )
}
