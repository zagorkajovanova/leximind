import {Navbar} from "../common/Navbar";
import MemoryGame from "../games/MemoryGame/MemoryGame"
import {Container, Paper, Typography} from "@mui/material";

export function PlayMemory() {
    return <div>
        <Navbar />
        <Container sx={{p: 2}}>
            <Paper elevation={4} sx={{
                p: 2,
                borderRadius: '10px',
                opacity: '0.9',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h4" fontWeight="bold">
                    Меморија
                </Typography>
            </Paper>
        </Container>
        <MemoryGame />
    </div>
}