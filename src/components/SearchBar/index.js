import React from 'react';
import {
  Container,
  Wrapper,
  SearchBox,
} from './styled';
import SearchIcon from '../../assets/icons/search.svg';

const SearchBar = ({ fetchSearchByQuery, placeholder, value = '', onChangeValue, count, typeQuery }) => (
  <Container>
    <Wrapper>
      <SearchBox>
        <img
          src={SearchIcon}
          alt='Search...'
        />
        <input type="text" placeholder={ placeholder } value={value} onChange={e => onChangeValue(e.target.value, typeQuery)} />
        <div>
          <span>{count} results</span>
        </div>
        <button onClick={() => fetchSearchByQuery(1, 6, 'search')}>
          <span>Search</span>
        </button>
      </SearchBox>
    </Wrapper>
  </Container>
)

export default SearchBar;
