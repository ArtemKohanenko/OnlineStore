import { Route, Routes as CRoutes} from "react-router-dom";
import CatalogPage from "./CatalogPage/CatalogPage"

const Routes = () => {
    return (
        <CRoutes>
            <Route index element={<CatalogPage/>}/>
        </CRoutes>
    );
  };

export default Routes;

