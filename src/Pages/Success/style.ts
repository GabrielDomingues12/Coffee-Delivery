import styled from "styled-components";

export const SuccessContent = styled.div`
    padding: 32px 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const TitleSuccess = styled.h1`
    font-weight: bolder;
    font-size: 2rem;
    color: ${props => props.theme['yellow-dark']};
`
export const HeaderTitle = styled.div`
    margin-bottom: 35px;
`
export const IlustrationSuccess = styled.div`
    margin-top: 144px;
`
export const OrderInfo = styled.div`
    padding: 40px;
    border: 1px solid #DBAC2C;
    width: 526px;
    border-radius: 6px 36px 6px;
`
export const List = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 25px;
`
export const Location = styled.div`
    border-radius: 1000px;
    background-color:${props => props.theme['purple']};
    padding: 8px;
    width: 32px;
    height: 32px;
`

export const Time = styled(Location)`
    background-color:${props => props.theme['yellow']};
`
export const Money = styled(Location)`
    background-color:${props => props.theme['yellow-dark']};
`