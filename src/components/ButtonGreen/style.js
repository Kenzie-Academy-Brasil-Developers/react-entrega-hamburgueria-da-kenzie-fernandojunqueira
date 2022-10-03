import styled from "styled-components";

export const StyledButton = styled.button`

    background-color:var(--green);

    padding: 11.5px 20px;

    border-radius: 8px;
   
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color:var(--white);

    position: absolute;
    left: 246px;
    bottom: 10px;

    @media (width < 395px){
        left: 196px;
    }
    @media (width < 388px){
        left: 217px;
    }
    @media (width < 370px){
        left: 204px;
    }
    @media (width < 354px){
        left: 173px;
    }

    :hover{
        background-color:#93D7AF;
    }
`