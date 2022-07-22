import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";
import "../../components/Sidebar/style";
import { useNavigate } from "react-router-dom";
import volta from '../../assets/voltar.png';

export function Catalogo() {

    let navigate = useNavigate();

    function voltar() {
        return (
            navigate('/menu', { replace: true })
        )
    }

    return (
        <div>
            <Container>
                <div>
                    <button className="voltar" type="button" onClick={() => voltar()} ><img src={volta} alt="voltar" /></button>
                    <h1>Suas séries aqui</h1>

                    <span className="nome">Imagem da série</span>
                    <span className="nome">Nome da série</span>

                    <br></br><br></br>

                    <span> Modal com a descrição</span>
                    <span className="descricao">Descrição da série</span>


                </div>
            </Container>
            <Sidebar />
        </div>
    )
}