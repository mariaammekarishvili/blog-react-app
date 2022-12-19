import Card from "../../components/Card";
import Post from "../../components/Post";
import { StyledContainer, StyledContent, StyledFlexBox, StyledPostsContainer } from "./style";

const Home: React.FC = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledContent>
        <Card />
        <StyledFlexBox>
          <StyledPostsContainer>
            <Post />
          </StyledPostsContainer>
        </StyledFlexBox>
      </StyledContent>
    </StyledContainer>
  );
};

export default Home;
