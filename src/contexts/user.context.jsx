import { createContext, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChangedListner, createUserDocument } from "../utils/firebase/firebase.utils";

//actual value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: ()=>null
  
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser, setCurrentUser]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocument(user)
        navigate("/")
      }
      setCurrentUser(user);

    });

    return unsubscribe;
  });

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}