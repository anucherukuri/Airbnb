import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: white;
  bottom: 0;
  width: 100%;
    @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
font-family: inherit !important;
font-weight: inherit !important;
font-style: inherit !important;
font-variant: inherit !important;
text-decoration: none !important;
color: rgb(34, 34, 34) !important;
font-size: 13px !important;
line-height: 22px !important;
outline: currentcolor none medium !important;
`;
   
export const Heading = styled.p`
color: black !important;
margin-top: 0px !important;
margin-bottom: 0px !important;
font-size: 14px !important;
font-weight: bold !important;
`;