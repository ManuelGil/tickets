import { Dispatch, createContext } from 'react';
import { STATE_ACTION } from './uiReducer';
export type UIContextstructur = {
  menuOpen: boolean;
  dispatch: Dispatch<STATE_ACTION>;
};
export const UIContext = createContext({} as UIContextstructur);
