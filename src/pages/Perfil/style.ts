import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: row;
`;


export const Container = styled.div`

    width: 100%;
    nav {
        ul {
            li {
            
                &.perfil {
                    cursor: pointer;

                    a {
                        text-decoration: none;
                        color: var(--blue-weak);

                        &:hover {
                            color: var(--blue-weak);
                        }
                    }
                }

                &.novaSerie {
                    a:hover {
                        color: var(--blue-weak);
                    }
                }

                &.minhasSeries {
                    a:hover {
                        color: var(--blue-weak);
                    }
                }
            }
        }
    }

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
        
        span.nome {
            margin-top: 5rem;
        }
        
        span.descricao, span.file, span.nota {
            margin-top: 1rem;
        }
        
        p.caracteres {
            text-align: left;
            font-size: 0.8rem;
            color: #6e8cdb;
        }

        input {
            width: 50%;

            &:focus {
                background: #e0e0f8;
            }

            &.nota {
                width: 10%;
                color: var(--blue);
                text-align: center;
            }
        }

        input.descricao {
            width: 100%;
            height: 50px;
        }

        input.file {
            color: var(--blue);
            width: 100%;
            transition: filter 0.2s;
            
            &:hover {
                filter: brightness(0.9);
            }
        }

        li {
            color: red;
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

            &.voltar {
                background: transparent;
                border: none;
                text-align: right;
                margin-left: 35rem;
            }
        }
    }


    h1 {
            color: var(--text-title);
            text-align: center;
            margin-top: 2rem;
    }

    div.dados {
        margin: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        
        p {
            font-size: 20px;
        }

        div {
            text-align: left;
            margin-top: 3rem;
            margin-left: 0;
            
            &.buttons {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
        }
    }
`;
