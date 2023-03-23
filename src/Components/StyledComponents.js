import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  width: 70%;
  background-color: #1c1938;
  border-radius: 10px;
  @media (max-width: 811px) {
    flex-direction: column-reverse;
    padding-bottom: 1em;
  }
`;

export const StyledImg = styled.img`
  display: block;
  border-radius: 0 10px 10px 0;
  @media (max-width: 811px) {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

export const OverlayDiv = styled.div`
  background: rgba(165, 94, 212, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 0 10px 10px 0;
  @media (max-width: 811px) {
    border-radius: 10px 10px 0 0;
  }
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
    gap: 2em;
    @media (max-width: 811px) {
    flex-direction: column;
    text-align: center;
    gap: 0;
  }`;
  }}
`;

export const StyledH1 = styled.h1`
  font-size: 2rem;
  color: #fefffd;
  @media (max-width: 811px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const StyledSpan = styled.span`
  color: #ab5cdb;
`;

export const NoMarginH2 = styled.h2`
  margin: 2em 0 0 0;
  color: white;
  @media (max-width: 811px) {
    margin: 0.5em;
  }
`;

export const NoMarginP = styled.p`
  margin-top: 0;
  color: white;
`;

export const StyledP = styled.p`
  color: #b0aec6;
  @media (max-width: 811px) {
    text-align: center;
    font-size: 0.9rem;
  }
`;

export const ImageContainerDiv = styled.div`
  position: relative;
`;
