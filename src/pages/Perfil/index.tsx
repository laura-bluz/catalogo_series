import { Sidebar } from "../../components/Sidebar";
import { Box, Container } from "./style";

export function Perfil() {
    return (
        <Box>
            <Sidebar />
                <Container>
                    <div>
                        <h1>Perfil do Usuário</h1>

                        <span className="nome">Nome:</span>
                        <span className="sobrenome">Sobrenome:</span>
                        <span className="cidade">Cidade:</span>
                        <span className="estado">Estado:</span>
                        <span className="email">E-mail:</span>

                        <br></br>


                        <button type='submit'>Login</button>
                    </div>
                </Container>
        </Box>
    )
}