import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../api/api";
import SendIcon from "../../assets/svg/SendIcon";
import Comment from "../Comment";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  min-height: 40px;
  border-radius: 10px;
  margin: 10px 0;
  padding-bottom: 20px;
`;
const StyledHeader = styled.div`
  padding: 15px;
  font-weight: bold;
  border-bottom: 1px solid #00000059;
  width: 100%;
  max-width: 100%;
`;
const StyledContent = styled.div`
  padding: 16px;
  width: 100%;
`;
const StyledCommentInput = styled.input`
  border-radius: 20px;
  height: 40px;
  outline: none;
  padding: 0 16px;
  border: 1px solid #00000059;
  margin-right: 5px;
  width: 100%;
`;
const StyledCommentBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-top: 20px;
`;
const StyledTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0 15px 15px;
`;

type Props = {
  userId: number;
  id: number;
  title: string;
  body: string;
  handleDelete: (id: number) => void;
  handleAction: (id: number) => void;
};
const Post: React.FC<Props> = ({
  userId,
  id,
  title,
  body,
  handleDelete,
  handleAction,
}): JSX.Element => {

  return (
    <StyledBox>
      <StyledHeader>{title}</StyledHeader>
      <StyledContent>{body}</StyledContent>
      <button onClick={() => handleAction(id)}>Edit</button>
      <button onClick={() => handleDelete(id)}>Delete</button>


      {/* <StyledTitle>Comments</StyledTitle>
      <Comment />
      <StyledCommentBox>
        <StyledCommentInput placeholder="add comment" />
        <SendIcon />
      </StyledCommentBox> */}
    </StyledBox>
  );
};

export default Post;
