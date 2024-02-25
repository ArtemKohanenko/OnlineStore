import { useParams } from 'react-router'

import Header from "../../components/Header/Header"
import ProductNavigationPanel from "./ProductNavigationPanel/ProductNavigationPanel"
import ProductDetails from "./ProductDetails/ProductDetails"


const ProductPage = () => {

    // const params = useParams();

    const product = {
        productId: '1',
        name: 'First',
        description:'First',
        price: 1488,
        picture: 'src/assets/product_example.png'
    }

    return(
        <>
            <Header/>
            <ProductNavigationPanel productName='Sofa'/>
            <ProductDetails product={product}/>
        </>
    )
}

export default ProductPage