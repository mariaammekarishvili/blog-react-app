import { useState } from "react";
import LoaderIcon from "../../assets/svg/LoaderIcon";
import { usePostContext } from "./PostContext";
import {
  StyledBox,
  StyledButton,
  StyledCoseBox,
  StyledInput,
  StyledTextarea,
} from "./style";

function ActionButton({ type, action, data, loading }: any) {
  return (
    <StyledButton onClick={() => action(data)}>
      {loading ? <LoaderIcon /> : type}
    </StyledButton>
  );
}

export function PostAction() {
  const { edit, handleUpdate, clearModal, handleCreate, loading } =
    usePostContext();
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
          <ActionButton
            type="Save"
            data={application}
            action={handleUpdate}
            loading={loading}
          />
        ) : (
          <ActionButton
            type="Create"
            data={application}
            action={handleCreate}
            loading={loading}
          />
        )}
      </StyledBox>
    </>
  );
}
