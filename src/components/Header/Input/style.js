import styled from "styled-components";

export const StyledInput = styled.input`
   border: 1px solid var(--gray-border);
   border-radius: 8px;

   padding: 20.5px 120px 20.5px 12px;

   max-width: 100%;
   width: 365px;

   ::placeholder{
    color:#828282;
    font-size:16px;
    font-weight: 400;
   }

   :focus{
    outline: 1px solid var(--black)
   }
   
`