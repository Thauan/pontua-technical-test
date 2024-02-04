import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../useLocalStorageHook";
import { AuthContext } from "./context";
import { TSignIn } from "../../@types/dtos/TSignIn";
import { delay } from "../../helpers/delay";

const INITIAL_SESSION: TSignIn = {
  email: '',
  password: '',
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage("user", INITIAL_SESSION);
  const [agent, setAgent] = useLocalStorage("agent", null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signIn = useCallback(async (data: TSignIn) => {
    setLoading(true)
    delay(1000)

    setUser(data);
    setLoading(false)

    navigate("/choose/agent", { replace: true });
  }, []);

  const changeToAgent = useCallback(async (agent: object) => {
    setAgent(agent);
    navigate("/dashboard/home", { replace: true });
  }, []);

  const signOut = useCallback(async () => {
    setUser(null);
    navigate("/", { replace: true });
  }, []);

  const checkLogged = () => {
    if (user) return navigate("/choose/agent", { replace: true });
  }

  useEffect(() => {
    checkLogged();
  }, [user])

  const value = useMemo(() => {
    return {
      signedIn: !!user,
      changeToAgent,
      agent,
      user,
      signIn,
      signOut,
      loading
    };
  }, [agent, user, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };