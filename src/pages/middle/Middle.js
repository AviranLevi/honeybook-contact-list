import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactCard from '../../components/contactCard/ContactCard';
import Title from '../../components/title/Title';
import { getSearchResults } from '../../store/actions';

const Middle = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { features, contacts } = state;
  const { list } = contacts;
  const { searchResults, searchValue } = features;

  useEffect(() => {
    if (searchValue) {
      dispatch(getSearchResults());
    }
  }, [searchValue]);

  return (
    <div className='middle center-items'>
      {list.length && !searchValue
        ? list.map((contact) => (
            <ContactCard
              profileImage={contact.profile_image}
              icon={contact.icon}
              name={contact.name}
              companyName={contact.company_name}
              email={contact.email}
              jobTitle={contact.job}
              phone={contact.phone}
            />
          ))
        : searchResults.map((contact) => (
            <ContactCard
              profileImage={contact.profile_image}
              icon={contact.icon}
              name={contact.name}
              companyName={contact.company_name}
              email={contact.email}
              jobTitle={contact.job}
              phone={contact.phone}
            />
          ))}

      {!searchResults.length && searchValue ? <Title className='search-not-found' text={`No results :(..`} /> : null}
    </div>
  );
};

export default Middle;
