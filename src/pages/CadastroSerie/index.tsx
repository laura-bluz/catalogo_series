import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";
import "../../components/Sidebar/style";
import { FormEvent, useState } from "react";

export function CadastroSerie() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    // const [file, setFile] = useState(0);

    function handleCadastroSerie(event: FormEvent) {
        event.preventDefault();

        console.log({
            nome,
            descricao
        })
    }

    return (
        <div>
            <form className="form-cadastroSerie" onSubmit={handleCadastroSerie}>

                <Container>
                    <div>
                        <h1>Cadastre aqui sua nova série:</h1>

                        <span className="nome">Nome da série</span>
                        <input placeholder='Digite o nome da série aqui...' value={nome} onChange={event => setNome(event.target.value)}/>

                        <span className="descricao">Descrição da série</span>
                        <input className="descricao" placeholder='Digite a descrição da série aqui...' value={descricao} onChange={event => setDescricao(event.target.value)}/>

                        <span className="file">Escolher imagem da série</span>
                        <input className="file" type="file" />
                        <br></br>

                        
                            <button type='submit'>Incluir série</button>
                    </div>
                </Container>
            </form>
            <Sidebar />
        </div>
    )
}