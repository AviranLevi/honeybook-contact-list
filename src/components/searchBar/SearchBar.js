import { featureIcons } from '../../constant/icons';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input className='search-input' placeholder='Looking for someone?...' />
      {featureIcons.search}
    </div>
  );
};

export default SearchBar;
