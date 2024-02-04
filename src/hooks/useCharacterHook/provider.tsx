import md5 from "md5";
import { PropsWithChildren } from "react";
import { CharacterContext } from "./context";
import { api } from "../../services/api";

const CharacterProvider = ({ children }: PropsWithChildren) => {

  const getCharacters = async (page: number) => {
    const time = Number(new Date());
    const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY!;
    const pageLimit = 10;

    const hash = md5(time + privateKey + apiKey);


    const response = await api.get('characters?', {
      params: {
        ts: time,
        apikey: apiKey,
        limit: pageLimit,
        hash: hash,
        offset: page * pageLimit,
      }
    });

    return {
      data: response.data.data,
      pagination: {
        currentPage: page,
        total: Math.round(Number(response.data.data.total) / Number(pageLimit) / 15)
      }
    };
  }

  const getOptionsCharacters = async (page: number) => {
    const time = Number(new Date());
    const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY!;
    const pageLimit = 50;

    const hash = md5(time + privateKey + apiKey);


    const response = await api.get('characters?', {
      params: {
        ts: time,
        apikey: apiKey,
        limit: pageLimit,
        hash: hash,
        offset: page * pageLimit,
      }
    });

    return response.data;
  }


  const getCharacterById = async (id: number) => {
    const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY!;
    const time = Number(new Date());

    const hash = md5(time + privateKey + apiKey);


    const response = await api.get(`characters/${id}`, {
      params: {
        ts: time,
        apikey: apiKey,
        hash: hash,
      }
    });

    return response.data;
  }

  return <CharacterContext.Provider value={{ getCharacterById, getOptionsCharacters, getCharacters }}>{children}</CharacterContext.Provider>;
};

export { CharacterContext, CharacterProvider };