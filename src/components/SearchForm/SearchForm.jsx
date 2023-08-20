import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ handleSubmit }) => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const handleInput = e => {
    setSelectedRegion(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!selectedRegion) {
      alert('Select any region!');
      return;
    }
    handleSubmit(selectedRegion);
    setSelectedRegion('');
  };
  return (
    <SearchFormStyled onSubmit={handleFormSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        onChange={handleInput}
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
