import styled from "styled-components";

export const Container = styled.div`
position: absolute;

    width: 100%;
    margin-left: 24rem;

    div {
        margin-left: 30rem;
        margin-top: 10rem;
        text-align:center;
        display: flex;
        flex-direction: column;
        width: 30%;

        h1, span {
            color: var(--text-title);
        }
        
        span {
            text-align: left;
        }
        
        span.email {
            margin-top: 5rem;
        }
        
        span.senha {
            margin-top: 1rem;
        }

        input {
            width: 50%;

            &:focus {
                background: #e0e0f8;
            }
        }

        button {
            margin-top: 2rem;
            background-color: var(--blue);
            color: white;
            width: 30%;
            align-self: center;

            transition: filter 0.2s;
            
            &:hover {
                filter: brightness(0.5);
            }

            &.voltar {
                background: transparent;
                border: none;
                text-align: right;
                margin-left: 30rem;
            }
        }
    }
`;
