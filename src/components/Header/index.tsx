import { Link } from "react-router-dom";
import { Nav } from "./style";
import sair from '../../assets/sair.png';
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { app, db } from "../../services/firebaseConnection";
import { getAuth, User } from "firebase/auth";


export function Header() {
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState<User | null>()
    getAuth(app).onAuthStateChanged((user) => {
        if (user)
            setUser(user)
    })


    async function getUsersDoc(uid?: string | null) {

        if (uid) {
            // const serieCollectionRef = collection(db, "users", uid)
            const docUser = doc(db, 'users', uid)
            const docSnap = await getDoc(docUser)
            console.log('docuser', docSnap);
            const data = docSnap.exists() ? docSnap.data() : null
            // console.log('data',data)
            if (data?.nome)
                setUserName(data?.nome);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    useEffect(() => {
        getUsersDoc(user?.uid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <Nav>
            <ul>
                <li>Bem-vindo(a) {userName}!</li>
                <li className="perfil"><Link to="/perfil">Meu Perfil</Link></li>
                <li className="novaSerie"><Link to="/cadastroSerie">Nova Série</Link></li>
                <li className="minhasSeries"><Link to="/catalogo">Minhas Séries</Link></li>
                <li className="logout"><img src={sair} alt="Logout" /><Link to="/">Logout</Link></li>
            </ul>
        </Nav >


    )
}