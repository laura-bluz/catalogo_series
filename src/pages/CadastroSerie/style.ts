import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: row;
`;


export const Container = styled.div`

    width: 100%;
    nav {
            text-align:center;
            padding: 1rem;
            background: black;
                
            ul{
                display: flex;
                justify-content: space-between;

                li {
                    color: white;
                    list-style: none;
                    font-size: 18px;
                    margin-left: 10rem;

                    transition: color 0.2s;
                    
                    &:hover {
                        color: var(--blue);
                        /* filter: brightness(0.9); */
                    }

                    &.perfil {
                        cursor: pointer;
                    }

                    &.link {
                        
                        a {  
                            text-decoration: none;
                            color: var(--blue);

                            &:hover {
                                    color: var(--blue);
                                }
                        }
                    }

                    &.novaSerie {
                        a {
                            text-decoration: none;
                            color: var(--blue);    
                        }
                    }

                    &.minhasSeries {
                        a {
                            text-decoration: none;
                            color: white;
                            
                            &:hover {
                                color: var(--blue);
                            }
                        }
                    }   

                    &.logout{
                        cursor: pointer;
                        margin-right: 1rem;
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
`;
