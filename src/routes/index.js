import Layout from '../pages/Layout';
import Index from '../pages/Index';
import Topic from '../pages/Topic';

export default [
  {
    path: '/',
    component: Layout,
    childRoutes: [
      {
        path: 'index',
        component: Index,
      },
      {
        path: 'topic/:id',
        component: Topic,
      },
    ],
  },
];
