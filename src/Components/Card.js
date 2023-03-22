import image from "../Images/image.jpg";
import {
  FlexDiv,
  InnerDiv,
  StyledDiv,
  StyledH1,
  StyledImg,
  StyledSection,
} from "./StyledComponents";

export const Card = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <FlexDiv>
          <InnerDiv>
            <StyledH1>Get insights that help your business grow.</StyledH1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </InnerDiv>
          <FlexDiv row>
            <div>
              <h2>10k+</h2>
              <p>COMPANIES</p>
            </div>
            <div>
              <h2>314</h2>
              <p>TEMPLATES</p>
            </div>
            <div>
              <h2>12M+</h2>
              <p>QUERIES</p>
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
