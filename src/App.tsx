import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Header />
                <Main />
                <Footer />
            </ThemeProvider>

            <GlobalStyle />
        </>
    );
}

export default App;
