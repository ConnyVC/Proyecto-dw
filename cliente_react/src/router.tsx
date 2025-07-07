import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './views/Home'
import Loader from './components/Loader'
import IngresarArriendo from './views/IngresarArriendo';
import ArriendosActivos from './views/ArriendosActivos';
import ArriendosFinalizados from "./views/ArriendosFinalizados";
import EstadisticasTipoVehiculo from "./views/EstadisticasTipoVehiculo";



export const router = createBrowserRouter([// Crea un enrutador de navegador utilizando la función createBrowserRouter de react-router-dom
    {
        path:'/',// Define la ruta base del enrutador
        element:<Layout/>,
        HydrateFallback:Loader,
        children: [// Define las rutas hijas del enrutador
            {
                index:true,
                element:<Home />,

            },
            {
                path: 'nuevo-arriendo',
                element: <IngresarArriendo />,
              },
              {
                path: "arriendos",
                element: <ArriendosActivos />,
              },
              {
                path: "arriendos-finalizados",
                element: <ArriendosFinalizados />,
              },
              {
                path: "estadisticas",
                element: <EstadisticasTipoVehiculo />,
              },

              
        ],
    },
])
