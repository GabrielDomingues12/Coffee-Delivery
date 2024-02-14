import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
`
export const Content = styled.div`
    display: flex;
    padding: 32px 160px;
`
export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 12px;
`
export const Location = styled.div`
    display: flex;
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    font-weight: 500;
    width: 143px;
    gap: 4px;
    height: 38px;
    border-radius: 6px;
    padding: 8px;
    &:hover {
        background-color: ${props => props.theme['purple-dark']};
        color: ${props => props.theme['purple-light']};
        transition: 0.3s;
        font-weight: 500;

    }
`