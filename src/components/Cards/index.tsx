import { useState } from "react";
import { Serie } from "../../interfaces";
import { Div } from './style';

interface CardProps {
    serie: Serie;
    callbackValue: (
        serie: Serie
    ) => void;
}

export function Card(props: CardProps) {

    return (
        <Div>
            <div onClick={() => props.callbackValue(props.serie)}>
                {props.serie.imagemURL && <img src={props.serie.imagemURL} alt="Imagem" />}
                <p className="nome">{props.serie.nome}</p>
                <p className="nota">{props.serie.nota}/10</p>
            </div>
        </Div>


    )
}
