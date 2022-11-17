// import { useNavigate } from "react-router-dom"
import { useCallback, useMemo, useRef, useState } from "react"

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')

    const emaillength = useMemo(() => {
        return email.length
    }, [email.length])


    // const navigate = useNavigate()

    const handleEntrar = useCallback(() => {
       console.log(email)
       console.log(senha)
    }, [email, senha])


    return (
        <div>
            <form>
                <p>Quantidade de caracteres do email: {emaillength}</p>
                <label>
                    <span>Email</span>
                    <input 
                    value={email} 
                    onChange={ e => setEmail(e.target.value)} 
                    onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus(): undefined}
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input type={"password"} value={senha} onChange={ e => setSenha(e.target.value)} 
                    ref={inputPasswordRef}
                    />
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    )
}