import { useState } from 'react'

import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import classes from './Header.module.scss'
import Grid from '@mui/material/Grid'

const Header = () => {
    const [tabNumber, setTabNumber] = useState(1);

    const handleTabChange = (event: React.SyntheticEvent<Element, Event>, value: any) => {
        setTabNumber(value)
    }

    return(
        <>
            <Box className={classes.wrapper}>
                <Grid container className={classes.container}>
                    <Grid item xs={4} className={classes.logoContainer}>
                        <img src='src/assets/logo.svg'></img>
                        <Typography className={classes.logoText}>Fantasture</Typography>
                    </Grid>

                    <Grid item xs={4} className={classes.tabsContainer}>
                        <Tabs value={tabNumber} textColor='inherit' onChange={handleTabChange}>
                            <Tab label="Home" value={0} className={classes.tab}/>
                            <Tab label="Store" value={1} className={classes.tab}/>
                            <Tab label="About" value={2} className={classes.tab}/>
                            <Tab label="Blog" value={3} className={classes.tab}/>
                            <Tab label="Contact" value={4} className={classes.tab}/>
                        </Tabs>
                    </Grid>

                    <Grid item xs={4} className={classes.optionsContainer}>
                        <PersonOutlineIcon sx={{fontSize: "28px"}}/>
                        <SearchIcon sx={{fontSize: "28px"}}/>
                        <FavoriteBorderIcon sx={{fontSize: "28px"}}/>
                        <ShoppingCartOutlinedIcon sx={{fontSize: "28px"}}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Header;