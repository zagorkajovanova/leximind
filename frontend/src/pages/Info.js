import {Navbar} from "../components/Navbar";
import wave from "../assets/images/wave.png";
import '../components/style/common.css';
import kids from '../assets/images/kids-home.png';
import {Container, Grid, Typography} from "@mui/material";
import "../components/style/info.css";

export function Info() {
    return <div className="page">
        <Navbar />
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 4
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} className="info_section" >
                    <div className="info_text">
                        <Typography variant="h4" className="info_header">
                            За дислексија:
                        </Typography>
                        <Typography variant="h6" className="info_text">
                            Зборот дислексија потекнува од грчкиот збор <b>“dys-”</b> што значи тешкотија и <b>“lexis”</b>, што значи јазик, или
                            дислексијата може да има значење “тешкотии со јазик”.
                            Дислексијата најопшто е позната како потешкотија при
                            читање, пишување и правопис на една личност. Таа
                            вклучува проблеми со идентификувањето на гласовите во
                            говорот и како тие се поврзуваат со буквите и зборовите,
                            односно состојба при која мозокот различно ги процесира
                            пишаниот или говорениот јазик.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className="info_section second_section">
                    <div className="info_text">
                        <Typography variant="h4" className="info_header second_header">
                            За LexiMind:
                        </Typography>
                        <Typography variant="h6" className="info_text">
                            LexiMind претставува апликација чија цел е да им помогне на децата со ваква попреченост.
                            Апликацијата нуди мини игри во вид на загатки и мали проблеми со цел овие деца да можат на лесен и забавен начин да ги надминат потешкотиите со читање и пишување.
                            Оваа апликација може да се искористи како алатка за тековно следење на напредокот за да се проценат областите на подобрување на вештините за читање и пишување со помош на едноставен квиз.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <img src={kids} width="100%" alt="kids" />
                </Grid>
            </Grid>
        </Container>
        <img src={wave} alt="wave" className="wave-image"/>
    </div>
}
