import React, { useRef, useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ClearInputBtn from '../ClearInputBtn';
import FlagIcon from '../FlagIcon';
import * as S from './styles.css';

const AutocompleteCountries = ({
  countries,
  selectedCountry,
  setSelectedCountry,
}) => {
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState(countries);
  const [suggestionIndex, setSuggestionIndex] = useState(-1);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const inputRef = useRef();
  const wrapperRef = useRef();

  // Detect click outside autocomplete wrapper
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (
        suggestionsOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setSuggestionsOpen(false);
        setSuggestionIndex(-1);
        !selectedCountry && setUserInput('');
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [suggestionsOpen, selectedCountry]);

  // filter suggestions
  useEffect(() => {
    if (!userInput) {
      setSuggestions(countries);
      setSelectedCountry('');
      return;
    }
    const bestMatches = countries.filter(country => {
      return country.name.toLowerCase().startsWith(userInput.toLowerCase());
    });
    const partialMatches = countries.filter(country => {
      return country.name.toLowerCase().includes(userInput.toLowerCase());
    });
    setSuggestions([...new Set([...bestMatches, ...partialMatches])]);
  }, [countries, userInput, setSelectedCountry]);

  const onBlurHandler = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setSuggestionsOpen(false);
    }
  };

  const selectCountryHandler = country => {
    setUserInput(country);
    setSelectedCountry(country);
    setSuggestionsOpen(false);
  };

  const onKeydownHandler = e => {
    const scrollOptions = {
      block: 'end',
      inline: 'nearest',
    };

    switch (e.code) {
      case 'ArrowDown':
        if (suggestionIndex === suggestions.length - 1) return;
        suggestions[suggestionIndex + 1].ref.current.scrollIntoView(
          scrollOptions
        );
        setSuggestionIndex(prev => prev + 1);
        break;

      case 'ArrowUp':
        if (suggestionIndex === 0) return;
        suggestions[suggestionIndex - 1].ref.current.scrollIntoView(
          scrollOptions
        );
        setSuggestionIndex(prev => prev - 1);
        break;

      case 'Enter':
        selectCountryHandler(suggestions[suggestionIndex].name);
        inputRef.current.blur();
        break;
      default:
        return;
    }
  };

  const onInputChangeHandler = e => {
    setSelectedCountry('');
    setUserInput(e.target.value);
    setSuggestionIndex(-1);
  };

  return (
    <S.SearchCountryWrapper
      ref={wrapperRef}
      tabIndex='-1'
      onBlur={onBlurHandler}
    >
      <S.InputWrapper tabIndex='-1'>
        <S.Input
          ref={inputRef}
          id='autocomplete-input'
          type='text'
          role='combobox'
          aria-label='Select country'
          aria-controls={suggestionsOpen ? 'autocomplete-list' : ''}
          aria-expanded={suggestionsOpen}
          aria-activedescendant={
            suggestionIndex > -1 && suggestions[suggestionIndex]?.code
          }
          aria-autocomplete='list'
          placeholder='Select country'
          autoComplete='off'
          aria-labelledby='autocomplete-input-label'
          value={userInput}
          onChange={onInputChangeHandler}
          onFocus={() => setSuggestionsOpen(true)}
          onKeyDown={onKeydownHandler}
        />
        <ClearInputBtn
          value={userInput}
          setValue={setUserInput}
          inputRef={inputRef}
          setSuggestionIndex={setSuggestionIndex}
        />
        <S.InputIcon className='dropdown-icon'>
          <MdKeyboardArrowDown />
        </S.InputIcon>
      </S.InputWrapper>

      {suggestionsOpen && (
        <S.SuggestionsListWrapper id='autocomplete-list' role='listbox'>
          {suggestions.length === 0 && <p>No countries found</p>}
          {suggestions.length > 0 && (
            <S.SuggestionsList>
              {suggestions.map((country, index) => (
                <li
                  role='option'
                  id={country.code}
                  key={country.code}
                  ref={country.ref}
                  onClick={e => selectCountryHandler(e.target.innerText)}
                  aria-selected={suggestionIndex === index ? 'true' : 'false'}
                  className={suggestionIndex === index ? 'active' : ''}
                >
                  <FlagIcon size='1.5rem' countryCode={country.code} />
                  {country.name}
                </li>
              ))}
            </S.SuggestionsList>
          )}
        </S.SuggestionsListWrapper>
      )}
    </S.SearchCountryWrapper>
  );
};

export default AutocompleteCountries;
