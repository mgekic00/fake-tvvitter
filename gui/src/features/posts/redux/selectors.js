const root = (state) => state.posts;

const allPosts = (state) => {
  const { storage, allPostIds } = root(state);

  return allPostIds.map((id) => storage[id]);
};

const postById = (id) => (state) => {
  const { storage } = root(state);

  return storage[id];
};

const errors = (state) => root(state).errors;

const loading = (state) => root(state).loading;

export const PostsSelectors = {
  allPosts,
  postById,
  errors,
  loading,
};
