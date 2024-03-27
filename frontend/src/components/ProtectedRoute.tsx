import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('hii', localStorage.getItem('token'));

    setToken(localStorage.getItem('token'));
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  if (!token) {
    console.log('notiken');

    return <Navigate to='/signin' replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
