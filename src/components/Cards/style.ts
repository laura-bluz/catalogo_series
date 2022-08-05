import styled from "styled-components";

export const Div = styled.div`
       
        /* display: grid;
        grid-template-columns: repeat(4, 1fr); */
        /* gap: 3rem; */
        width: 100%;
        
        div {
            text-align: center;
            position: relative;
            /* width: 100%; */
            width: 100%;
            height: 50vh;
            /* overflow: scroll; */

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
                right: 15px;
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