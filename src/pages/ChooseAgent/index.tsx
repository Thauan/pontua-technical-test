import { useEffect, useState } from "react";
import { AuthCard } from "../../components/AuthCard";
import { Select, TSelectOption } from "../../components/Select";
import { Container, Content, Header, LeftContent, RightContent, Wrapper } from "./styles";
import { useCharacter } from "../../hooks/useCharacterHook";
import { Character } from "../../@types/models/character";

function ChooseAgent() {
  const { getOptionsCharacters } = useCharacter();
  const [options, setOptions] = useState<TSelectOption[]>([]);
  const [currentPage] = useState<number>(1);

  useEffect(() => {
    getDataCharacters(currentPage);
  }, [currentPage]);

  const getDataCharacters = async (page: number) => {
    const { data } = await getOptionsCharacters(page);

    const result = data?.results?.map((item: Character) => {
      return {
        value: item.id,
        label: item.name,
        image: `${item.thumbnail.path}.${item.thumbnail.extension}`
      }
    });

    setOptions(result);
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <img className="logo" src="/logos/logo.png" alt="Logo do sistema Pontua" />
          </Header>
          <Content>
            <LeftContent>
              <img src="/illustrations/building.png" alt="Ilustração de um edificio" />
            </LeftContent>

            <RightContent>
              <AuthCard title='Selecione o seu agente mais legal.' description='' >
                <form className="form">
                  <p>Tenha a visão completa do seu agente.</p>
                  <Select options={options} />
                </form>
              </AuthCard>
            </RightContent>
          </Content>
        </Container>
      </Wrapper>
    </>
  )
}

export { ChooseAgent };