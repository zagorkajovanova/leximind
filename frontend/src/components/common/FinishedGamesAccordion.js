import {Accordion, AccordionDetails, AccordionSummary, styled, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect} from "react";
import star from '../../assets/images/star-svgrepo-com.svg';

export default function FinishedGamesAccordion({games}) {

    useEffect(() => {
        console.log(`GAMES: ${games}`)
    })

    return (
        <div>
            <CustomAccordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Преглед на завршени игри</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ol>
                        {games.map((game, index) => (
                            <li key={index}>
                                <Typography>
                                    {game.title}
                                    <img src={star} width="20px" style={{ marginLeft: '5px', marginRight: '4px' }}  alt="star"/>
                                    {game.points}
                                </Typography>
                            </li>
                        ))}

                    </ol>
                </AccordionDetails>
            </CustomAccordion>
        </div>
    );
}

const CustomAccordion = styled(Accordion)({
    backgroundColor: 'lightblue',
    width: '412px',
    padding: '5px'
})