import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.div`
    width: 100%;
    /* background-image: repeating-linear-gradient(50deg, black, blue 10%, black 20%); */
        
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

                    &.perfil {
                        cursor: pointer;
                    }

                    &.link {
                        
                        a {  
                            text-decoration: none;
                            color: white;

                            &:hover {
                                    color: var(--blue);
                                }
                        }
                    }

                    &.novaSerie {
                        a {
                            text-decoration: none;
                            color: white;
                            
                            &:hover {
                                color: var(--blue-weak);
                            }
                        }
                    }  

                    &.minhasSeries {
                        a {
                            text-decoration: none;
                            color: var(--blue-weak);    
                        }
                    }   

                    &.logout{
                        cursor: pointer;
                        margin-right: 1rem;
                    }
                }
            }
        }

        div.cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);

            img {
                /* width: 170px;
                height: 250px; */
                width: 14.31rem;
    height: 21.25rem;
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
