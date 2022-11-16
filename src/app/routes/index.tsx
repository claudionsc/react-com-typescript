import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom"
import { Dashboard } from "../pages"

export const Rotas = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route  path="/inicial" element={<Dashboard /> } />
                <Route path="entrar" element={<h1>Rotas</h1>} />
                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Switch>
        </BrowserRouter>

    )
}