import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";
import "../../components/Sidebar/style";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import volta from "../../assets/voltar.png";
import { addDoc, collection, getDocs, getFirestore, doc } from "firebase/firestore";
import { app } from "../../services/firebaseConnection";


export function CadastroSerie() {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [series, setSeries]= useState<any[]>([]); // any arrumar
    // const [file, setFile] = useState(0);
    // const [series, setSeries] = useState<{ nome?: string, descricao?: string }>
    //     ({})

    const db = getFirestore(app);
    const serieCollectionRef = collection(db, "series");

    async function incluirSerie() {
        const serie = await addDoc(serieCollectionRef, {
            nome,
            descricao,
        });
        console.log(serie);
        navigate('/catalogo', { replace: true })
    }

    useEffect(() => {
        const getSeries = async () => {
            const data = await getDocs(serieCollectionRef);
            // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setSeries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            
        };
        getSeries();
    }, []);

    let navigate = useNavigate();


    function handleCadastroSerie(event: FormEvent) {
        event.preventDefault();
    }

    function voltar(): void {
        navigate('/catalogo', { replace: true })
    }

    return (
        <div>
            <form className="form-cadastroSerie" onSubmit={handleCadastroSerie}>

                <Container>
                    <div>
                        <button className="voltar" type="button" onClick={() => voltar()} ><img src={volta} alt="voltar" /></button>
                        <h1>Cadastre aqui sua nova série:</h1>

                        <span className="nome">Nome da série</span>
                        <input type="text" placeholder='Digite o nome da série aqui...' value={nome} onChange={event => setNome(event.target.value)} />
                        {/* <input placeholder='Digite o nome da série aqui...' value={series.nome} onChange={event => setSeries({ ...series, nome: event.target.value })} /> */}

                        <span className="descricao">Descrição da série</span>
                        <input type="text" className="descricao" placeholder='Digite a descrição da série aqui...' value={descricao} onChange={event => setDescricao(event.target.value)} />
                        {/* <input className="descricao" placeholder='Digite a descrição da série aqui...' value={series.descricao} onChange={event => setSeries({ ...series, descricao: event.target.value })} /> */}

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
                    {series.map((serie) => {
                        return (
                            <div key={serie.id}>
                                <li>{serie.nome}</li>
                                <li>{serie.descricao}</li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}