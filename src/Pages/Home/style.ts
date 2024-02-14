import styled from "styled-components";

const colorIcons = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    base: 'base-text',
    purple: 'purple',
} as const

interface IconColor {
    color: 'yellowDark' | 'yellow' | 'base' | 'purple';
}
export const Intro = styled.div`
 height: 544px;
 padding: 32px 160px;
 display: flex;
`
export const Title = styled.div`
    width: 588px;
    font-size: 3rem;
    font-weight: 900;
    text-align: left;
`

export const Paragraph = styled.p`
    margin-top: 1rem;
    width: 588px;
    font-size: 1.3rem;
    line-height: 1.3;
    padding: 3px;
    margin-bottom: 1rem;
`

export const Items = styled.div`
    width: 567px;
    height: 84px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 60px 40px;
`
export const Vector = styled.div`
    background-color: ${props => props.theme['yellow']};
    width: 426px;
    height: 196px;
    transform: rotate(-177deg);
    mix-blend-mode: normal;
    opacity: 15%;
    position: relative;
`
export const Icons = styled.div<IconColor>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 8px 8px;
    background-color: ${props => props.theme[colorIcons[props.color]]};
`

export const Ilustration = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    margin-top: 30px;
`

export const Picture = styled.div`
    /* display: flex; */
`

export const Products = styled.div`
    padding: 32px 160px;
    margin-top: -100px;
    max-width: 1440px;
 `
export const HeaderProducts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`
export const TitleProducts = styled.h1`
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 54px;
`
export const Cards = styled.div`
    width: 256px;
    height: 310px;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px 36px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    `

export const CardsCoffe = styled.div`
    gap: 40px 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 1120px;
`

export const ImageCoffes = styled.img`
    width: 120px;
    height: 120px;
    margin-top: -20px;
`

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`
export const Buy = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
export const TitleCard = styled.h4`
    color: ${props => props.theme['base-title']};
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
`
export const ParagraphCard = styled.p`
    color: ${props => props.theme['base-label']};
    font-size: 14px;
    padding: 20px;
    margin-top: -10px;
`
export const Price = styled.h4`
    color: ${props => props.theme['base-title']};
    font-size:20px;
    font-weight: bold;
`
export const InformationText = styled.span`
    min-height: 21px;
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    border-radius: 100px;
    padding: 4px 8px;
    margin-top: 15px;
    font-size: 10px;
    font-weight: bold;
`
export const InformationHeader = styled(InformationText)`
    background-color: #fff;
    border: 1px solid  ${props => props.theme['yellow-dark']};
    font-weight: bold;
    margin-left:8px ;
`  