import { TPagination } from "../../@types/dtos/TPagination";
import { Character } from "../../@types/models/character";

export type TCharacterContext = {
  getCharacterById?(id: number): Promise<{ data: { results: Character[] }; pagination: TPagination }>
  getOptionsCharacters?(page: number): Promise<{ data: { results: Character[] }; pagination: TPagination }>
  getCharacters(page: number): Promise<{ data: { results: Character[] }; pagination: TPagination }>;
};