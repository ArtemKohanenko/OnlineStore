
import Header from "../../components/Header/Header"
import ToolPanel from "../../components/ToolPanel/ToolPanel"
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid"

import { RootState } from '../../stores/store'
import { useSelector } from "react-redux"


const CatalogPage = () => {
    const products = useSelector((state: RootState) => state.products.products)

    return(
        <>
            <Header/>
            <ToolPanel/>
            <ProductsGrid products={products}/>
        </>
    )
}

export default CatalogPage