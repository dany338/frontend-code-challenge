import React, { lazy, Suspense} from 'react'
import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
import { useAtom } from 'jotai';
import PrivateRoute from './components/PrivateRoute';
import Layout from './layout';
import { openModalSignAtom } from './atoms/user';

const Articles = lazy(() => import('./pages/Articles'));
const Favorites = lazy(() => import('./pages/Favorites'));
const DetailPage = lazy(() => import('./pages/DetailPage'));
const Page404 = lazy(() => import('./pages/Page404'));
const Modal = lazy(() => import('./components/Modal'));
const FormSign = lazy(() => import('./components/FormSign'));
const FormBlog = lazy(() => import('./components/FormBlog'));

const AppRouter = () => {
  const [openModalSign, setOpenModalSign] = useAtom(openModalSignAtom);
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state

  return <>
    <Routes location={state?.backgroundLocation || location}>
      <Route exact path="/" element={<Layout />}>
        <Route exact index element={
          <Suspense fallback={<span>Loading...</span>}>
            <Articles />
          </Suspense>
        }/>
        {/* <Route path="/" element={<Suspense fallback={<span>Loading...</span>}><Articles /></Suspense>} /> */}
        <Route path="/login" element={
          <Suspense fallback={<span>Loading...</span>} />
        } />
        <Route path="/blog-form" element={
          <Suspense fallback={<span>Loading...</span>} />
        } />
        <Route exact path="/favorites" element={
          <Suspense fallback={<span>Loading...</span>}>
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          </Suspense>
        } />
        <Route exact path="/detail-blog" element={
          <Suspense fallback={<span>Loading...</span>}>
            <DetailPage />
          </Suspense>
        } />
        <Route path="*" element={<Suspense fallback={<span>Loading...</span>}><Page404 /></Suspense>} />
      </Route>
    </Routes>
    {state?.backgroundLocation && (
      <Routes>
        <Route path="/login" element={
          <Modal
            state={true}
            changeState={() => navigate(-1)}
            title={'Sign In'}
            showHeader={false}
            showOverlay={true}
            positionModal="center"
            padding={'0px'}
          >
            <FormSign />
          </Modal>
        } />
        <Route path="/blog-form" element={
          <Modal
            state={true}
            changeState={() => navigate(-1)}
            title={'Blog Form'}
            showHeader={false}
            showOverlay={true}
            positionModal="center"
            padding={'0px'}
          >
            <FormBlog />
          </Modal>
        } />
      </Routes>
    )}
  </>
}

export default AppRouter
