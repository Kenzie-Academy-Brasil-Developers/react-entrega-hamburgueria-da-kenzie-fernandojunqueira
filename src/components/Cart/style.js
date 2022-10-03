import styled from "styled-components";

export const  StyledCart = styled.div`

    
    width: 365px;
    margin-top: 1rem;

    @media(width < 900px){
        width: 100%;
        text-align: -webkit-center;
        max-width: unset;
    }

    header{
        width: 100%;
        height: 65px;

        background-color: var(--green);

        border-radius: 4px 4px 0 0;

        @media(width < 900px){
        width: 300px;
    }
    }

    

    header > p {
        color: var(--white);
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;

        padding-top: 22px;
        padding-left: 20px;
    }

    .total__div{
        
        width: 100%;
        height: 142px;
        background-color: var(--gray);

        border-top: 2px solid #E0E0E0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        border-radius: 0px 0px 4px 4px;

        @media(width < 900px){
        width: 300px;
    }
        div{
            display: flex;
            justify-content: space-between;
            width: 92%;

            padding-top: 14px;
        }

        button{
            padding: 20.1px;
            margin-top: 22px;
            background-color: #E0E0E0;

            width: 92%;

            border-radius: 8px;


            color: #828282;
            font-size: 16px;
            font-weight: 600;
        }
    }
    
    ul{
        width: 100%;
        min-height: 158px;
        max-height: 323px;
        overflow-y: auto;
        background-color: var(--gray);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        li{
            display: flex;
            justify-content: space-between;
            width: 95%;
            margin-top: 18px;
            margin-bottom: 5px;
        }
        .desc{
            display: flex;
        }
        .desc > img{
            width: 80px;
            margin-right: 10px;
            background-color: #E0E0E0;
            border-radius: 5px;
        }
        .desc__text >  h3{
            height: 30px;
            font-size: 14px;
            font-weight: 700;

            margin-top: 5px;

            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        } 
        .desc__text > span{
            height: 16px;
            font-size: 12px;
            color: #828282;
        }

        .desc__btn--remove > button {
            font-size: 12px;
            font-weight: 500;
            color: #BDBDBD;

        }

        @media(width < 900px){
        width: 300px;
    }
    }
    
    


`

export const StyledCartEmpty = styled.div`
    
    width: 365px;
    margin-top: 1rem;

    @media(width < 900px){
        width: 100%;
        text-align: -webkit-center;
        max-width: unset;
    }

    header{
        width: 100%;
        height: 65px;

        background-color: var(--green);

        border-radius: 4px 4px 0 0;

        @media(width < 900px){
        width: 300px;
    }
    }

    

    header > p {
        color: var(--white);
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;

        padding-top: 22px;
        padding-left: 20px;
    }

    section{
        
        width: 100%;
        height: 158px;
        background-color: var(--gray);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media(width < 900px){
        width: 300px;
    }

        .total{
            display: flex;
            justify-content: space-between;
        }
    }

    section > p{

        color: var(--black);
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
    }

    section > span{

        color: #828282;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
    }

`