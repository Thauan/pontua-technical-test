import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import { SignIn } from './pages/SignIn';
import { RecoveryAccount } from './pages/RecoveryAccount';

const AppRoutes: React.FC = () => {
  const routes = [
    {
      path: '/',
      component: <SignIn />
    },
    {
      path: '/recovery/account',
      component: <RecoveryAccount />
    }
  ];

  return (
    <Routes>
      {routes.map((route, index) => <Route path={route.path} element={route.component} key={index} />)}
    </Routes>
  );
}

export { AppRoutes };