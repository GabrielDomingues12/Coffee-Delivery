import styled from "styled-components";

export const CartStyle = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 6px;
    padding: 8px 8px;
    background-color: ${props => 
        props.color || props.theme['yellow-light']};
    color: ${props => props.colorIcons || props.theme['yellow-dark']};
`