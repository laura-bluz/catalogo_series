import styled from 'styled-components';

export const Container = styled.nav`
    background: var(--blue);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
  
    max-width: 24rem;
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    max-width: 1120px;

    padding: 5rem 1rem;

    img {
        border-radius: 2.5rem;
    }

    h1 {
        margin-top: 6rem;
        color: white;
    }

    h2 {
        margin-top: 1rem;
    }

    h3 {
        margin-top: 15rem;
        color: white;
        font-style: italic;
    }

    p {
        margin-left: 2rem;
        color: white;
        font-weight: 500;
        font-size: 20px;
        font-style: italic;
    }
    
`; 
