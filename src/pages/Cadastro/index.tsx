import { FormEvent, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";
import volta from '../../assets/voltar.png';


export function Cadastro() {

    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function criarUsuario() {
            await createUserWithEmailAndPassword(auth, email, senha)
                .then(value => {
                    console.log("Cadastrado com sucesso! " + value.user.uid);
                    alert("Cadastro realizado com sucesso!");
                    navigate('/', { replace: true })
                })
                .catch(error => {
                    console.log(error);
                    alert("Prencha todos os campos corretamente!");
                });
        }

    function handleCadastro(event: FormEvent) {
        event.preventDefault();

        console.log({
            email,
            senha,
        });
    }

    function voltar() {
        return (
            navigate('/', { replace: true })
        )
    }

    return (
        <div>
            <form className="form-cadastro" onSubmit={handleCadastro}>
                <Container>
                    <div>
                        <button className="voltar" type="button" onClick={() => voltar()} ><img src={volta} alt="voltar" /></button>
                        <h1>Cadastre-se</h1>
                        <p>Utilize seu endereço de e-mail</p>

                        <span className="email">E-mail</span>
                        <input placeholder="Digite seu e-mail aqui..." value={email} onChange={event => setEmail(event.target.value)} />

                        <span className="senha">Senha</span>
                        <input placeholder="Digite sua nova senha aqui..." value={senha} onChange={event => setSenha(event.target.value)} />
                        <p className="caracteres">A senha deve ter pelo menos 6 caracteres</p>
                        {/* <span className="senha">Confirmação de senha</span>
                        <input placeholder="Confirme sua nova senha aqui..." value={confirmSenha} onChange={event => setConfirmSenha(event.target.value)} /> */}
                        <br></br>


                        <button type="submit" onClick={() => criarUsuario()} >Efetuar cadastro</button>
                    </div>
                </Container>
            </form>
            <Sidebar />

        </div>
    )
}