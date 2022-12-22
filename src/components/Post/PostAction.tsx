import { useState } from "react";
import { usePostContext } from "./PostContext";
import {
  StyledBox,
  StyledButton,
  StyledCoseBox,
  StyledInput,
  StyledTextarea,
} from "./style";

function ActionButton({ type, action, data }: any) {
  return <StyledButton onClick={() => action(data)}>{type}</StyledButton>;
}

export function PostAction() {
  const { edit, handleUpdate, clearModal, handleCreate } = usePostContext();
  const [application, setApplication] = useState(
    edit
      ? { ...edit }
      : {
          id: "",
          userId: "",
          Title: "",
          Body: "",
        }
  );

  const updateFields = (e: any) => {
    const input = {
      [e?.target?.id]: e.target.value,
    };

    setApplication((prevState: {}) => ({ ...prevState, ...input }));
  };

  return (
    <>
      <StyledBox className="create" onChange={updateFields}>
        <StyledCoseBox onClick={clearModal} style={{ float: "right" }}>
          x
        </StyledCoseBox>
        <h2>Create New Post</h2>
        <StyledInput
          placeholder="Enter title"
          type="text"
          id="title"
          defaultValue={application?.title}
          required
        />
        <StyledTextarea
          placeholder="Enter description"
          className="body"
          id="body"
          defaultValue={application?.body}
          required
        />
        {Object.keys(edit).length > 1 ? (
          <ActionButton type="Save" data={application} action={handleUpdate} />
        ) : (
          <ActionButton
            type="Create"
            data={application}
            action={handleCreate}
          />
        )}
      </StyledBox>
    </>
  );
}
