import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Auth, AuthSelectors } from "features/auth";
import { Header } from "features/navbar";
import { UsersList } from "features/users";
import { HomePage } from "features/home";
import { CreatePost } from "features/posts";
import { AppContainer, InnerContainer } from "./index.jsx";
import { MainRoutes } from "../routes";

export const App = () => {
  const isLoggedIn = useSelector(AuthSelectors.isLoggedIn);

  if (isLoggedIn) {
    return (
      <>
        <Header />
        <AppContainer>
          <InnerContainer>
            <Switch>
              <Route path={MainRoutes.HOME}>
                <HomePage />
              </Route>
              <Route path={MainRoutes.USERS}>
                <UsersList />
              </Route>
              <Route path={MainRoutes.CREATE_POST}>
                <CreatePost />
              </Route>
              <Redirect to={MainRoutes.HOME} />
            </Switch>
          </InnerContainer>
        </AppContainer>
      </>
    );
  }

  return (
    <Switch>
      <Route path={MainRoutes.AUTH}>
        <Auth />
      </Route>
      <Redirect to={MainRoutes.AUTH} />
    </Switch>
  );
};
