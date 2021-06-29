import { useSelector } from "react-redux";
import { UserCard } from "features/users/components/usercard/UserCard";
import { UsersSelectors } from "../index";

export const UsersList = () => {
  const userCards = useSelector(UsersSelectors.usersList);
  const followedUsers = useSelector(UsersSelectors.followedUsers);

  return (
    <>
      {userCards.length === 0 && <p>No users match your search</p>}

      {Object.entries(userCards).map(function ([key, value]) {
        let followed = followedUsers.includes(key);

        return (
          <UserCard
            key={key}
            username={key}
            description={value}
            followed={followed}
          ></UserCard>
        );
      })}
    </>
  );
};
