import { FormEvent, useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Container, Box } from "./style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";
import volta from '../../assets/voltar.png';
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";


export function Cadastro() {

    let navigate = useNavigate();



    const [nome, setNome] = useState('');
    const [users, setUsers] = useState({});
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const userCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            // console.log("data", data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function criarUsuario() {
        if (senha === confirmSenha) {
            createUserWithEmailAndPassword(auth, email, senha)
                .then(value => {
                    console.log("v", value)
                    setDoc(doc(db, 'users', value.user.uid), { nome: nome, email: email, uid: value.user.uid, serie: [] })
                    .then (e => {
                        alert("Cadastro realizado com sucesso!");
                    })

                    // const user = addDoc(userCollectionRef, {
                    //     nome: nome,
                    //     email: email,
                    //     uid: value.user.uid
                    // }).then(e => {
                    //     console.log("user", user);
                    //     console.log("Cadastrado com sucesso! " + value.user.uid);
                    //     alert("Cadastro realizado com sucesso!");
                    // })

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

    // function signOut() {
    //     sessionStorage.clear();
    //     setUsers(null);

    //     return (
    //         navigate('/', { replace: true })
    //     )
    // }

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