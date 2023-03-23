import image from "../Images/image.jpg";
import {
  FlexDiv,
  ImageContainerDiv,
  InnerDiv,
  NoMarginH2,
  NoMarginP,
  OverlayDiv,
  StyledDiv,
  StyledH1,
  StyledImg,
  StyledP,
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
            <StyledP>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </StyledP>
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
        <ImageContainerDiv>
          <StyledImg src={image} />
          <OverlayDiv />
        </ImageContainerDiv>
      </StyledDiv>
    </StyledSection>
  );
};
