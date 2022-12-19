import Card from "../../components/Card";
import { StyledContainer, StyledContent } from "./style";

const Home: React.FC = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledContent>
        <Card />
      </StyledContent>
    </StyledContainer>
  );
};

export default Home;
