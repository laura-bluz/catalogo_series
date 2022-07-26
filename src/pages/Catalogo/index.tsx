import { Sidebar } from "../../components/Sidebar";
import { Container, Box } from "./style";
import "../../components/Sidebar/style";
import { useEffect, useState } from "react";
import { Serie } from "../../interfaces";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { Header } from "../../components/Header";
import flecha_para_cima from "../../assets/flecha_para_cima.png"
import { Card } from "../../components/Cards";


export function Catalogo() {

    const [series, setSeries] = useState<Serie[]>([{}]);
    console.log('s', series);

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

                <Header />

                {/* <button className="voltar" type="button" onClick={() => voltar()} ><img src={volta} alt="voltar" /></button> */}
                {/* <h1>Suas séries aqui</h1>

                    <span className="nome">Imagem da série</span>
                    <span className="nome">Nome da série</span>

                    <br></br><br></br>

                    <span> Modal com a descrição</span>
                    <span className="descricao">Descrição da série</span> */}

                {series?.length > 0 ?
                    <div className="cards">
                        {series.map((serie, i) => {
                            return (
                                <Card
                                    key={i}
                                    serie={serie}
                                />
                                // <div key={i}>
                                //     {serie.imagemURL && <img src={serie.imagemURL} alt="Imagem" />}
                                //     <p>{serie.nome}</p>
                                //     <p>{serie.descricao}</p>
                                // </div> //componente Card
                            )
                        })}
                        {/* .reverse() */}
                    </div>
                    :
                    <div className="else">
                        <h1>Olá, vimos que você ainda não possui nenhuma série!</h1>
                        <div className="else_flecha">
                            <img src={flecha_para_cima} alt="flecha que aponta para Nova Série" />
                            <p>Então clique aqui para cadastrar uma nova série.</p>
                        </div>
                    </div>
                }
            </Container>
        </Box>
    )
}