import {Button, Container} from "@mui/material";
import '../style/common.css';

export function Response({response, checkAnswer}) {

    const handleButtonClick = () => {
        checkAnswer(response.text)
    }

    return <Container sx={{m: 2}}>
        <Button id="response-button" variant="contained" size="large" sx={{borderRadius: '15px'}} fullWidth
            onClick={handleButtonClick}
        >
            {response.text}
        </Button>
    </Container>
}