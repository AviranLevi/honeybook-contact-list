import SearchBar from '../../components/searchBar';
import Title from '../../components/title/Title';

const Header = () => {
  return (
    <div className='header center-items'>
      <Title text='Contact List' />
      <SearchBar />
    </div>
  );
};

export default Header;
