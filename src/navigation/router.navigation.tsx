import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import BaseLayout from 'layouts/base-layout/base-layout.component';
import SuspenseLoader from 'commons/components/suspense-loader/suspense-loader.component';
import SignUp from 'views/sign-up/sign-up.component';

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages
const SignIn = Loader(lazy(() => import('views/sign-in/sign-in.component')));

// Status
const Status404 = Loader(lazy(() => import('commons/views/status-404/status-400.component')));

const routes: any[] = [
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <SignIn />,
      },
      // {
      //   path: 'signin',
      //   element: (
      //     <Navigate
      //       to="/"
      //       replace
      //     />
      //   )
      // },
      {
        path: '*',
        element: <Status404 />,
      },
    ],
  },
  {
    path: '/sign-up',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <SignUp />,
      },
    ]
  }
  //   {
  //     path: 'dashboards',
  //     element: (
  //       <SidebarLayout />
  //     ),
  //     children: [
  //       {
  //         path: '/',
  //         element: (
  //           <Navigate
  //             to="/dashboards/crypto"
  //             replace
  //           />
  //         )
  //       },
  //       {
  //         path: 'crypto',
  //         element: <Crypto />
  //       },
  //       {
  //         path: 'messenger',
  //         element: <Messenger />
  //       }
  //     ]
  //   },
];

export default routes;
