import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    margin-left: 24rem;
    
    div {
        position: absolute;
        /* margin-left: 30rem; */
        /* margin-top: 0.5rem; */
        text-align:center;
        display: flex;
        flex-direction: column;
        width: 80%;
        padding: 1rem;
        background: var(--blue);
            
        ul{
            display: flex;
            justify-content: space-between;
            background: var(--blue);
                
            li {
                color: white;
                list-style: none;
                font-size: 18px;
                margin-left: 10rem;

                transition: color 0.2s;
                
                &:hover {
                    color: black;
                    /* filter: brightness(0.9); */
                }

                &.link{
                    
                    a {  
                        text-decoration: none;
                        color: white;

                        &:hover {
                                color: black;
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
`;
