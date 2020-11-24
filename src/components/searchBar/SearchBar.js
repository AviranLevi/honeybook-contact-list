import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { featureIcons } from '../../constant/icons';
import * as actionCreator from '../../store/actions';
const SearchBar = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.features);
  return (
    <div className='search-bar'>
      <input
        value={value}
        className='search-input'
        onChange={(e) => dispatch(actionCreator.searchContact(e.target.value))}
        placeholder='Looking for someone?...'
      />
      {featureIcons.search}
    </div>
  );
};

export default SearchBar;
