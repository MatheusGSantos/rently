import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Container } from './styles';

const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmitSearch = (): void => {
    console.log(`Sending ${value}`);
    console.log(`Redirecting`);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmitSearch();
    }
  };

  return (
    <Container isFocused={isFocused}>
      <input
        type="text"
        placeholder="I'm looking for..."
        value={value}
        onChange={handleValueChange}
        onKeyUp={handlePressEnter}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <FaSearch color="#A0A0A0" onClick={handleSubmitSearch} />
    </Container>
  );
};

export default SearchBar;
