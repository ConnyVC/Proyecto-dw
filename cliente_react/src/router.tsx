import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './views/Home'
import Categorias,{loader as loaderCategorias} from './views/Categorias'
import Productos from './views/Productos'
import CategoriasCrear from './CategoriasCrear'
import ProductosCrear from './ProductosCrear'
import Loader from './components/Loader'
import IngresarArriendo from './views/IngresarArriendo';



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        HydrateFallback:Loader,
        children: [
            {
                index:true,
                element:<Home />,

            },
            {
                path:'categorias',
                element:<Categorias />,
                loader:loaderCategorias,
            },
            {
                path:'categorias/crear',
                element:<CategoriasCrear />,
            },
            {
                path:'productos',
                element:<Productos/>,
            },
            {
                path:'productos/crear',
                element:<ProductosCrear/>,
            },
            {
                path: 'nuevo-arriendo',
                element: <IngresarArriendo />,
              },
              
        ],
    },
])
