import styled from "styled-components";

export const Div = styled.div`
        margin-top: 1rem;
        /* display: grid;
        grid-template-columns: repeat(4, 1fr); */
        gap: 1rem;
        width: 100%;

        div {
            text-align: center;
            position: relative;
            width: 100%;
            /* overflow: scroll; */

            p.nome {
                position: absolute;
                bottom: 10px;
                left: 85px;
                color: yellow;
                max-width: 100%;
                word-wrap: break-word;
            }

            p.nota {
                position: absolute;
                bottom: 10px;
                right: 90px;
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