import React, { useEffect, useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import { useCharacter } from '../../hooks/useCharacterHook';
import { Container, ContainerPagination, Page, Pagination } from './styles';
import { CharacterCard } from '../../components/CharacterCard';
import { Loading } from '../../components/Loading';
import { Character } from '../../@types/models/character';
import { TPagination } from '../../@types/dtos/TPagination';


const Home: React.FC = () => {
  const { getCharacters } = useCharacter();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pagination, setPagination] = useState<TPagination | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getDataCharacters(currentPage);
  }, [currentPage]);

  const getDataCharacters = async (page: number) => {
    const response = await getCharacters(page);

    setCharacters(response.data.results);
    setPagination(response.pagination);
  }

  const checkLastItems = (current: Character, character?: Character) => (current == character) ? true : false;

  const getPageData = (page: number) => {
    getDataCharacters(page);
    setCurrentPage(page);
  }

  return (
    <DashboardLayout>
      {characters?.length ? (
        <>
          <Container>
            {characters?.map((character: Character) => (
              <CharacterCard
                key={character.id}
                last={checkLastItems(character, characters.at(-1))}
                penult={checkLastItems(character, characters.at(-2))}
                character={character}
              />
            ))}
          </Container>

          <ContainerPagination>
            <Pagination>
              <Page onClick={() => getPageData(currentPage - 1)} firstPage>
                Anterior
              </Page>
              {[...Array(pagination!.total)].map((_page: number, index: number) => {
                return (
                  <Page key={index + 1} onClick={() => getPageData(index + 1)} isCurrent={index + 1 == currentPage}>
                    {index + 1}
                  </Page>
                )
              })}
              <Page onClick={() => getPageData(currentPage + 1)} lastPage>
                Próxima
              </Page>
            </Pagination>
          </ContainerPagination>
        </>
      ) : (
        <Loading />
      )}
    </DashboardLayout>
  );
}

export { Home };