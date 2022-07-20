import logo from '../../assets/logo1.png';
import { Container, Content } from './style';

export function Sidebar() {
    return (
        <Container>
            <Content>
                <img src={logo} alt='Suas Séries Aqui' />
                <h1>Lembrou de alguma série?</h1>
                <h2>É só guardar aqui para não esquecer!</h2>

                <h3>Criado por </h3>
                <p>Laura Bamberg da Luz</p>
            </Content>
        </Container>
    )
}