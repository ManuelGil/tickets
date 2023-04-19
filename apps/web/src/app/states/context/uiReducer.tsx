import { UIStateStructur } from './UIProvider';

export type STATE_ACTION = {
  type: 'CHANGED';
};

export const uiReducer = (state: UIStateStructur, action: STATE_ACTION) => {
  switch (action.type) {
    case 'CHANGED':
      return { ...state, menuOpen: !state.menuOpen };
    default:
      return state;
  }
};
