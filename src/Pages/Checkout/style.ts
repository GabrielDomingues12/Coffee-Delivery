import styled from "styled-components";
import tw from "tailwind-styled-components"

export const TitleFrame = styled.h1`
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 10px;
`;
export const TitleCoffeSelected = styled.h1`
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

export const CheckoutContent = styled.div`
    padding: 32px 160px;
    display: flex;
    justify-content: space-between;
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['base-card']};
    padding: 40px;
    border-radius: 6px;
`;

export const HeaderFrame = styled.div`
    display: flex;
    gap: 8px;
    h2 {
        color: ${(props) => props.theme['base-title']};
        font-weight: bold;
    }
    h2 > p {
        font-weight: 100;
    }
`;

export const Form = tw.form`
    grid
    w-full
    grid-cols-3 
    gap-4
    mt-8
`;

export const InputAddress = styled.input`
    height: 42px;
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 4px;
    padding: 12px;
    outline: none;
    &:focus::placeholder {
        color: ${(props) => props.theme['base-text']};
    }
    &:focus {
        border: 1px solid ${(props) => props.theme['yellow-dark']};
    }
`;

export const CoffeCard = styled.div`
    background-color: ${(props) => props.theme['base-card']};
    margin-top: 12px;
    padding: 40px;
    border-radius: 6px;
`;

export const HeaderCard = styled.div`
    display: flex;
    gap: 8px;
    h2 {
        color: ${(props) => props.theme['base-title']};
        font-weight: bold;
    }
    h2 > p {
        font-weight: 100;
    }
`;

export const OptionsPay = styled.button`
    display: flex;
    margin-top: 32px;
    gap: 12px;

`;

export const ButtonPay = styled.button`
    display: flex;
    background-color: ${(props) => props.theme['base-button']};
    text-wrap: nowrap;
    padding: 1rem;
    gap: 12px;
    line-height: 160%;
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};
    &:hover {
        background-color: ${(props) => props.theme['base-hover']};
    }
    &:active {
        background-color: ${(props) => props.theme['purple-light']};
        border: 1px ${(props) => props.theme['purple']};
    }
`;

export const CoffesSelected = styled.div`
    width: 420px;
    padding: 40px;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px 6px;
`;

export const InformationCoffe = styled.div`
    display: flex;
    img {
        width: 64px;
        height: 64px;
    }
    padding: 4px 8px;
    gap: 19px;
    &>div>h2{
        font-weight: bold;
    }
`;

export const InputRemove = styled.button`
    display: flex;
    background-color: ${(props) => props.theme['base-button']};
    gap: 4px;
    padding: 8px;
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};
    margin-left: 8px;
    width: 91px;
    font-size: 12px;
    line-height: 160%;
`;

export const Actions = styled.div``;

export const Divider = styled.span`
    display: flex;
    justify-content: center;
    width: 335px;
    margin-top: 20px;
    margin-bottom: 25px;
    height: 1px;
    background-color: ${(props) => props.theme['base-button']};
`;

export const Price = styled.div`
    display: flex;
    justify-content: space-between;
    div > h1 {
        font-weight: bold;
        font-size: 20px;
    }
`;

export const Confirm = styled.button`
    width: 340px;
    padding: 8px 12px;
    background-color: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme['white']};
    font-weight: 200;
    border: none;
    border-radius: 6px;
    margin-top: 20px;
    &:hover{
    background-color: ${(props) => props.theme['yellow-dark']};

    }
`;
