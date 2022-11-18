import { useRef } from "react"
import { Link } from "react-router-dom"




export const Dashboard = () => {

    

    const CounterRef = useRef({counter: 0})


    return (
        <>
        <p>Dashboard</p>
        <p>Contador: {CounterRef.current.counter}</p>

        <button onClick={() => CounterRef.current.counter++}>Somar</button>
        <button onClick={() => console.log(CounterRef.current.counter)}>Somar</button>
        <Link to="/entrar">Login</Link>
        </>
    )
}