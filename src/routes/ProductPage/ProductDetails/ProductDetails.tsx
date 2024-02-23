import { useState } from 'react'


import classes from './ProductDetails.module.scss'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const ProductDetails = () => {
    const product = {
        productId: '1',
        name: 'First',
        description:'First',
        price: 1488,
        picture: 'src/assets/product_example.png'
    }

    return(
        <>
            <Box className={classes.container}>
                <img src={product.picture} className={classes.picture}></img>
                <Box className={classes.textData}>
                    <Typography className={classes.name}>{product.name}</Typography>
                    <Box className={classes.container}>
                        <Typography className={classes.price}>{product.price}</Typography>
                        <Typography className={classes.price}>{product.description}</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProductDetails;