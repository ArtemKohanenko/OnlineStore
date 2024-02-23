import { useParams } from 'react-router'

import Header from "../../components/Header/Header"
import ToolPanel from "../../components/ToolPanel/ToolPanel"
import ProductDetails from "./ProductDetails/ProductDetails"


const ProductPage = () => {

    const params = useParams();

    return(
        <>
            <Header/>
            <ToolPanel/>
            <ProductDetails/>
        </>
    )
}

export default ProductPage