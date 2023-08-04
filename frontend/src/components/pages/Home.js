import {useNavigate} from "react-router-dom";
import {Navbar} from "../Navbar";
import wave from "../../assets/images/wave.png";
import '../style/common.css'
import {Button, Container, Grid, styled, Typography} from "@mui/material";
import image from '../../assets/images/kids.png';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

export function Home() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/games');
    }

    return <div className="page">
        <Navbar />

        <Container sx={{
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}
                      sx={{  alignSelf: 'center'}}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            mr: 2,
                            display: { md: 'inline', xs: 'none' },
                            fontWeight: 700,
                            color: 'inherit',
                            lineHeight: '1.5'
                        }}
                    >
                        Ослободете ја моќта на зборовите со
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            mr: 2,
                            display: { md: 'inline', xs: 'none'},
                            fontWeight: 700,
                            letterSpacing: '.4rem',
                            color: 'inherit',
                        }}
                    >
                        LexiMind
                    </Typography>
                    <Typography
                        variant="h7"
                        sx={{
                            mt: 4,
                            mr: 2,
                            display: { md: 'flex' },
                            fontWeight: 500,
                            color: 'inherit',
                        }}
                    >
                        Забавно патување за охрабрување на децата со дислексија. Откријте свет на учење преку играње, каде секој чекор предизвикува доверба и радост во читањето и пишувањето!
                    </Typography>
                    <StyledButton
                        variant="contained"
                        size="large"
                        color="success"
                        endIcon={<ArrowRightAltOutlinedIcon/>}
                        onClick={handleButtonClick}
                    >
                        ЗАПОЧНИ
                    </StyledButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={image} alt="landing-pic" width="100%" />
                </Grid>
            </Grid>
        </Container>

        <img src={wave} alt="wave" className="wave-image"/>
    </div>
}

const StyledButton = styled(Button)({
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    marginTop: '15px',
    borderRadius: '15px',
    backgroundColor: 'forestgreen',
})