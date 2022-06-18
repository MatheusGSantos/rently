import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Container } from './styles';

interface SearchBarProps {
  redirectToSearch?: boolean;
  updateUrl?: boolean;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  redirectToSearch = true,
  updateUrl = false,
  placeholder= "I'm looking for...",
}) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmitSearch = (): void => {
    updateUrl && setSearchParams(`value=${value}`, { replace: false });
    redirectToSearch &&
      navigate({ pathname: '/search', search: `?value=${value}` });
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
        placeholder={placeholder}
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
