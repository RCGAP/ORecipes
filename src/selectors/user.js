/* eslint-disable import/prefer-default-export */
export const getMessage = (state) => {
  return state.user.logged ? 'Bienvenue' : 'Veuillez vous connecter';
};
