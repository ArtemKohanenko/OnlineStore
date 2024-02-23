import Header from "../../components/Header/Header"
import ToolPanel from "../../components/ToolPanel/ToolPanel"
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid"


const CatalogPage = () => {
    const products = [
        {
            productId: '1',
            name: 'First',
            description:'First',
            price: 1488,
            picture: 'src/assets/product_example.png'
        },
        {
            productId: '2',
            name: 'Second',
            description:'Second',
            price: 1488,
            picture: 'src/assets/product_example.png'
        },
        {
            productId: '3',
            name: 'Third',
            description:'Third',
            price: 1488,
            picture: 'src/assets/product_example.png'
        },
        {
            productId: '4',
            name: 'Fourth',
            description:'Fourth',
            price: 1488,
            picture: 'src/assets/product_example.png'
        },{
            productId: '5',
            name: 'Fifth',
            description:'Fifth',
            price: 1488,
            picture: 'src/assets/product_example.png'
        }
    ]
    return(
        <>
            <Header/>
            <ToolPanel/>
            <ProductsGrid products={products}/>
        </>
    )
}

export default CatalogPage