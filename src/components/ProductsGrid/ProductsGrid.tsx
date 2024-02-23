import { useState } from 'react'

import { IProduct } from '../../types/product'

import classes from './ProductsGrid.module.scss'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ProductCard from '../ProductCard/ProductCard'

const ProductsGrid = (props: {products: IProduct[]}) => {
    const products = props.products;

    return(
        <>
            <Box className={classes.wrapper}>
                <Grid container spacing={1}>
                    {products.map((product) => (
                        <Grid item xs={3}>
                            <ProductCard product={product}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default ProductsGrid;