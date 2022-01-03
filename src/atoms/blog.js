import { atom } from 'jotai';

export const blogsAtom = atom([]);
export const blogsFilteredAtom = atom([]);
export const blogsFavoritesFilteredAtom = atom([]);
export const queryAtom = atom('');
export const queryFavoritesAtom = atom('');
export const selectedBlogAtom = atom(null);
export const changeFavoritePendingAtom = atom(null);
export const openModalBlogAtom = atom(false);
export const startPageAtom = atom(0);