import { ReactNode, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export type UIStateStructur = {
  menuOpen: boolean;
};
const INITIAL_STATE: UIStateStructur = {
  menuOpen: false,
};
export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, dispatch] = useReducer(uiReducer, INITIAL_STATE);
  return (
    <UIContext.Provider value={{ ...menuOpen, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};
