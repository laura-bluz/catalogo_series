import { Sidebar } from "../../components/Sidebar";
import { Container, Box, ModalBlock } from "./style";
import "../../components/Sidebar/style";
import { useEffect, useState } from "react";
import { Serie } from "../../interfaces";
import { doc, getDoc } from "firebase/firestore";
import { app, db } from "../../services/firebaseConnection";
import { Header } from "../../components/Header";
import flecha_para_cima from "../../assets/flecha_para_cima.png"
import { Card } from "../../components/Cards";
import { getAuth, User } from "firebase/auth";
import Modal from "react-modal";



export function Catalogo() {

    const [selectSerie, setSelectSerie] = useState<Serie>({});
    const [modalOpen, setModalOpen] = useState(false);
    const [series, setSeries] = useState<Serie[]>([{}]);
    const [user, setUser] = useState<User | null>()
    getAuth(app).onAuthStateChanged((u) => {
        if (u && !user)
            setUser(u)
    })

    async function getSeries(uid?: string | null) {


        if (uid) {
            // const serieCollectionRef = collection(db, "users", uid)
            console.log("entrou")
            const docUser = doc(db, 'users', uid)
            const docSnap = await getDoc(docUser)
            // console.log('docuser', docSnap);
            const data = docSnap.exists() ? docSnap.data() : null
            // console.log('data',data)
            setSeries(data?.serie);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    useEffect(() => {
        getSeries(user?.uid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);


    console.log("modalOpen", modalOpen)
    function getcallbackValue(serie: Serie) {
        if (!modalOpen) {
            setModalOpen(true);
            setSelectSerie(serie)

        }
    }

    return (
        <>
            <Box>
                <Sidebar />

                <Container>

                    <Header />

                    {series?.length > 0 ?
                        <div className="cards">
                            {series.map((serie, i) => {
                                return (
                                    <Card
                                        // onOpenModal={handleOpenModal}
                                        callbackValue={getcallbackValue}

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

            <Modal
                isOpen={modalOpen}

                style={{ content: { marginLeft: '20%', marginRight: '20%', padding: '0', overflow: 'hidden' } }}
                onRequestClose={() => setModalOpen(false)}
            // ariaHideApp={false}
            >
                <ModalBlock>
                    {/* <img height={'100%'} width={'69.23%'} src={selectSerie.imagemURL} alt="Imagem" /> */}
                    <div className="modalGeral">
                        <img src={selectSerie.imagemURL} alt="Imagem" />

                        <div className="dados">
                            <div className="nome">
                                <span>Nome:</span>
                                <p>{selectSerie.nome}</p>
                            </div>
                            <br></br>
                            <div className="nota">
                                <span>Nota:</span>
                                <p>{selectSerie.nota}/10</p>
                            </div>
                            <br></br>
                            <div className="review">
                                <span>Review:</span>
                                <p style={{ marginLeft: '1.5rem', marginTop: '3rem', fontFamily: 'cursive', wordBreak: 'break-all' }}> {selectSerie.descricao}</p>
                            </div>
                        </div>
                    </div>
                </ModalBlock>
            </Modal>

        </>
    )
}