import {useState, useEffect} from "react";
import Cookies from 'js-cookie';
import {Navbar} from "../common/Navbar";
import "../style/common.css";
import "../style/profile.css";
import {Container, Grid, Paper, styled, Typography} from "@mui/material";
import axios from "../../service/axios";
import star from '../../assets/images/star-svgrepo-com.svg';
import avatar from '../../assets/images/user2.png';
import FinishedGamesAccordion from "../common/FinishedGamesAccordion";

export function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, []);

    const getUser = async () => {
        const cookieNickname = Cookies.get('nickname');
        if (cookieNickname) {
            await getUserObject(cookieNickname);
        }
    }

    const calculateTotalPoints = () => {
        let count = 0;
        if (user && user.finishedGames) {
            user.finishedGames.forEach((game) => {
                count += game.points;
            });
        }
        if (checkAdvancedGame('memory-game')) {
            count += 30;
        }
        if (checkAdvancedGame('puzzle-game')) {
            count += 30;
        }
        return count;
    }

    const countFinishedGames = () => {
        let finishedGames = user.finishedGames.length;
        if (checkAdvancedGame('memory-game')) {
            finishedGames += 1;
        }
        if (checkAdvancedGame('puzzle-game')) {
            finishedGames += 1;
        }
        return finishedGames;
    }

    const checkAdvancedGame = (cookieName) => {
        const cookieGame = Cookies.get(cookieName);
        return !!cookieGame;

    }

    const getUserObject = async (nickname) => {
        try {
            const response = await axios.get(`/users/${nickname}`);
            setUser(response.data);
        } catch (error) {
            console.log("Error getting user object", error);
        }
    }

    const getFinishedGames = () => {
        let games = [];

        user.finishedGames.forEach((game) => {
            games.push({
                title: game.title,
                points: game.points
            });
        })

        if (checkAdvancedGame('memory-game')) {
            games.push({
                title: 'Меморија',
                points: 30
            });
        }
        if (checkAdvancedGame('puzzle-game')) {
            games.push({
                title: 'Сложувалка',
                points: 30
            });
        }
        return games;
    }

    return (
        <div className="profile-page">
            <Navbar/>
            {user && (
                <CustomContainer sx={{p: 2}}>
                    <Paper elevation={4} sx={{
                        p: 2,
                        mt: 5,
                        borderRadius: '10px',
                        minHeight: '50vh',
                    }}>
                        <Grid container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Grid item>
                                <img src={avatar} alt="user" width="200px"/>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="h3" fontWeight="bold" letterSpacing={3}
                                            sx={{mb: 5}}
                                >
                                    {user.nickname}
                                </Typography>
                            </Grid>
                            <CustomGridItem item sm={12}>
                                <Typography variant="h4">
                                    Завршени игри: {countFinishedGames()} / 9
                                </Typography>
                            </CustomGridItem>

                            <CustomGridItem item sm={12}>
                                <Typography variant="h4">
                                    Освоени поени: <img src={star} alt="star" width={25}
                                                        style={{marginRight: '3px'}}/>
                                    {calculateTotalPoints()}
                                </Typography>
                            </CustomGridItem>
                            <Grid item sm={12} sx={{ mt: 2 }}>
                                <FinishedGamesAccordion games={getFinishedGames()} />
                            </Grid>
                        </Grid>
                    </Paper>
                </CustomContainer>
            )}
        </div>
    );
}

const CustomGridItem = styled(Grid)({
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: '2px 12px 15px #999',
    marginBottom: "15px",
    width: "435px"
})

const CustomContainer = styled(Container)({
    width: '700px'
})
