import { Sidebar } from "../../components/Sidebar";
import { Container, Box } from "./style";
import "../../components/Sidebar/style";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";

export function Login() {

    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin(event: FormEvent) {
        event.preventDefault();
    }

    async function login() {
        await signInWithEmailAndPassword(auth, email, senha)
            .then(value => {
                navigate('/catalogo', { replace: true })
            })
            .catch(error => {
                console.log(error);
                alert("E-mail ou senha inválidos!");
            });
    }

    return (
        <Box>
            <Sidebar />
            <form className="form-login" onSubmit={(e) => e?.preventDefault()}>
                <Container>
                    <div>
                        <h1>Login</h1>
                        <p>Novo(a) no site? <Link to="/cadastro">Cadastre-se!</Link></p>

                        <span className="email">E-mail</span>
                        <input placeholder='Digite seu e-mail aqui...' value={email} onChange={event => setEmail(event.target.value)} />

                        <span className="senha">Senha</span>
                        <input type="password" placeholder='Digite sua senha aqui...' value={senha} onChange={event => setSenha(event.target.value)} />
                            <br></br>


                            <button type='submit' onClick={() => login()}>Login</button>
                    </div>
                </Container>
            </form>
        </Box>
    )
}