export type TCharacterContext = {
  getCharacterById?(id: number): Promise<void>;
  getOptionsCharacters?(page: number): Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCharacters(page: number): Promise<{ data: any; pagination: { currentPage: number; total: number; }; }>;
};