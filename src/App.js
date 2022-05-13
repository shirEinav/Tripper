import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import useAuthContext from './hooks/auth/useAuthContext';
import GlobalCss from './global.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Loader from './components/Loader';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Account from './pages/Account';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));
const SharedMap = lazy(() => import('./pages/SharedMap'));

function App() {
  const { user, authIsReady, dispatch } = useAuthContext();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { useErrorBoundary: true },
    },
  });

  useEffect(() => {
    dispatch({ type: 'LOGOUT' });
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalCss />
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
            <Suspense
              fallback={
                <Loader size='1rem' color='var(--color-primary-2)' isCentered />
              }
            >
              {authIsReady && (
                <>
                  <Navbar />
                  <Routes>
                    <Route
                      path='/'
                      element={user ? <Navigate to='/dashboard' /> : <Home />}
                    />
                    <Route
                      path='/signup'
                      element={user ? <Navigate to='/dashboard' /> : <Signup />}
                    />
                    <Route
                      path='/login'
                      element={user ? <Navigate to='/dashboard' /> : <Login />}
                    />
                    <Route
                      path='/dashboard'
                      element={!user ? <Navigate to='/' /> : <Dashboard />}
                    />
                    <Route
                      path='/account'
                      element={!user ? <Navigate to='/' /> : <Account />}
                    />
                    <Route path='/maps/:userId' element={<SharedMap />} />
                    <Route path='/*' element={<NotFound />} />
                  </Routes>
                </>
              )}
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
