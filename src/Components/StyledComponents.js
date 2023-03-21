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
`;

export const InnerDiv = styled.div`
  text-align: left;
  width: 70%;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => {
    if (props.row)
      return `
    flex-direction: row;`;
  }}
`;
