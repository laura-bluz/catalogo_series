import { Sidebar } from "../../components/Sidebar";
import { Container, Box } from "./style";
import "../../components/Sidebar/style";
import { Link } from "react-router-dom";
// import volta from '../../assets/voltar.png';
import { useCallback, useEffect, useState } from "react";
import { Serie } from "../../interfaces";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export function Catalogo() {

    const [series, setSeries] = useState<Serie[]>([{}]);
    
    const getSeries = () => {
        const serieCollectionRef = collection(db, "series");
        getDocs(serieCollectionRef).then(data => {
            setSeries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }).catch(e => {
            alert('deu erro');
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    useEffect(() => {
        getSeries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box>
            <Sidebar />
            <Container>

                <nav>
                    <ul>
                        <li>Bem-vindo(a) "usuário"</li>
                        <li className="perfil">Meu Perfil</li>
                        <li className="link"><Link to="/cadastroSerie">Nova Série</Link></li>
                        <li className="minhasSeries"><Link to="/catalogo">Minhas Séries</Link></li>
                        <li className="logout">Botão Logout</li>
                    </ul>
                </nav>


                {/* <button className="voltar" type="button" onClick={() => voltar()} ><img src={volta} alt="voltar" /></button> */}
                {/* <h1>Suas séries aqui</h1>

                    <span className="nome">Imagem da série</span>
                    <span className="nome">Nome da série</span>

                    <br></br><br></br>

                    <span> Modal com a descrição</span>
                    <span className="descricao">Descrição da série</span> */}

                {series?.length > 0 ?
                    <div className="cards">
                        {series.map((serie) => {
                            return (
                                <div>
                                    <p>{serie.nome}</p>
                                    <p>{serie.descricao}</p>
                                </div> //componente Card

                            )
                        })}
                        {/* .reverse() */}
                    </div>
                    :
                    <div>
                        <h1>Você ainda não possui nenhuma série.</h1>
                        <p>Clique aqui para cadastrar uma nova série.</p>
                    </div>
                }
            </Container>
        </Box>
    )
}