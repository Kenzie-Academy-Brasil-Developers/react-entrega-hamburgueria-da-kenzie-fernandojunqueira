import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: var(--gray);

    @media( width < 673px){
        height: 139px;
    }

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 100%;
        
        width: 90%;
        margin: 0 auto;

        @media (width < 673px){

        flex-direction: column;
        justify-content: space-around;
        }

        @media (width: 381px){
            margin: 0 5px;
        }
    }
    height: 80px;

    .search{
        position: relative;
        max-width: 100%;
    }
    .logo > h1{
        font-size: 27px;
        color: var(--black)
    }
    .logo > h1 span{
        color: #EB5757;
        font-size: 18px;
        font-weight: 600;
    }
`