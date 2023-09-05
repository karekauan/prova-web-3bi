import { PropsWithChildren } from "react";
import { Board, OrdersContainer } from "../styles";

export type OrderProps = {
    title: string;
    icon: string;
} & PropsWithChildren;

export function Noticy({ title, icon, children }: OrderProps) {
    return (
        <Board>
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
            </header>

            <OrdersContainer>{children}</OrdersContainer>
        </Board>
    );
}