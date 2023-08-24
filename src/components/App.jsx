import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { current } from 'redux/auth/operations';
import useAuth from '../hooks';

// import s from './app.module.css';

import SharedLayout from '../components/SharedLayout';
import { RestrictedRoute } from './RedirectedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const OurFriendPage = lazy(() => import('../pages/OurFriendsPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    !useAuth.isRefreshing && (
    <Routes>

      <Route path='/' element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={
          <RestrictedRoute redirectTo='/user' component={<RegisterPage />} />
        } />
        <Route path="/login" element={
          <RestrictedRoute redirectTo='/user' component={<LoginPage />} />
        } />
        <Route path="/user" element={
          <PrivateRoute redirectTo='/login' component={<UserPage />} />
        } />
        {/* <Route path='/user' element={<UserPage />} /> */}
        <Route path='/notices' element={<NoticesPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/friends' element={<OurFriendPage />} />
        <Route path="/add-pet" element={
          <PrivateRoute redirectTo='/user' component={<AddPetPage />} />
        } />

      </Route>


    </Routes>)
  )
}
