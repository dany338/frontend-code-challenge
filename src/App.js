import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import styled from 'styled-components';
// import ModalSign from './components/ModalSign';
import { openModalBlogAtom } from './atoms/blog';
import Copyright from './components/Copyright';
// import Blog from './pages/blog';
import { IconContext } from "react-icons";
import { FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa";
import useAuth from './hooks/useAuth';
import useFormBlog from './hooks/useFormBlog';
import useDetailBlog from './hooks/useDetailBlog';
import AppRouter from './urls';
import { waitFor } from './utils/waitFor';

const initialState = {
  title: '',
  description: '',
  content: '',
  image: '',
  price: '',
};

const App = () => {
	const [ user ] = useAuth();
	const [ selectedBlog ] = useDetailBlog();
	const [ , , isLoading, deleteBlog ] = useFormBlog(selectedBlog ? selectedBlog: initialState);
	const location = useLocation();
	const navigate = useNavigate();
	const [openModalBlog, setOpenModalBlog] = useAtom(openModalBlogAtom);

	const openModalFormBlog = async (e, type) => {
		e.preventDefault();
		setOpenModalBlog(!openModalBlog);
		await waitFor(100);
		navigate(`/blog-form/${type}`, { state: { backgroundLocation: location, params: { type } }, params: { type }} );
	}

	const handleDelete = async e => {
		e.preventDefault();
		await deleteBlog(100);
		navigate('/');
	}

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <AppRouter />
      {user && (
				<>
					{(location.pathname === '/' || location.pathname === '/favorites' ) && (
						<div className="plusIcon" title="ADD BLOG">
							<IconContext.Provider value={{ color: '#335EEA', size: '2.25rem', boxShadow: '0px 8px 24px rgba(22, 27, 45, 0.1)', borderRadius: '100px' }}>
								<FaPlusCircle onClick={e => openModalFormBlog(e, 'create')}/>
							</IconContext.Provider>
						</div>
					)}
					{((location.pathname === '/detail-blog' || location.pathname === '/detail-blog/:type') && (user?.id === selectedBlog?.userId)) && (
						<>
							<div className="editIcon" title="EDIT BLOG">
								<IconContext.Provider value={{ color: '#335EEA', size: '2.25rem', boxShadow: '0px 8px 24px rgba(22, 27, 45, 0.1)', borderRadius: '100px' }}>
									<FaEdit onClick={e => openModalFormBlog(e, 'update')}/>
								</IconContext.Provider>
							</div>
							<div className="deleteIcon" title="DELETE BLOG">
								<IconContext.Provider value={{ color: '#335EEA', size: '2.25rem', boxShadow: '0px 8px 24px rgba(22, 27, 45, 0.1)', borderRadius: '100px' }}>
									{isLoading ? <div><span>Loading...</span></div> : <FaTrash onClick={e => handleDelete(e)}/>}
								</IconContext.Provider>
							</div>
						</>
					)}
				</>
			)}
			<Copyright />
    </Suspense>
  );
}

export default App;