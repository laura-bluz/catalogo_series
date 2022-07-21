import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";

export function Menu() {
    return (
        <div>
            <form className="form-menu">
                <Container>
                    <div>
                        <h1>Por favor, escolha uma opção:</h1>

                        <div className="buttons">
                            <button type='submit'>Ver minhas séries</button>

                            <button type='submit'>Cadastrar nova série</button>
                        </div>

                    </div>
                </Container>
            </form>
            <Sidebar />
        </div>
    )
}