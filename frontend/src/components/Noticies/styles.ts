import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1216px;
    margin: 40px auto;
    display: flex;
    gap: 32px;
    background: #f5f5f0;
`;

export const Board = styled.div `
    padding: 16px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 450px;

    header {
        padding: 8px;
        font-size: 30px;
        display: flex;
        justify-content: space-between;
        gap: 8px;
    }
`;

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;
`