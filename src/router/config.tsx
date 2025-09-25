
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/page'));
const ProjectDetail = lazy(() => import('../pages/project-detail/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/project/:id',
    element: <ProjectDetail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
