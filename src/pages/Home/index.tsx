/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import { useCharacter } from '../../hooks/useCharacterHook';
import { Container, Page, Pagination } from './styles';
import { CharacterCard } from '../../components/CharacterCard';
import { Loading } from '../../components/Loading';


const Home: React.FC = () => {
  const [characters, setCharacters] = useState<any>([]);
  const [pagination, setPagination] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { getCharacters } = useCharacter();

  useEffect(() => {
    getDataCharacters(currentPage);
  }, [currentPage]);


  const getDataCharacters = async (page: number) => {
    const response = await getCharacters(page);

    setCharacters(response.data);
    setPagination(response.pagination);
  }

  const checkLastItems = (current: any, character: any) => (current == character) ? true : false;

  const getPageData = (page: any) => {
    getDataCharacters(page);
    setCurrentPage(page);
  }

  return (
    <DashboardLayout>
      {characters?.results?.length ? (
        <>
          <Container>
            {characters?.results?.map((character: any) => (
              <CharacterCard
                key={character.id}
                last={checkLastItems(character, characters?.results.at(-1))}
                penult={checkLastItems(character, characters?.results.at(-2))}
                character={character}
              />
            ))}
          </Container>

          <Pagination>
            {[...Array(pagination.total)].map((_page: number, index: number) => {
              return (
                <Page key={index + 1} onClick={() => getPageData(index + 1)} isCurrent={index + 1 == currentPage}>
                  {index + 1}
                </Page>
              )
            })}
          </Pagination>
        </>
      ) : (
        <Loading />
      )}
    </DashboardLayout>
  );
}

export { Home };