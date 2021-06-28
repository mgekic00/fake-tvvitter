import { images } from "core/assets";
import { ProfileCard } from "./index.jsx";
import { UsersListActions } from "features/users/index.js";
import { useDispatch } from "react-redux";
import { Button } from "core/ui/index.js";
import { useSelector } from "react-redux";
import { AuthSelectors } from "features/auth/index.js";

export const UserCard = (props) => {
  const username = useSelector(AuthSelectors.username);
  const userToFollow = props.username;

  const dispatch = useDispatch();
  const follow = () => {
    dispatch(UsersListActions.follow(username, userToFollow));
  };

  return (
    <>
      <ProfileCard>
        <div className="row" id={"card_" + props.username}>
          <div className="row">
            <img
              src={images.profile1.default}
              alt="profileSmall"
              width="50"
              height="50"
              style={{ borderRadius: "50%" }}
            />
            <h3 style={{ padding: "0.2em", width: "10em" }}>
              {props.username}{" "}
            </h3>
          </div>

          {!props.followed ? (
            <Button
              style={{ marginTop: 14 }}
              name="follow"
              onClick={follow}
              disabled={false}
              label="Follow +"
              id="follow"
            />
          ) : (
            <p>Following</p>
          )}
        </div>
        <p>{props.description}</p>
      </ProfileCard>
    </>
  );
};
