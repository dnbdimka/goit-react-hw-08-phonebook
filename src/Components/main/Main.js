import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router";
import { isAuthSelector, loaderSelector } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import GlobalLoader from "../globalLoader/GlobalLoader";
import { MainStyled } from "./MainStyled";

const Main = () => {
  const isAuth = useSelector(isAuthSelector);
  const isLoading = useSelector(loaderSelector);
  return (
    <MainStyled>
      <Suspense fallback={<GlobalLoader />}>
        {isLoading && <GlobalLoader />}
        <Switch>
          {mainRoutes.map(
            ({ path, exact, component, isPrivate, isRestricted }) =>
              isPrivate ? (
                <PrivateRoute
                  path={path}
                  exact={exact}
                  component={component}
                  isAuth={isAuth}
                  key={path}
                />
              ) : (
                <PublicRoute
                  path={path}
                  exact={exact}
                  component={component}
                  isAuth={isAuth}
                  isRestricted={isRestricted}
                  key={path}
                />
              )
          )}
        </Switch>
      </Suspense>
    </MainStyled>
  );
};

export default Main;
