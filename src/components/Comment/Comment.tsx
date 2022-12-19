import styled from "styled-components";

const StyledComment = styled.div`
  border: 15px;
  padding: 10px 16px;
  font-size: 12px;
  background-color: rgb(0, 0, 0, 0.2);
  max-width: 80%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-left: 15px;
  border-radius: 15px;
  & p {
    font-weight: bold;
    margin: 0 0 6px 0;
  }
`;

const Comment: React.FC = (): JSX.Element => {
  return (
    <StyledComment>
      <p>Mari</p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate eius
      sunt assumenda ratione nostrum doloremque quibusdam cum qui, alias odit
      minima voluptates. Ipsum debitis dolorem veniam, ad deleniti quia
      perferendis!
    </StyledComment>
  );
};

export default Comment;
