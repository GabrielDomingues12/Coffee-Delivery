import { FaCartShopping } from 'react-icons/fa6'
import { coffeProducts } from '../../Data'
import { Buy, Cards, CardsCoffe, HeaderProducts, Icons, Ilustration, ImageCoffes, InformationHeader, InformationText, Intro, Items, Paragraph, ParagraphCard, Picture, Price, Products, Tags, Title, TitleCard, TitleProducts } from './style'
import Imagem from "../../assets/Imagem.png"
import { Cart } from '../../Components/Cart'
import { InputNumber } from '../../Components/InputNumber'
import { useState } from 'react'

interface Product {
  id: string,
  image: string,
  name: string,
  type: string[]
}
export const Home = () => {
  const [addProduct, setAddProduct] = useState<Product[]>([])
  console.log(addProduct)
  const handleAddToCart = (product: Product) => {
    const newProduct: Product = {
      id: product.id,
      image: product.image,
      name: product.name,
      type: product.type
    }
    setAddProduct(prevProducts => [...prevProducts, newProduct])
  }

  return (
    <>
      <Intro>
        <div>
          <Title>
            <h1>Encontre o Café perfeito para qualquer hora do dia</h1>
          </Title>
          <Paragraph>Com o coffee Delivery você recebe seu café onde estiver, a qualquer hora</Paragraph>
          <Items>
            <Ilustration>
              <Icons color='yellowDark'>
                <FaCartShopping size={16} fill='#fff' />
              </Icons>
              Compra simples e segura
            </Ilustration>
            <Ilustration>
              <Icons color='base'><FaCartShopping size={16} fill='#fff' /></Icons>
              Embalagem mantém o café intacto
            </Ilustration>
            <Ilustration>
              <Icons color='yellow'><FaCartShopping size={16} fill='#fff' /></Icons>
              Entrega rápida e rastreada
            </Ilustration>
            <Ilustration>
              <Icons color='purple'><FaCartShopping size={16} fill='#fff' /></Icons>
              O café chega fresquinho até você
            </Ilustration>
          </Items>
        </div>
        <Picture>
          <img src={Imagem} style={{ width: '476px', height: '360px' }} />
        </Picture>
      </Intro>
      <Products>
        <HeaderProducts>
          <TitleProducts>Nossos cafés</TitleProducts>
          <div>
            <InformationHeader>TRADICIONAL</InformationHeader>
            <InformationHeader>ESPECIAL</InformationHeader>
            <InformationHeader>COM LEITE</InformationHeader>
            <InformationHeader>ALCOÓLICO</InformationHeader>
            <InformationHeader>GELADO</InformationHeader>
          </div>
        </HeaderProducts>
        <CardsCoffe>
          {coffeProducts.map((card) => (
            <Cards key={card.id}>
              <ImageCoffes src={card.image} alt="" />
              <Tags>
                {card.type.map((types) => (
                  <InformationText key={types}>{types}</InformationText>
                ))}
              </Tags>
              <TitleCard>{card.name}</TitleCard>
              <ParagraphCard>{card.description}</ParagraphCard>
              <Buy>
                <Price>R$ 9,90</Price>
                <InputNumber />
                <Cart
                  color='#4B2995'
                  colorIcons='#FFF'
                  functionNavigate={() => handleAddToCart(card)}
                />
              </Buy>
            </Cards>
          ))}
        </CardsCoffe>
      </Products>
    </>
  )
}
