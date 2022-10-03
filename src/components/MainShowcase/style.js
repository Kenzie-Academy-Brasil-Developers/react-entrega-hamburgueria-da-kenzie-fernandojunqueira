import styled from "styled-components";

export const StyledMainShowcase = styled.main`

    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;

    @media ( width < 1024px){
        flex-direction: column;
    }
`