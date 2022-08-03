import { getAuth, User } from "firebase/auth";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { app, db } from "../../services/firebaseConnection";
import { Box, Container } from "./style";

export function Perfil() {

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


    return (
        <Box>
            <Sidebar />
            <Container>

                <Header />
                <div>
                    <h1>Perfil do Usuário</h1>
                    {/* {users.map((user, i) => { */}
                    {/* return ( */}
                    {/* <div key={i}> */}
                    {/* <p>{user?.nome}</p> */}
                    <p>{data?.nome}</p>
                    {/* <p>{user.descricao}</p> */}
                    {/* <p>{user.nota}</p> */}
                    {/* ) */}
                    {/* })} */}

                    {/* <span className="nome">Nome:</span>
                    <p>{ }</p>
                    <span className="sobrenome">Sobrenome:</span>
                    <span className="cidade">Cidade:</span>
                    <span className="estado">Estado:</span>
                    <span className="email">E-mail:</span> */}

                    <br></br>
                    {/* <button type='submit'>Login</button> */}
                </div>
            </Container>
        </Box>
    )
}