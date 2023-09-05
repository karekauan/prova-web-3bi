import { styled } from "styled-components";

export const Container = styled.header`
    background: #d6d6c2;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
    position: relative;
    bottom: -5px
`;

export const Content = styled.div `
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-details {
        h2{
            color: #000;
            font-size: 32px;
            margin-bottom: 50px;
        }
    }
`

export const Logo = styled.img `
    width: 50px;
    height: 50px;
    margin-bottom: 50px;
`