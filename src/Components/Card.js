import image from "../Images/image.jpg";
import {
  FlexDiv,
  InnerDiv,
  NoMarginH2,
  NoMarginP,
  StyledDiv,
  StyledH1,
  StyledImg,
  StyledSection,
  StyledSpan,
} from "./StyledComponents";

export const Card = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <FlexDiv>
          <InnerDiv>
            <StyledH1>
              Get <StyledSpan>insights</StyledSpan> that help your business
              grow.
            </StyledH1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </InnerDiv>
          <FlexDiv row>
            <div>
              <NoMarginH2>10k+</NoMarginH2>
              <NoMarginP>COMPANIES</NoMarginP>
            </div>
            <div>
              <NoMarginH2>314</NoMarginH2>
              <NoMarginP>TEMPLATES</NoMarginP>
            </div>
            <div>
              <NoMarginH2>12M+</NoMarginH2>
              <NoMarginP>QUERIES</NoMarginP>
            </div>
          </FlexDiv>
        </FlexDiv>
        <div>
          <StyledImg src={image} />
        </div>
      </StyledDiv>
    </StyledSection>
  );
};
