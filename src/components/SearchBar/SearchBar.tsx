import React, { useEffect, useState } from 'react';
import './SearchBar.scss';
interface SearchProps {
  placeholder?: string,
  handleSearch: (value: string) => void,
}

const SearchBar:React.FC<SearchProps> = ({placeholder = '', handleSearch}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  
  useEffect(() => {
    setSearchValue('')
  }, [placeholder])
  
  
  useEffect(() => {
    let timer = setTimeout(()=>{
      if (searchValue || searchValue === '') handleSearch(searchValue)
    }, 800)
    return () => {
      clearTimeout(timer);
    }
  }, [handleSearch, searchValue])
  
  const onSearchChange = (e): void => {
    const value = e.target.value
    setSearchValue(value)
  }

  return (
    <div className="search-bar-container">
      <div className="input-container">
        <input type={'search'} placeholder={placeholder} onChange={onSearchChange} value={searchValue}/>
      </div>
        <button className='go-button'>Go</button>
    </div>
  )
}

export default SearchBar