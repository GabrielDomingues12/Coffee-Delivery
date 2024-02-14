import { CiBank, CiCreditCard1, CiLocationOn, CiMoneyBill } from "react-icons/ci"
import Tradicional from "../../assets/tradicional.png"
import { InputNumber } from "../../Components/InputNumber"
import { ButtonPay, CheckoutContent, CoffeCard, CoffesSelected, Confirm, Divider, Form, Frame, HeaderCard, HeaderFrame, InformationCoffe, InputAddress, InputRemove, OptionsPay, Price, TitleCoffeSelected, TitleFrame } from "./style"
import { TfiMoney } from "react-icons/tfi"
import { FaRegTrashAlt } from "react-icons/fa"

export const Checkout = () => {
  return (
    <CheckoutContent>
      <div>
        <TitleFrame>Complete seu pedido</TitleFrame>
        <Frame>
          <HeaderFrame>
            <CiLocationOn size={22} fill="#C47F17" />
            <div>
              <h2>Endereço da entrega</h2>
              <p>Informe o endereço onde deseja receber o seu pedido</p>
            </div>
          </HeaderFrame>
          <Form>
            <InputAddress type="text" placeholder="CEP" />
            <InputAddress type="text" className="col-span-3" placeholder="Rua" />
            <InputAddress type="text" placeholder="Número" />
            <InputAddress type="text" className="col-span-2" placeholder="Complemento" aria-placeholder="Complemento (opcional)" />
            <InputAddress type="text" placeholder="Bairro" />
            <InputAddress type="text" className="w-90" placeholder="Cidade" />
            <InputAddress type="text" className="w-12 ml-32" placeholder="UF" />
          </Form>
        </Frame>
        <CoffeCard>
          <HeaderCard>
            <TfiMoney size={22} fill="#8047F8" />
            <div>
              <h2>Pagamento</h2>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </HeaderCard>
          <OptionsPay>
            <ButtonPay>
              <CiCreditCard1 size={22} fill="#8047F8" /> CARTÃO DE CRÉDITO
            </ButtonPay>
            <ButtonPay>
              <CiBank size={22} fill="#8047F8" />
              CARTÃO DE DÉBITO
            </ButtonPay>
            <ButtonPay type="button">
              <CiMoneyBill size={22} fill="#8047F8" />
              DINHEIRO
            </ButtonPay>
          </OptionsPay>
        </CoffeCard>
      </div>
      <div style={{ marginLeft: '20px' }}>
        <TitleCoffeSelected>Cafés selecionados</TitleCoffeSelected>
        <CoffesSelected>
        <InformationCoffe>
            <img src={Tradicional} alt="" />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{}}>
                <h2>Expresso Tradicional</h2>
                <div style={{ display: 'flex' }}>
                  <InputNumber />
                  <InputRemove>
                    <FaRegTrashAlt fill="#8047F8" size={16} />
                    REMOVER
                  </InputRemove>
                </div>
              </div>
              <h2>R$ 9,90</h2>
            </div>
          </InformationCoffe>
          <Divider/>
          <InformationCoffe>
            <img src={Tradicional} alt="" />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{}}>
                <h2>Expresso Tradicional</h2>
                <div style={{ display: 'flex' }}>
                  <InputNumber />
                  <InputRemove>
                    <FaRegTrashAlt fill="#8047F8" size={16} />
                    REMOVER
                  </InputRemove>
                </div>
              </div>
              <h2>R$ 9,90</h2>
            </div>
          </InformationCoffe>
          <Divider></Divider>
          <Price>
            <div>
              <h3>Total de itens</h3>
              <h2>Entrega</h2>
              <h1>Total</h1>
            </div>
            <div>
              <h3>R$ 29,70</h3>
              <h2>R$ 3,50</h2>
              <h1>R$  33,20</h1>
            </div>
          </Price>
          <Confirm>CONFIRMAR PEDIDO</Confirm>
        </CoffesSelected>
      </div>
    </CheckoutContent>
  )
}
