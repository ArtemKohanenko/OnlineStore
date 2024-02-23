import { useState } from 'react'

import Box from '@mui/material/Box'
import TuneIcon from '@mui/icons-material/Tune'
import WindowIcon from '@mui/icons-material/Window'
import ViewDayIcon from '@mui/icons-material/ViewDay'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

import classes from './ToolPanel.module.scss'


const ToolPanel = () => {

    return(
        <>
            <Box className={classes.container}>
                <Box className={classes.leftBlock}>
                    <Box className={classes.buttons}>
                        <Box className={classes.filterContainer}>
                            <TuneIcon sx={{fontSize: '25px'}}/>
                            <Typography variant='body2'>Filter</Typography>
                        </Box>
                        
                        <WindowIcon sx={{fontSize: '24px'}}/>
                        <ViewDayIcon sx={{fontSize: '24px'}}/>
                    </Box>
                    <Box className={classes.divider}></Box>
                    <Typography variant='body1'>Showing 1–16 of 32 results</Typography>
                </Box>

                <Box className={classes.rightBlock}>
                    <Box className={classes.showContainer}>
                        <Typography variant='body2'>Show</Typography>
                        <TextField
                            variant="standard"
                            className={classes.showField}
                            InputProps={{
                                disableUnderline: true
                            }}
                        ></TextField>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ToolPanel;