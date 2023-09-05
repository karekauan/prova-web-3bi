import logo_instagram from "../../assets/images/logos/social_medias/logo_instagram.svg";
import logo_facebook from "../../assets/images/logos/social_medias/logo_facebook.svg";
import logo_twitter from "../../assets/images/logos/social_medias/logo_twitter.svg";

import { Container, Content, Logo } from "./styles";

export function Footer(){
    return (
        <Container>
            <Content>

                <div className="page-details">
                    <h2>Kauan Antonyê Costa</h2>
                </div>

                <a href="https://www.instagram.com/ifpr.oficial/" target="_blank">
                    <Logo src={logo_instagram} alt="Instagram"></Logo>
                </a>
                <a href="https://pt-br.facebook.com/REITORIAIFPR/" target="_blank">
                    <Logo src={logo_facebook} alt="Facebook"></Logo>
                </a>
                <a href="https://twitter.com/IFPR_" target="_blank">
                    <Logo src={logo_twitter} alt="Twitter"></Logo>
                </a>

            </Content>
        </Container>
    );
}