import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  width: 70%;
  background-color: #1c1938;
`;

export const StyledImg = styled.img`
  display: block;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0a0c1b;
`;

export const InnerDiv = styled.div`
  text-align: left;
  width: 70%;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.row)
      return `
    flex-direction: row;
    justify-content: flex-start;
    width: 70%;
    text-align: left;
    gap: 2em;`;
  }}
`;

export const StyledH1 = styled.h1`
  font-size: 2rem;
  color: #fefffd;
`;

export const StyledSpan = styled.span`
  color: #ab5cdb;
`;

export const NoMarginH2 = styled.h2`
  margin-bottom: 0;
`;

export const NoMarginP = styled.p`
  margin-top: 0;
`;
