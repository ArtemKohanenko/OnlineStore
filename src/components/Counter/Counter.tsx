import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { IProduct } from '../../types/product'

import classes from './Counter.module.scss'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Counter = (props: {product: IProduct}) => {

    const [value, setValue] = useState(0);

    const handleRemove = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    const handleAdd = () => {
        setValue(value + 1)
    }

    return(
        <>
            <Box className={classes.container}>
                <IconButton color='black' disabled={value > 0 ? false : true} onClick={handleRemove}>
                    <RemoveIcon/>
                </IconButton>
                <Typography variant='body2' className={classes.counter}>{value}</Typography>
                <IconButton color='black' onClick={handleAdd}>
                    <AddIcon/>
                </IconButton>
            </Box>
        </>
    )
}

export default Counter;