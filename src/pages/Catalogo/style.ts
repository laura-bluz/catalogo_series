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
                            color: white;

                            &:hover {
                                    color: var(--blue);
                                }
                        }
                    }

                    &.minhasSeries {
                        a {
                            text-decoration: none;
                            color: var(--blue);    
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
           
            &.div {
                border: 1px solid black;
                text-align: center;
            }
        }
`;
