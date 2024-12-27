// authReducer.js

const initialState = {
    user: null,
    isLoading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_IN_START':
        return { ...state, isLoading: true };
      case 'SIGN_IN_SUCCESS':
        return { ...state, isLoading: false, user: action.payload, error: null };
      case 'SIGN_IN_FAILURE':
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  