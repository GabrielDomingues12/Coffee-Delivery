import ImageSuccess from "../../assets/Illustration.png"
import { HeaderTitle, IlustrationSuccess, List, Location, Money, OrderInfo, SuccessContent, Time, TitleSuccess } from "./style"
import { PiTimerFill } from "react-icons/pi"
import { TiLocation } from "react-icons/ti"
import { TfiMoney } from "react-icons/tfi"
export const Success = () => {
    return (
        <SuccessContent>
            <div>
                <HeaderTitle>
                    <TitleSuccess>Uhu! Pedido confirmado</TitleSuccess>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </HeaderTitle>
                <OrderInfo>
                    <List>
                        <Location>
                            <TiLocation fill="#fff" />
                        </Location>
                        <div>
                            <h1>Entrega em Rua Jão Daniel Marinellit, 102</h1>
                            <p>Farrapos - Porto Alegre, RS</p>
                        </div>
                    </List>
                    <List>
                        <Time>
                            <PiTimerFill fill="#fff" />
                        </Time>
                        <div>
                            <h1>Previsão de entrega</h1>
                            <p>20 min - 30 min</p>
                        </div>
                    </List>
                    <List>
                        <Money>
                            <TfiMoney fill="#fff" />
                        </Money>
                        <div>
                            <h1>Pagamento na entrega</h1>
                            <p>Cartão de crédito</p>
                        </div>
                    </List>
                </OrderInfo>
            </div>
            <IlustrationSuccess>
                <img src={ImageSuccess} alt="" />
            </IlustrationSuccess>
        </SuccessContent>
    )
}
