import styled from "styled-components";

export const Nav = styled.nav`
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
                color: var(--blue-weak);
                /* filter: brightness(0.9); */
            }

            &.perfil {
                cursor: pointer;
            }

            &.novaSerie{    
                
                a {  
                    text-decoration: none;
                    color: white;

                    &:checked {
                            color: var(--blue-weak);
                        }
                }
            }

            &.minhasSeries{
                
                a {  
                    text-decoration: none;
                    color: white;

                    &:checked {
                            color: var(--blue-weak);
                        }
                }
            }

            &.logout{
                cursor: pointer;
                width: 10%;
                display: flex;
                align-items: center;

                a {
                    text-decoration: none;
                    color: white;

                    &:hover {
                        color: var(--blue-weak);
                    }
                }
            }
        }
    }
`