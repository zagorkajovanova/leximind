import {Card, CardActions, CardContent, CardMedia, styled, Typography} from "@mui/material";
import star from "../../assets/images/star-svgrepo-com.svg";

export function MemoryGameCard() {
    const handleGameClick = () => {
        console.log(`Playing Memory`);
    }

    return <CustomCard onClick={handleGameClick}>
        <CardMedia
            sx={{height: 190}}
            image="https://img.freepik.com/free-vector/cute-match-game-with-animals_23-2148790023.jpg?w=1060&t=st=1691091661~exp=1691092261~hmac=15c6605cc26f291cd5e660a75ad12ce4793de83254cb3d7a98534b2c8ca24ec2"
            title="Меморија"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Меморија
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{textAlign: 'justify'}}>
                Играта се состои од дадени сликички, каде секоја сликичка има соодветен пар. Спојте ги сликичките.
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