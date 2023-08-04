import {Card, CardActions, CardContent, CardMedia, styled, Typography} from "@mui/material";
import star from '../../assets/images/star-svgrepo-com.svg';

export function GameCard({game}) {

    const handleGameClick = () => {
        console.log(`Playing ${game.title}`);
    }

    return <CustomCard onClick={handleGameClick}>
        <CardMedia
            sx={{height: 190}}
            image={game.img_url}
            title={game.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {game.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{textAlign: 'justify'}}>
                {game.description}
            </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: 'end'}}>
            <img src={star} alt="star" width={25} style={{marginRight: '3px'}}/> Поени: {game.points}
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