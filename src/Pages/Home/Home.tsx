import Posts from "../../components/Post";
import { PostStore } from "../../components/Post/PostContext";
import { StyledContainer, StyledContent } from "./style";

const Home: React.FC = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledContent>
        <PostStore>
          <Posts />
        </PostStore>
      </StyledContent>
    </StyledContainer>
  );
};

export default Home;
