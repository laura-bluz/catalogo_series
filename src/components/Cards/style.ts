import styled from "styled-components";

export const Div = styled.div`
        margin: 1rem;
        /* display: grid;
        grid-template-columns: repeat(4, 1fr); */
        gap: 1rem;
        width: 115%;
        

        div {
            text-align: center;
            position: relative;
            width: 50%;

            p.nome {
                position: absolute;
                bottom: 10px;
                left: 10px;
                color: yellow;
                max-width: 100%;
                word-wrap: break-word;
            }

            p.nota {
                position: absolute;
                bottom: 10px;
                right: 10px;
                color: yellow;
                max-width: 100%;
                word-wrap: break-word;
            }

            img:hover {
                filter: brightness(120%);
                cursor: pointer;
                
            }
        }
`;