import { useState } from 'react';
import ReactSelect, { PropsValue } from 'react-select';
import { Container, Placeholder, Avatar, Option, Name } from './styles';
import { FiUser } from "react-icons/fi";
import { useAuth } from '../../hooks/useAuthHook';

export type TSelectOption = {
  value: number;
  label: string;
  image: string;
};

export interface IOptionProps {
  options: TSelectOption[]
}

const Select = (props: IOptionProps) => {
  const { changeToAgent } = useAuth();
  const [agent, setAgent] = useState<PropsValue<TSelectOption> | undefined>();

  const onSelect = (event: PropsValue<TSelectOption> | undefined) => {
    setAgent(event);
    changeToAgent(event);
  }

  return (
    <Container>
      <ReactSelect
        className="select"
        onChange={(event) => onSelect(event)}
        value={agent}
        options={props.options}
        placeholder={
          <Placeholder>
            <FiUser /> <div className='placeholder-message'>Selecione um agente</div>
          </Placeholder>
        }
        formatOptionLabel={(option: TSelectOption) => (
          <Option>
            <Avatar src={option.image} alt="country-image" />
            <Name>{option.label}</Name>
          </Option>
        )}
      />
    </Container>
  );
}

export { Select };