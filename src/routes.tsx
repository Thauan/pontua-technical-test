import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { SignIn } from './pages/SignIn';
import { RecoveryAccount } from './pages/RecoveryAccount';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/recovery/account" element={<RecoveryAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };