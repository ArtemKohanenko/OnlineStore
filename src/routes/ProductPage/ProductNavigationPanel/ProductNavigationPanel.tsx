import { useState } from 'react'

import Box from '@mui/material/Box'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

import classes from './ProductNavigationPanel.module.scss'


const ProductNavigationPanel = (props: {productName: string}) => {

    return(
        <>
            <Box className={classes.container}>
                <Box className={classes.leftBlock}>
                    <Box className={classes.navigation}>
                        <Typography variant='body1' className={classes.pathText}>Home</Typography>
                        <KeyboardArrowRightIcon/>
                        <Typography>Shop</Typography>
                        <KeyboardArrowRightIcon/>
                    </Box>
                    <Box className={classes.divider}></Box>
                    <Typography variant='body1'>{props.productName}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default ProductNavigationPanel;