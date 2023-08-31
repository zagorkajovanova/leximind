import {Box, Typography} from "@mui/material";
import userIcon from '../../assets/images/navbar/icons8-test-account-30.png';

export function UserAvatar({ user, handleClick }) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
            }}
            onClick={handleClick}
        >
            <img
                src={userIcon}
                alt="user"
            />
            {user && (
                <Typography
                    sx={{ fontWeight: 600, letterSpacing: 1, ml: 1 }}
                >
                    {user}
                </Typography>
            )}
        </Box>
    );
}