import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { Nav } from "./style";
import sair from '../../assets/sair.png';

export function Header() {
    return (
        <Nav>
            <ul>
                <li>Bem-vindo(a) {auth.currentUser?.email}</li>
                <li className="perfil">Meu Perfil</li>
                <li className="novaSerie"><Link to="/cadastroSerie">Nova Série</Link></li>
                <li className="minhasSeries"><Link to="/catalogo">Minhas Séries</Link></li>
                <li className="logout"><img src={sair} alt="Logout"/>Logout</li>
            </ul>
        </Nav >
    )
}