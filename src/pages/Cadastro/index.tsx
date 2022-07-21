import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";

export function Cadastro() {
    return (
        <div>
            <form className="form-cadastro">
                <Container>
                    <div>
                        <h1>Cadastre-se</h1>
                        <p>Utilize seu endereço de e-mail</p>

                        <span className="email">E-mail</span>
                        <input placeholder='Digite seu e-mail aqui...' />

                        <span className="senha">Senha</span>
                        <input placeholder='Digite sua nova senha aqui...' />

                        <span className="senha">Confirmação de senha</span>
                        <input placeholder='Digite sua nova senha aqui...' />
                        <br></br>


                        <button type='submit'>Efetuar cadastro</button>
                    </div>
                </Container>
            </form>
            <Sidebar />

        </div>
    )
}