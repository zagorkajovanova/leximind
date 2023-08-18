import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Games } from "./components/pages/Games";
import { Info } from "./components/pages/Info";

import { ThemeProvider, createTheme } from "@mui/material";
import { Login } from './components/pages/Login';
import {Profile} from "./components/pages/Profile";
import {PlayGame} from "./components/pages/PlayGame";
import {FinishedGame} from "./components/pages/FinishedGame";
import {PlayMemory} from "./components/pages/PlayMemory";
import {PlayPuzzle} from "./components/pages/PlayPuzzle";

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
                <Route path="/profile" element={<Profile />} />
                <Route path="/play" element={<PlayGame />} />
                <Route path="/play/memory" element={<PlayMemory />} />
                <Route path="/play/puzzle" element={<PlayPuzzle />} />
                <Route path="/finished-game" element={<FinishedGame />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
