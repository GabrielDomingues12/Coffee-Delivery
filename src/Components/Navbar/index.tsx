import Logo from "../../assets/Logo.png"
import { Location, Nav, Actions, Content } from "./style";
import { Cart } from "../Cart";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate()

    function handleCheckout() {
        navigate('/checkout')
    }
    return (
        <Nav>
            <Content>
                <img src={Logo} />
                <Actions>
                    <Location>
                        <FaLocationDot size={22} />
                        Cuiaba, MT
                    </Location>
                    <Cart
                        functionNavigate={handleCheckout} />
                </Actions>
            </Content>
        </Nav>
    )
}
