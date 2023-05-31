import { createContext, useEffect, useReducer } from "react";
// import { useNavigate } from "react-router-dom";
import { createUserDocument, onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

//actual value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: ()=>{}
});

export const USER_ACTIONS = {
  setCurrentUser: 'SET_CURRENT_USER'
}
const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS.setCurrentUser:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

export const UserProvider = ({ children }) => {
  const [ {currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
  // const navigate = useNavigate();
  const setCurrentUser = ((user) => {
    dispatch({ type: USER_ACTIONS.setCurrentUser, payload: user })
  })
  const value = {currentUser, setCurrentUser}

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocument(user)
      }
      setCurrentUser(user);

    });
    return unsubscribe;
  });
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}