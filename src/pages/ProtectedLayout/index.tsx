import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from '../../hooks/useAuthHook';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
    const { signedIn } = useAuth();
    const location = useLocation();

    if (!signedIn) {
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return children
};

export default ProtectedRoute;
