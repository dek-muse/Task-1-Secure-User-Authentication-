// actions.js

export const signInStart = () => ({
    type: 'SIGN_IN_START',
  });
  
  export const signInSuccess = (userData) => ({
    type: 'SIGN_IN_SUCCESS',
    payload: userData,
  });
  
  export const signInFailure = (errorMessage) => ({
    type: 'SIGN_IN_FAILURE',
    payload: errorMessage,
  });
  