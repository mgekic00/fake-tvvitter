import { images } from "core/assets";

export const Post = (props) => {
  return (
    <>
      <div className="column" style={{ padding: "0.5em", margin: "0.5em" }}>
        <div className="row" style={{ padding: "0.7em" }}>
          <img
            src={images.profile1.default}
            alt="profileSmall"
            width="50"
            height="50"
            style={{ borderRadius: "50%" }}
          />
          <h3>{props.username}</h3>
        </div>
        <img src={props.imgUri} alt="postImage" />
        <p>{props.content}</p>
      </div>
    </>
  );
};
