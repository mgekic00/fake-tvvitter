import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsActions } from "features/posts";
import { AuthSelectors } from "features/auth";
import { Post } from "features/posts/";
import { PostsSelectors } from "features/posts";
import { UsersListActions } from "features/users/index.js";

const HomeBase = () => {
  const username = useSelector(AuthSelectors.getUsername);
  const allPosts = useSelector(PostsSelectors.allPosts);
  const loading = useSelector(PostsSelectors.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UsersListActions.getFollowed(username));
    dispatch(PostsActions.fetchPosts(username));
  }, [username, dispatch]);

  return (
    <>
      {<h2>Welcome, {username}</h2>}
      {loading && <p>Loading posts...</p>}
      {allPosts.length > 1 ? (
        allPosts.map((post) => (
          <Post
            key={post.postId}
            username={post.username}
            imgUri={post.imgUri}
            content={post.content}
          />
        ))
      ) : (
        <p>You aren't following anyone. Follow some users to see posts.</p>
      )}
    </>
  );
};

export const HomePage = memo(HomeBase);
