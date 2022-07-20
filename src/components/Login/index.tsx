import { Container } from "./style";

export function Login() {
    return (
        <form className="form-login">
            <Container>
                <div>
                    <h1>Login</h1>
                    <p>Novo(a) no site? Registre-se!</p>

                    <span className="email">E-mail</span>
                    <input placeholder='Digite seu e-mail aqui...' />

                    <span className="senha">Senha</span>
                    <input placeholder='Digite sua senha aqui...' />
                    <br></br>


                    <button type='submit'>Login</button>
                </div>
            </Container>
        </form>
    )
}