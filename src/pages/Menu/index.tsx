import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export function Menu() {

    let navigate = useNavigate();

    function cadastrarSerie() {
        return (
            navigate('/cadastroSerie', { replace: true })
        )
    }

    function verSeries() {
        return (
            navigate('/catalogo', { replace: true })
        )
    }


    return (
        <div>
            <form className="form-menu">
                <Container>
                    <div>
                        <h1>Por favor, escolha uma opção:</h1>

                        <div className="buttons">
                            <button type='submit' onClick={() => verSeries()}>Ver minhas séries</button>

                            <button type='submit' onClick={() => cadastrarSerie()}>Cadastrar nova série</button>
                        </div>

                    </div>
                </Container>
            </form>
            <Sidebar />
        </div>
    )
}