import { PropsWithChildren, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../useLocalStorageHook";
import { AuthContext } from "./context";
import { TSignIn } from "../../@types/dtos/TSignIn";

const INITIAL_SESSION: TSignIn = {
  email: '',
  password: '',
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage("user", INITIAL_SESSION);
  const [agent, setAgent] = useLocalStorage("agent", null);
  // const navigate = useNavigate();
  const navigate = useNavigate();

  const signIn = useCallback(async (data: TSignIn) => {
    setUser(data);
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

  const value = useMemo(() => {
    return {
      signedIn: !!user,
      changeToAgent,
      agent,
      user,
      signIn,
      signOut
    };
  }, [agent, user, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };