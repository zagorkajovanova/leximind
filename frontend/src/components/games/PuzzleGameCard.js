import {Card, CardActions, CardContent, CardMedia, styled, Typography} from "@mui/material";
import star from "../../assets/images/star-svgrepo-com.svg";

export function PuzzleGameCard() {
    const handleGameClick = () => {
        console.log(`Playing Puzzle`);
    }

    return <CustomCard onClick={handleGameClick}>
        <CardMedia
            sx={{height: 190}}
            image="https://img.freepik.com/free-vector/teamwork-people-creating-puzzle_23-2148420586.jpg?w=1060&t=st=1691090995~exp=1691091595~hmac=e72748ee28e91b45f3f0f5d466c24f80a2b55e02565ff0de7a6b89a77680a146"
            title="Сложувалка"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Сложувалка
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{textAlign: 'justify'}}>
                Играта се состои од броеви во вид на сложувалка. Подредете ги броевите во растечки редослед.
            </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: 'end'}}>
            <img src={star} alt="star" width={25} style={{marginRight: '3px'}}/> Поени: 30
        </CardActions>
    </CustomCard>
}

const CustomCard = styled(Card)({
    maxWidth: 345,
    borderRadius: '10px',
    transition: 'all .2s',
    marginRight: '20px',
    marginTop: '7px',
    ":hover": {
        boxShadow: '2px 12px 15px #999',
        transform: 'translateY(-2px)',
        cursor: 'pointer'
    }

})