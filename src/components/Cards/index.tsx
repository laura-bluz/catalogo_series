import { Serie } from "../../interfaces";
import { Div } from './style';

interface CardProps {
    serie: Serie,
    key: number
}

export function Card(props: CardProps) {
    return (
        <Div>
            <div key={props.key}>
                {props.serie.imagemURL && <img src={props.serie.imagemURL} alt="Imagem" />}
                <p className="nome">{props.serie.nome}</p>
                <p className="nota">{props.serie.nota}/10</p>
                {/* <p>{props.serie.descricao}</p> */}
            </div>
        </Div>
    )
}