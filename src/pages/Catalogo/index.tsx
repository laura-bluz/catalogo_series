import { Sidebar } from "../../components/Sidebar";
import { Container, Box } from "./style";
import "../../components/Sidebar/style";
import { useEffect, useState } from "react";
import { Serie } from "../../interfaces";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { app, auth, db } from "../../services/firebaseConnection";
import { Header } from "../../components/Header";
import flecha_para_cima from "../../assets/flecha_para_cima.png"
import { Card } from "../../components/Cards";
import { getAuth, User } from "firebase/auth";
import "firebase/auth";
import firebase from "firebase/app";


export function Catalogo() {

    const [series, setSeries] = useState<Serie[]>([{}]);
    // console.log('s', series);
    const [user, setUser] = useState<User | null>()
    getAuth(app).onAuthStateChanged((user) => {
        if (user)
            setUser(user)   
    })


    async function getSeries(uid?: string | null) {


        if (uid) {
            // const serieCollectionRef = collection(db, "users", uid)
            const docUser = doc(db, 'users', uid)
            const docSnap = await getDoc(docUser)
            console.log('docuser', docSnap);
            const data = docSnap.exists() ? docSnap.data() : null
            console.log('data',data)
            setSeries(data?.serie);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    useEffect(() => {
        getSeries(user?.uid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <Box>
            <Sidebar />

            <Container>

                <Header />

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