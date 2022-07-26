import styled from "styled-components";

export const Div = styled.div`
        margin: 1rem;
        /* display: grid;
        grid-template-columns: repeat(4, 1fr); */
        gap: 1rem;
        

        div {
            text-align: center;
            position: relative;
            width: 50%;

            p {
                position: absolute;
                bottom: 10px;
                left: 10px;
                color: white;
                max-width: 100%;
                word-wrap: break-word;
            }
        }
`;