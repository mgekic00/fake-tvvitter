import { Auth, AuthSelectors } from "features/auth";
import { Header } from "features/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { MainRoutes } from "../routes";
import { UsersList } from "features/users";
import { HomePage } from "features/home";

export const App = () => {
  const isLoggedIn = useSelector(AuthSelectors.isLoggedIn);

  if (isLoggedIn) {
    return (
      <>
        <Header />
        <div
          style={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "75%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Switch>
              <Route path={MainRoutes.HOME}>
                <HomePage />
              </Route>
              <Route path={MainRoutes.USERS}>
                <UsersList />
              </Route>
              <Redirect to={MainRoutes.HOME} />
            </Switch>
          </div>
        </div>
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
