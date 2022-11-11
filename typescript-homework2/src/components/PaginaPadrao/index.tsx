import {Banner}  from '../Banner';
import { Outlet } from "react-router-dom";

export const PaginaPadrao: React.FC = () => {
    return (
        <main> 
            <Banner />
            <Outlet className="bg-dark"/>
        </main>
    )
}