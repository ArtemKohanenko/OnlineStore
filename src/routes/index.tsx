import { Route, Routes as CRoutes} from "react-router-dom";
import CatalogPage from "./CatalogPage/CatalogPage"
import ProductPage from "./ProductPage/ProductPage"

const Routes = () => {
    return (
        <CRoutes>
            <Route index element={<CatalogPage/>}/>
            <Route path=":productId" element={<ProductPage/>}/>
        </CRoutes>
    );
  };

export default Routes;

