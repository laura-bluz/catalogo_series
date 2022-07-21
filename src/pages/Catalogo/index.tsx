import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";
import "../../components/Sidebar/style";


export function Catalogo() {
    return (
        <div>
                <Container>
                    <div>
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