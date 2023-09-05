
import logo_ifpr from "../../assets/images/logos/logo_ifpr.svg"

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo_ifpr} alt="IFPR" />

                <div className="page-details">
                    <h1>Campus Cascavel</h1>
                </div>

            </Content>
        </Container>
    );
}