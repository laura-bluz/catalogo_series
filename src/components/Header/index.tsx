import { Link } from "react-router-dom";
import { Nav } from "./style";
import sair from '../../assets/sair.png';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../services/firebaseConnection";


export function Header() {
    const [users, setUsers] = useState({});
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


    return (
        <Nav>
            <ul>
                <li>Bem-vindo(a) {auth.currentUser?.email}</li>
                <li className="perfil">Meu Perfil</li>
                <li className="novaSerie"><Link to="/cadastroSerie">Nova Série</Link></li>
                <li className="minhasSeries"><Link to="/catalogo">Minhas Séries</Link></li>
                <li className="logout"><img src={sair} alt="Logout" /><Link to="/">Logout</Link></li>
            </ul>

            {/* <div>
                {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.nome}</p>
                        </div>
                    );
                })}
            </div> */}
        </Nav >


    )
}