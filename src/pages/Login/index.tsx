import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";
import "../../components/Sidebar/style";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <div>
            <form className="form-login">

                <Container>
                    <div>
                        <h1>Login</h1>
                        <p>Novo(a) no site? <Link to="/cadastro">Cadastre-se!</Link></p>

                        <span className="email">E-mail</span>
                        <input placeholder='Digite seu e-mail aqui...' />

                        <span className="senha">Senha</span>
                        <input placeholder='Digite sua senha aqui...' />
                        <br></br>

                        
                            <button type='submit'>Login</button>
                    </div>
                </Container>
            </form>
            <Sidebar />
        </div>
    )
}