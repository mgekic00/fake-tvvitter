import { useSelector, useDispatch } from "react-redux";
import { Input } from "core/ui/Input";
import { Button } from "core/ui";
import { useInputState } from "core/forms";
import history from "features/main/history";
import { PostsActions } from "features/posts";
import { AuthSelectors } from "features/auth";

export const CreatePost = () => {
  const username = useSelector(AuthSelectors.getUsername);
  const [imgUri, setimgUri] = useInputState("");
  const [content, setContent] = useInputState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(PostsActions.createNewPost(username, imgUri, content));
    history.push("/home");
  };

  const handleCancel = () => {
    history.push("/home");
  };

  return (
    <>
      <h2>Create a Post</h2>

      <Input
        placeholder="Image URI"
        name="imgUri"
        onChange={setimgUri}
        value={imgUri}
        style={{ width: "30em", margin: "0.2em" }}
      />
      <Input
        placeholder="Write your message here"
        name="content"
        onChange={setContent}
        value={content}
        style={{ width: "30em", height: "15em", margin: "0.2em" }}
      />

      <div className="row" style={{ margin: "1em" }}>
        <Button
          name="Submit"
          label="submit"
          onClick={handleSubmit}
          style={{ margin: "0.2em" }}
        >
          Submit
        </Button>
        <Button
          name="Cancel"
          label="cancel"
          onClick={handleCancel}
          style={{ margin: "0.2em" }}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};
