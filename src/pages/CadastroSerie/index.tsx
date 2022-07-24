import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";
import "../../components/Sidebar/style";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import volta from "../../assets/voltar.png";
import { addDoc, collection } from "firebase/firestore";
import { Serie } from "../../interfaces";
import { db } from "../../services/firebaseConnection";

export function CadastroSerie() {
    // useState<{ nome?: string, descricao?: string }>({
    //     nome: '',
    //     descricao: '',
    // });

    const [serie, setSerie] = useState<Serie>({
        nome: '',
        descricao: ''
    });

    const serieCollectionRef = collection(db, "series");

    async function incluirSerie() {
        await addDoc(serieCollectionRef, serie); // create
        console.log(serie);
        navigate('/catalogo', { replace: true })
    }

    // useEffect(() => {
    //     const getSeries = async () => {
    //         const data = await getDocs(serieCollectionRef);
    //         // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //         setSerie(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    //     };
    //     getSeries();
    // }, []);

    let navigate = useNavigate();


    function handleCadastroSerie(event: FormEvent) {
        event.preventDefault();
    }

    // function voltar(): void {
    //     navigate('/catalogo', { replace: true })
    // }

    return (
        <div>
            <form className="form-cadastroSerie" onSubmit={handleCadastroSerie}>

                <Container>
                    <nav>
                        <ul>
                            <li>Bem-vindo(a) "usuário"</li>
                            <li className="perfil">Meu Perfil</li>
                            <li className="novaSerie"><Link to="/cadastroSerie">Nova Série</Link></li>
                            <li className="minhasSeries"><Link to="/catalogo">Minhas Séries</Link></li>
                            <li className="logout">Botão Logout</li>
                        </ul>
                    </nav>

                    <div>
                        {/* <button className="voltar" type="button" onClick={() => voltar()} ><img src={volta} alt="voltar" /></button> */}
                        <h1>Cadastre aqui sua nova série:</h1>

                        <span className="nome">Nome da série</span>
                        {/* <input type="text" placeholder='Digite o nome da série aqui...' value={nome} onChange={event => setNome(event.target.value)} /> */}
                        <input placeholder='Digite o nome da série aqui...' value={serie.nome} onChange={event => setSerie({ ...serie, nome: event.target.value })} />

                        <span className="descricao">Descrição da série</span>
                        {/* <input type="text" className="descricao" placeholder='Digite a descrição da série aqui...' value={descricao} onChange={event => setDescricao(event.target.value)} /> */}
                        <input className="descricao" placeholder='Digite a descrição da série aqui...' value={serie.descricao} onChange={event => setSerie({ ...serie, descricao: event.target.value })} />

                        <span className="file">Escolher imagem da série</span>
                        <input className="file" type="file" />
                        <br></br>


                        <button type='submit' onClick={() => incluirSerie()}>Incluir série</button>

                    </div>
                </Container>
            </form>
            <Sidebar />

            <div>
                <ul>
                    {/* {series.map((serie) => {
                        return (
                            <div key={serie.id}>
                                <li>{serie.nome}</li>
                                <li>{serie.descricao}</li>
                            </div>
                        )
                    })} */}
                </ul>
            </div>
        </div>
    )
}