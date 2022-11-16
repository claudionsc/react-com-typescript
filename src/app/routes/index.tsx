import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom"
import { Dashboard } from "../pages"
import { Login } from "../pages"

export const Rotas = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route  path="/inicial" element={<Dashboard /> } />
                <Route path="entrar" element={<Login />} />
                <Route path="*" element={<Navigate to="/inicial" />} />
            </Switch>
        </BrowserRouter>

    )
}