import React from 'react';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
