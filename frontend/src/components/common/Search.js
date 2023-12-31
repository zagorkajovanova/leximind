import {alpha, InputBase, styled} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../style/common.css"

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: '15px',
    border: '1px solid lightgrey',
    backgroundColor: alpha(theme.palette.common.white, 0.5),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export function SearchBar({ games, setFilteredGames }) {

    const handleSearch = (event) => {
        const searchText = event.target.value.toLowerCase();
        const filteredGames = games.filter((game) =>
            game.title.toLowerCase().includes(searchText)
        );
        setFilteredGames(filteredGames);
    }

    return <Search className="search">
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{'aria-label': 'search'}}
            onChange={handleSearch}
        />
    </Search>
}