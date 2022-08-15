import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "~/firebase/config";
export const UserContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState();
  useEffect(() => {
    const clean = onAuthStateChanged(auth, (user) => {
      if (user) {
        setInfo(user);
        navigate("/");
      } else {
      }
    });

    return () => {
      clean();
    };
  }, [navigate]);

  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
}

export default AuthProvider;
