import React from 'react';
import {
  Container,
  Wrapper,
  SearchBox,
} from './styled';
import SearchIcon from '../../assets/icons/search.svg';

const SearchBar = ({ placeholder, value = '', onChangeValue, count }) => (
  <Container>
    <Wrapper>
      <SearchBox>
        <img
          src={SearchIcon}
          alt='Search...'
        />
        <input type="text" placeholder={ placeholder } value={value} onChange={e => onChangeValue(e.target.value)} />
        <div>
          <span>{count} results</span>
        </div>
        <button>
          <span>Search</span>
        </button>
      </SearchBox>
    </Wrapper>
  </Container>
)

export default SearchBar;
