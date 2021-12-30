import React, { useState, lazy, Suspense } from 'react';
import { Outlet } from "react-router-dom";
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
const FormSign = lazy(() => import('./components/FormSign'));
const FormBlog = lazy(() => import('./components/FormBlog'));

const App = () => {
	const [openModalSign, setOpenModalSign] = useAtom(openModalSignAtom);
	const [openModalBlog, setOpenModalBlog] = useAtom(openModalBlogAtom);

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <NavBar />
			<Outlet />
      <Copyright />
			{openModalSign && (
				<FormSign
					state={openModalSign}
					changeState={setOpenModalSign}
					title={'Sign In'}
					showHeader={false}
					showOverlay={true}
					positionModal="center"
					padding={'0px'}
				/>
			)}
			{openModalBlog && (
				<FormBlog
					state={openModalBlog}
					changeState={setOpenModalBlog}
					title={'Sign In'}
					showHeader={false}
					showOverlay={true}
					positionModal="center"
					padding={'0px'}
				/>
			)}
			<div className="plusIcon" title="ADD BLOG">
				<IconContext.Provider value={{ color: '#335EEA', size: '2.25rem', boxShadow: '0px 8px 24px rgba(22, 27, 45, 0.1)', borderRadius: '100px' }}>
					<FaPlusCircle onClick={() => setOpenModalBlog(!openModalBlog)}/>
				</IconContext.Provider>
      </div>
      {/* ReactDOM.createPortal(, document.getElementById('portal')) <ModalSign /> */}
    </Suspense>
  );
}

export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;