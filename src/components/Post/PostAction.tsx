import React, { useState } from "react";
import { usePostContext } from "./PostContext";

function ActionButton({ type, action, data }: any) {
  return <button onClick={() => action(data)}>{type}</button>;
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
      <div>
        <button onClick={clearModal} style={{ float: "right" }}>
          X
        </button>
        <div
          style={{
            display: "flex",
            placeContent: "center",
            flexDirection: "column",
          }}
          onChange={updateFields}
        >
          <label htmlFor="userId">User*:</label>
          <input
            type="text"
            id="userId"
            defaultValue={application?.userId}
            required
          />
          <label htmlFor="title">Title*: </label>
          <input
            type="text"
            id="title"
            defaultValue={application?.title}
            required
          />
          <label htmlFor="body">Text*:</label>
          <input
            type="text"
            id="body"
            defaultValue={application?.body}
            required
          />
          {Object.keys(edit).length > 1 ? (
            <ActionButton
              type="Save"
              data={application}
              action={handleUpdate}
            />
          ) : (
            <ActionButton
              type="Create"
              data={application}
              action={handleCreate}
            />
          )}
        </div>
      </div>
    </>
  );
}
