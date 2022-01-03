/* eslint-disable import/no-anonymous-default-export */
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'

export const authedAtom = atom(false);
export const userAtom = atomWithStorage('user', null);
export const openModalSignAtom = atom(false);