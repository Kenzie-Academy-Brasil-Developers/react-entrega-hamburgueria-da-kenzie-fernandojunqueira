import styled from "styled-components";

export const StyledListProducts = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 12px 20px;

    width: 70%;
    margin-top: 1rem;

    @media( width < 1024px){
        flex-wrap: unset;
        overflow-x: scroll;
        padding-bottom: 15px;
        width: 100%;
    }

`