import { useState } from 'react'

import classes from './ProductDetails.module.scss'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Counter from '../../../components/Counter/Counter'

import { IProduct } from '../../../types/product'

const ProductDetails = (props: {product: IProduct}) => {
    const product = props.product;

    return(
        <>
            <Box className={classes.container}>
                <img src={product.picture} className={classes.picture}></img>
                <Box className={classes.textData}>
                    <Typography variant='h1' className={classes.name}>{product.name}</Typography>
                    <Box className={classes.descriptionContainer}>
                        <Typography variant='subtitle1' className={classes.price}>{'₹. ' + product.price}</Typography>
                        <Typography variant='body1' className={classes.description}>{product.description}</Typography>
                        <Box className={classes.buttonsContainer}>
                            <Counter/>
                            <Button variant='outlined' color='black' className={classes.addButton}>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProductDetails;