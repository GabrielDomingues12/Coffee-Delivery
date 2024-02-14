import Logo from "../../assets/Logo.png"
import { Location, Nav, Actions, Content } from "./style";
import { Cart } from "../Cart";
import { FaLocationDot } from "react-icons/fa6";

export const Navbar = () => {
    return (
        <Nav>
            <Content>
                <img src={Logo} />
                <Actions>
                    <Location>
                        <FaLocationDot size={22} />
                        Cuiaba, MT
                    </Location>
                    <Cart />
                </Actions>
            </Content>
        </Nav>
    )
}
