import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout(){

    return(

        <>
        
        {/* navbar */}
        <NavBar />

         {/* contenido principal */}
         <main className="container-fluid">
            <Outlet/>
         </main>
        </>
    )
}