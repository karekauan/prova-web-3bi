import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { Noticies } from "./components/Noticies";
import { Footer } from "./components/Footer";

export function App() {
    return (
        <>
            <GlobalStyles/>
            <Header/>
            <Noticies/>
            <Footer/>
        </>
    );
} 