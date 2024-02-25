import { useState } from 'react'

import classes from './ProductDetails.module.scss'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { IProduct } from '../../../types/product'

const ProductDetails = (props: {product: IProduct}) => {
    const product = props.product;

    return(
        <>
            <Box className={classes.container}>
                <img src={product.picture} className={classes.picture}></img>
                <Box className={classes.textData}>
                    <Typography className={classes.name}>{product.name}</Typography>
                    <Box className={classes.descriptionContainer}>
                        <Typography className={classes.price}>{'₹. ' + product.price}</Typography>
                        <Typography className={classes.description}>{product.description}</Typography>
                        <Button variant='outlined' color='black' className={classes.addButton}>Add To Cart</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProductDetails;