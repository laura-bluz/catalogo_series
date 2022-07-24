import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;

    div {
        margin-left: 30rem;
        text-align:center;
        display: flex;
        flex-direction: column;
        width: 50%;

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

        p.caracteres {
            text-align: left;
            font-size: 0.8rem;
            color: #6e8cdb;
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
