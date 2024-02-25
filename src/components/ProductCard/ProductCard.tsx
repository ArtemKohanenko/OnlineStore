import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { IProduct } from '../../types/product'

import classes from './ProductCard.module.scss'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const ProductCard = (props: {product: IProduct}) => {

    const navigate = useNavigate();

    const product = props.product;

    const cardClickHandler = () => {
        navigate(product.productId)
    }

    return(
        <>
            <Box className={classes.container} onClick={cardClickHandler}>
                <img src='src/assets/product_example.png' className={classes.picture}></img>
                <Box className={classes.textData}>
                    <Typography variant='subtitle1' className={classes.title}>{product.name}</Typography>
                    <Typography variant='body1' className={classes.subtitle}>{product.description}</Typography>
                    <Typography variant='body2' className={classes.price}>{'₹ ' + product.price.toString()}</Typography>
                </Box>
            </Box>
            
        </>
    )
}

export default ProductCard;