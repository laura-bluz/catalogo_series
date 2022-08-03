import { getAuth, User } from "firebase/auth";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { app, db } from "../../services/firebaseConnection";
import { Box, Container } from "./style";
import Modal from "react-modal";

export function Perfil() {

    let navigate = useNavigate();

    const [data, setData] = useState<DocumentData | null>()
    const [userAuth, setUserAuth] = useState<User | null>()
    getAuth(app).onAuthStateChanged((user) => {
        if (user)
            setUserAuth(user)
    })

    async function getUserAuth(uid?: string | null) {

        if (uid) {
            // const serieCollectionRef = collection(db, "users", uid)
            const docUser = doc(db, 'users', uid)
            const docSnap = await getDoc(docUser)
            // console.log('docuser', docSnap);
            const data = docSnap.exists() ? docSnap.data() : null
            console.log('data', data)
            setData(data)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    useEffect(() => {
        getUserAuth(userAuth?.uid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userAuth]);


    function go() {
        navigate('/catalogo', { replace: true })
    }

    return (
        <Box>
            <Sidebar />
            <Container>
                <Header />

                <h1>Perfil do Usuário</h1>

                <div className="dados">


                    <div>
                        <p><span>Nome:</span> {data?.nome}</p>
                    </div>
                    <div>
                        <p><span>Sobrenome:</span> {data?.sobrenome}</p>
                    </div>

                    <div>
                        <p><span>Cidade:</span> {data?.cidade}</p>
                    </div>
                    <div>
                        <p><span>Estado:</span> {data?.estado}</p>
                    </div>
                    <div>
                        <p><span>E-mail:</span> {data?.email}</p>
                    </div>
                    <br></br>
                    <div className="buttons">
                        <button type='button'>Editar Perfil</button>
                        <button type='button' onClick={() => go()}>Salvar Perfil</button>
                    </div>
                </div>
            </Container>
        </Box>
    )
}