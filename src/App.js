import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import styled from 'styled-components';
// import ModalSign from './components/ModalSign';
import NavBar from './components/NavBar';
import { openModalSignAtom } from './atoms/user';
import { openModalBlogAtom } from './atoms/blog';
import Copyright from './components/Copyright';
// import Blog from './pages/blog';
import { IconContext } from "react-icons";
import { FaPlusCircle } from "react-icons/fa";
import useAuth from './hooks/useAuth';
import AppRouter from './urls';
import { waitFor } from './utils/waitFor';

const FormSign = lazy(() => import('./components/FormSign'));
const FormBlog = lazy(() => import('./components/FormBlog'));

const App = () => {
	const [ user ] = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	// const [openModalSign, setOpenModalSign] = useAtom(openModalSignAtom);
	const [openModalBlog, setOpenModalBlog] = useAtom(openModalBlogAtom);

	const openModalFormBlog = async e => {
		e.preventDefault();
		setOpenModalBlog(!openModalBlog);
		await waitFor(100);
		navigate('/blog-form', { state: { backgroundLocation: location } } );
	}

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <AppRouter />
      {user && (
				<>
					{(location.pathname === '/' || location.pathname === '/favorites' ) && (
						<div className="plusIcon" title="ADD BLOG">
							<IconContext.Provider value={{ color: '#335EEA', size: '2.25rem', boxShadow: '0px 8px 24px rgba(22, 27, 45, 0.1)', borderRadius: '100px' }}>
								<FaPlusCircle onClick={e => openModalFormBlog(e)}/>
							</IconContext.Provider>
						</div>
					)}
				</>
			)}
			<Copyright />
			{/* {openModalSign && (
				<FormSign
					state={openModalSign}
					changeState={setOpenModalSign}
					title={'Sign In'}
					showHeader={false}
					showOverlay={true}
					positionModal="center"
					padding={'0px'}
				/>
			)} */}
    </Suspense>
  );
}

export default App;