import styled from "styled-components";

export const Div = styled.div`
        margin: 1rem;
        /* display: grid;
        grid-template-columns: repeat(4, 1fr); */
        gap: 1rem;
        

        div {
            border: 1px solid black;
            text-align: center;
            position: relative;
            /* width: 60%; */

            p {
                position: absolute;
                bottom: 10px;
                color: white;
            }
        }
`;