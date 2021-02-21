//임시

//액션타입
// USER TYPES
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

//액션함수
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};

//리듀서
const initialUserState = {
  currentUser: null,
  isLoading: true,
};

export default function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };

    case CLEAR_USER:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };

    default:
      return state;
  }
}
