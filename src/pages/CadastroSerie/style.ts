import styled from "styled-components";


export const Container = styled.div`
    position: absolute;

    width: 100%;
    margin-left: 24rem;
    
    div {
        position: absolute;
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
        
        span.nome {
            margin-top: 5rem;
        }
        
        span.descricao, span.file {
            margin-top: 1rem;
        }

        input {
            width: 50%;

            &:focus {
                background: #e0e0f8;
            }
        }

        input.descricao {
            width: 100%;
            height: 50px;
        }

        input.file {
            color: var(--blue);
            transition: filter 0.2s;
            
            &:hover {
                filter: brightness(0.9);
            }
        }

        button {
            margin-top: 2rem;
            background-color: var(--blue);
            color: white;
            width: 20%;
            align-self: center;

            transition: filter 0.2s;
            
            &:hover {
                filter: brightness(0.5);
            }
        }
    }
`;
