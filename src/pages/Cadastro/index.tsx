import { FormEvent, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Container, Box } from "./style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";
import volta from '../../assets/voltar.png';
import {  doc, setDoc } from "firebase/firestore";


export function Cadastro() {

    let navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');

    async function criarUsuario() {
        if (senha === confirmSenha) {
            createUserWithEmailAndPassword(auth, email, senha)
                .then(value => {
                    console.log("v", value)
                    setDoc(doc(db, 'users', value.user.uid), { nome: nome, sobrenome: sobrenome, cidade: cidade, estado: estado, email: email, uid: value.user.uid, serie: [] })
                        .then(e => {
                            alert("Cadastro realizado com sucesso!");
                        })

                    navigate('/', { replace: true })
                })
                .catch(error => {
                    console.log(error);
                    alert("Prencha todos os campos corretamente!");
                });
        } else {
            alert("As senhas não coincidem! Digite novamente.");
        }
    }

    function handleCadastro(event: FormEvent) {
        event.preventDefault();
    }

    function voltar() {
        return (
            navigate('/', { replace: true })
        )
    }

    return (
        <Box>
            <Sidebar />

            <form className="form-cadastro" onSubmit={handleCadastro}>
                <Container>
                    <div>
                        <button className="voltar" type="button" onClick={() => voltar()} ><img src={volta} alt="voltar" /></button>
                        <h1>Cadastre-se</h1>
                        <p>Utilize seu endereço de e-mail</p>

                        <span className="nome">Nome</span>
                        <input type="text" placeholder="Digite seu nome aqui..." value={nome} onChange={event => setNome(event.target.value)} />

                        <span className="sobrenome">Sobrenome</span>
                        <input type="text" placeholder="Digite seu sobrenome aqui..." value={sobrenome} onChange={event => setSobrenome(event.target.value)} />

                        <span className="cidade">Cidade</span>
                        <input type="text" placeholder="Digite sua cidade aqui..." value={cidade} onChange={event => setCidade(event.target.value)} />

                        <span className="estado">Estado</span>
                        <input type="text" placeholder="Digite seu estado aqui..." value={estado} onChange={event => setEstado(event.target.value)} />

                        <span className="email">E-mail</span>
                        <input placeholder="Digite seu e-mail aqui..." value={email} onChange={event => setEmail(event.target.value)} />

                        <span className="senha">Senha</span>
                        <input placeholder="Digite sua nova senha aqui..." value={senha} onChange={event => setSenha(event.target.value)} />
                        <p className="caracteres">A senha deve ter pelo menos 6 caracteres</p>

                        <span className="senha">Confirmação de senha</span>
                        <input placeholder="Confirme sua nova senha aqui..." value={confirmSenha} onChange={event => setConfirmSenha(event.target.value)} />
                        <br></br>


                        <button type="submit" onClick={() => criarUsuario()} >Efetuar cadastro</button>
                    </div>

                </Container>
            </form>
        </Box>
    )
}