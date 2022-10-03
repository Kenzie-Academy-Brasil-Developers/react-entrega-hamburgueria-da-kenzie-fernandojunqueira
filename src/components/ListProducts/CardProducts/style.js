import styled from "styled-components";

export const StyledCardProducts = styled.li`
    
    max-width: 300px;
    width: 260px;
    height: 346px;

    border: 2px solid var(--gray-border);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    figure{
        width: 100%;
        height: 40%;
        background-color: var(--gray);
        display: flex;
        justify-content: center;

    }
    .main{
        display: flex;
        flex-direction: column;

        padding: 7px 21px;
        width: 100%;
        height: 100%
    }
    .main > h2{
        margin-top: 14px;

        height: 40px;
    }
    .main > span{
        margin-top: 14px;

        color: #828282;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px

    }
    .main > p{
        margin-top: 14px;

        color:  var(--green);
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
    }
    button{
        background-color: var(--green);
        padding: 11.5px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        color: var(--white);
        margin-top: 14px;
        width: 106px;
    }

    @media(width < 1024px){
        min-width: 270px;
    }
`