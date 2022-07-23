import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";
import "../../components/Sidebar/style";
import { FormEvent, useState } from "react";
import {  useNavigate } from "react-router-dom";
import volta from '../../assets/voltar.png';


export function CadastroSerie() {

    let navigate = useNavigate();


    // const [file, setFile] = useState(0);
    const [serie, setSerie] = useState<{nome?: string, descricao?: string} >
    ({})

    function handleCadastroSerie(event: FormEvent) {
        event.preventDefault();
    }

    function incluirSerie(): void {

        console.log(serie.nome, serie.descricao)
            // navigate('/catalogo', { replace: true })
    }

    function voltar(): void {
            navigate('/catalogo', { replace: true })
    }

    return (
        <div>
            <form className="form-cadastroSerie" onSubmit={handleCadastroSerie}>

                <Container>
                    <div>
                        <button className="voltar" type="button" onClick={() => voltar()} ><img src={volta} alt="voltar" /></button>
                        <h1>Cadastre aqui sua nova série:</h1>

                        <span className="nome">Nome da série</span>
                        <input placeholder='Digite o nome da série aqui...' value={serie.nome} onChange={event => setSerie({...serie, nome: event.target.value})} />
                                                                                
                        <span className="descricao">Descrição da série</span>
                        <input className="descricao" placeholder='Digite a descrição da série aqui...' value={serie.descricao} onChange={event => setSerie({...serie, descricao: event.target.value})} />

                        <span className="file">Escolher imagem da série</span>
                        <input className="file" type="file" />
                        <br></br>


                        <button type='submit' onClick={() => incluirSerie()}>Incluir série</button>
                    </div>
                </Container>
            </form>
            <Sidebar />
        </div>
    )
}