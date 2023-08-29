import {Navbar} from "../common/Navbar";
import {Container, Grid, Typography} from "@mui/material";
import LearnCard from "../common/LearnCard";
import ad1 from '../../assets/images/ad1.png';
import ad2 from '../../assets/images/ad2.jpg';

export function Learn() {
    return <div>
        <Navbar />
        <Container sx={{ mt: 4 }}>
            <Grid spacing={3} container>
                <Grid item sm={4} >
                    <img src={ad2} style={imageStyle} alt="ad" />

                    <img src={ad1} style={imageStyle} alt="ad" />
                </Grid>
                <Grid item sm={8}>
                    <Typography variant="h5">Научи повеќе</Typography>

                    <LearnCard
                        title="Што претставува дислексијата?"
                        description="Зборот дислексија потекнува од грчкиот збор ”dys” што значи тешкотија и “lexis” што значи јазик, или дислексија може да има значење “ тешкотии со зборови/јазик“..."
                        image="https://ohridsky.com/wp-content/uploads/2022/06/DILEKSIJA.jpg"
                        link="https://ohridsky.com/disleksija-prichini-simptomi-i-soveti/"
                    />
                    <LearnCard
                        title="Што не смееме да му ги кажеме на дете со дислексија"
                        description="Ако се трудиш повеќе, подобро ќе читаш - Ова е исто како да му кажете на човек со скршена нога дека ако се потруди побрзо ќе трча..."
                        image="https://media.istockphoto.com/id/182163129/photo/schoolboy.jpg?s=612x612&w=0&k=20&c=X-cStxxDahJJZnrly802elSxSbDqFcypZ29kpm-4EmE="
                        link="https://disleksija.mk/courses/disleksija-kurs/lessons/shto-ne-smeeme-da-kazeme/"
                    />
                    <LearnCard
                        title="Работа со ученици со дислексија"
                        description="Ако кажеме дека дислексијата е синдром – што подразбираме под синдром?..."
                        image="https://static01.nyt.com/images/2019/10/07/well/07klass-school/07klass-school-superJumbo.jpg"
                        link="https://www.britishcouncil.mk/sites/default/files/rabota_so_uchenici_so_disleksija.pdf"
                    />
                </Grid>
            </Grid>
        </Container>
    </div>
}

const imageStyle = {
    width: '100%',
    height: "300px",
    marginBottom: "10px"
}