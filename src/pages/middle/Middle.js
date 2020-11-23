import { useSelector } from 'react-redux';
import ContactCard from '../../components/contactCard/ContactCard';

const Middle = () => {
  const state = useSelector((state) => state);
  const { features, contacts } = state;
  const { list } = contacts;
  const { searchValue } = features;

  return (
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
  );
};

export default Middle;
