import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Games } from "./pages/Games";
import { Info } from "./pages/Info";

import { ThemeProvider, createTheme } from "@mui/material";
import { Login } from './pages/Login';

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'DyslexicFZF',
            textTransform: 'none',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/games" element={<Games/>} />
                <Route path="/info" element={<Info/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
