import { TSelectOption } from "../../components/Select";

export type TAuthContext = {
  signedIn?: boolean;
  agent?: TSelectOption;
  user?: string;
  signIn?(props: TSignIn): Promise<void>;
  signOut?(): Promise<void>;
  changeToAgent?(agent: unknown): void;
};

