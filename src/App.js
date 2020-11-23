import Header from './components/header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreator from './store/actions';
import ContactCard from './components/contactCard/ContactCard';
import Loading from './components/loading/Loading';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { contacts, features } = state;
  useEffect(() => {
    dispatch(actionCreator.getContactList());
    dispatch(actionCreator.isLoading(false));
  }, [actionCreator.getContactList]);
  const { list } = contacts;
  console.log(list);
  return (
    <div className='app'>
      {features.isLoading ? <Loading /> : null}

      <Header />
      <div className='middle center-items'>
        {list.length
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
          : null}
      </div>
    </div>
  );
}

export default App;
