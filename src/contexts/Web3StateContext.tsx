import { useInterpret } from "@xstate/react";
import { ReactElement, ReactNode, createContext } from "react";
import { ActorRefFrom } from "xstate";

import walletMachine from "../machines/walletMachine";

interface Web3StateContextType {
  walletService: ActorRefFrom<typeof walletMachine>;
}

export const Web3StateContext = createContext({} as Web3StateContextType);

interface Web3StateProviderProps {
  children: ReactNode;
}

export default function Web3StateProvider({ children }: Web3StateProviderProps): ReactElement {
  const walletService = useInterpret(walletMachine);

  return <Web3StateContext.Provider value={{ walletService }}>{children}</Web3StateContext.Provider>;
}
