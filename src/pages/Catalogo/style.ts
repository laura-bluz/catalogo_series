import styled from "styled-components";
import img from "../../assets/series.jpg";

export const Box = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Background = styled.div`
    background-image: url(${img});
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.75;
    filter: brightness(10%);
    /* filter: contrast(30%); */


`;

export const ModalBlock = styled.div`

    div.modalGeral {
        display: flex;
        flex-direction: row;


        img {
            width: 50% !important;
            height: 90vh; 
        }

        div.dados {
            margin-top: 1rem;
            height: 100%;
            font-size: 18px;     
            width: 50%;
        
            span {
                color: var(--blue);
                margin-top: 3rem;
                margin-left: 2rem;
            }

            p {
                margin-left: 2rem;
                margin-top: 3rem;
                font-family: 'cursive';
            }

            div {
                display: flex;
            }
        }

        div.nota {
            p{
                margin-left: 2.5rem;
            }
        }

        div.review {
            display: flex;
            width: 100%;
            height: 50vh;
            overflow-y: auto; 

            p {
                width: 80%;
                margin-left: 1.5rem;
                word-break: break-all;
                font-family: 'cursive' !important;
            }
        }        
    }
`;


export const Container = styled.div`
    width: 100%;

    /* background-image: url(${img}); */
    

    /* background-image: repeating-linear-gradient(50deg, black, blue 10%, black 20%); */
    nav {
        ul {
            li {
            
                &.perfil {
                    cursor: pointer;

                    a {
                        text-decoration: none;
                        color: white;

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
                    a {
                        color: var(--blue-weak);
                    }
                }
            }
        }
    }

        div.cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            padding: 2rem;
            overflow-y: auto !important;
            height: 85vh;
            
            img {
                width: 100%;
                height: 50vh;
            }
        }

        div.else {
            display: flex;
            flex-direction: column;
            width: 40%;
            margin-top: 2rem;
            margin-left: 0.5rem;
            /* text-align: center; */
            color: var(--blue);
            /* color: white; */

            p {
                
                width: 100%;
                margin-top: 3rem;
                margin-left: 25rem;
                font-size: 30px;
                color: var(--text-title);
                /* color: white; */
                display: flex;
                align-items: center;
            }

            img {
                width: 50%;
            }
        }

        div.else_flecha {
            width: 100%;

            img {
                margin-left: 53rem;
                width: 20%;
            }
        }
`;
