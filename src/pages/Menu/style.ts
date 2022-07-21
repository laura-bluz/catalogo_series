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

        h1 {
            color: var(--text-title);
        }
        
    }

    div.buttons {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        margin-left: 0;
        
        button {
            margin-top: 2rem;
            background-color: var(--blue);
            color: white;
            width: 30%;
            align-self: center;
        }
    }
`;
