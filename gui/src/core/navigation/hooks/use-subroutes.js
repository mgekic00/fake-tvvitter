import { useRouteMatch } from 'react-router-dom';

export const useSubroutes = (routesMap) => {
  const { path } = useRouteMatch();

  // todo: change capitalization here from snake to camel
  return Object.assign(
    ...Object.entries(routesMap).map(([key, value]) => ({ [key]: `${path}${value}` })),
  );
};
