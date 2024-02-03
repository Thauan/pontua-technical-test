export type TAUthContext = {
  signedIn?: boolean;
  agent?: string;
  user?: string;
  signIn?(props: TSignIn): Promise<void>;
  signOut?(): Promise<void>;
  changeToAgent?(agent: unknown): void;
};

