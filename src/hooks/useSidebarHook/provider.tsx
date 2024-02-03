import { useMemo } from "react";
import { useLocalStorage } from "../useLocalStorageHook";
import { TSidebarProps } from "./types";
import { SidebarContext } from "./context";


const SidebarProvider = ({ children }: TSidebarProps) => {
  const [openedSidebar, setOpenedSidebar] = useLocalStorage("opened-side", true);

  const toggle = () => {
    setOpenedSidebar(!openedSidebar);
  };

  const value = useMemo(
    () => ({
      openedSidebar,
      toggle
    }),
    [openedSidebar]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

export { SidebarContext, SidebarProvider };