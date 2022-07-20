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
        }
    }
`;
