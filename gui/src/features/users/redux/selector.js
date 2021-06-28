const root = (state) => state.users;

const usersList = (state) => root(state).usersList.userCards;

const followedUsers = (state) => root(state).usersList.following;

export const UsersSelectors = {
  usersList,
  followedUsers,
};
