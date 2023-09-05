import { styled } from "styled-components";

export const Container = styled.header`
    background: #d6d6c2;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div `
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-details {
        h1{
            color: #000;
            font-size: 32px;
        }
    }
`