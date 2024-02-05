import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import { SignIn } from './pages/SignIn';
import { RecoveryAccount } from './pages/RecoveryAccount';
import { ChooseAgent } from './pages/ChooseAgent';
import ProtectedRoute from './pages/ProtectedLayout';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

const AppRoutes: React.FC = () => {
  const routes = [
    {
      path: '/',
      component: <SignIn />
    },
    {
      path: '/recovery/account',
      component: <RecoveryAccount />
    },
    {
      path: 'choose/agent',
      component: <ChooseAgent />,
      protected: true
    },
    {
      path: '/dashboard/home',
      component: <Home />,
      protected: true
    },
    {
      path: '/dashboard/profile',
      component: <Profile /> ,
      protected: true
    }
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          path={route.path}
          element={route.protected ? <ProtectedRoute>{route.component}</ProtectedRoute> : route.component}
          key={index}
        />
      ))}
    </Routes>
  );
}

export { AppRoutes };