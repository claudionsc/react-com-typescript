import { useNavigate } from "react-router-dom"
import { useMemo, useState } from "react"

export const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')

    const emaillength = useMemo(() => {
        return email.length
    }, [email.length])


    const navigate = useNavigate()

    const handleEntrar = () => {
       console.log(email)
       console.log(senha)
    }


    return (
        <div>
            <form>
                <p>Quantidade de caracteres do email: {emaillength}</p>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={ e => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha</span>
                    <input type={"password"} value={senha} onChange={ e => setSenha(e.target.value)} />
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    )
}