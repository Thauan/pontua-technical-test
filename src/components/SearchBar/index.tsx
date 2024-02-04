import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Container } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
        <CiSearch size={20} />
        <input type="text" placeholder='Busque um agente'/>
    </Container>
  );
}

export { SearchBar };