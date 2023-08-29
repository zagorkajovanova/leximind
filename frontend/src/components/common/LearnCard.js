import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {styled} from "@mui/material";

export default function LearnCard({ title, description, image, link }) {

    const handleCardClick = () => {
        window.location.replace(link);
    }

    return (
        <CustomCard onClick={handleCardClick}
        >
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={image}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {description}
                    </Typography>
                </CardContent>
            </Box>

        </CustomCard>
    );
}

const CustomCard = styled(Card)({
    display: 'flex',
    marginTop: '20px',
    borderRadius: '15px',
    transition: 'all .2s',
    ":hover": {
        boxShadow: '2px 12px 15px #999',
        transform: 'translateY(-2px)',
        cursor: 'pointer'
    }
})