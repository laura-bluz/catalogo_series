import { FormEvent, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export function Cadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');

    async function criarUsuario() {
        await createUserWithEmailAndPassword(auth, email, senha)
        .then(value => {
            console.log("Cadastrado com sucesso! " + value.user.uid);
        })
        .catch(error => console.log(error));
    }

    function handleCadastro(event: FormEvent) {
        event.preventDefault();

        console.log({
            email,
            senha,
            confirmSenha
        })
    }

    return (
        <div>
            <form className="form-cadastro" onSubmit={handleCadastro}>
                <Container>
                    <div>
                        <h1>Cadastre-se</h1>
                        <p>Utilize seu endereço de e-mail</p>

                        <span className="email">E-mail</span>
                        <input placeholder='Digite seu e-mail aqui...' value={email} onChange={event => setEmail(event.target.value)} />

                        <span className="senha">Senha</span>
                        <input placeholder='Digite sua nova senha aqui...' value={senha} onChange={event => setSenha(event.target.value)}/>

                        <span className="senha">Confirmação de senha</span>
                        <input placeholder='Confirme sua nova senha aqui...' value={confirmSenha} onChange={event => setConfirmSenha(event.target.value)}/>
                        <br></br>


                        <button type='submit' onClick={() => criarUsuario()}>Efetuar cadastro</button>
                    </div>
                </Container>
            </form>
            <Sidebar />

        </div>
    )
}