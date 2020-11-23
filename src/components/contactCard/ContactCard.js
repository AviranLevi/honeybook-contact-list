import Title from '../title/Title';

const ContactCard = ({
  key = '',
  name = '',
  jobTitle = '',
  companyName = '',
  profileImage = '',
  icon = '',
  phone = '',
  email = '',
}) => {
  return (
    <div key={key} className='contact-card center-items fade-in'>
      <div className='profile-img-icon'>
        <div className='profile-img'>
          <img alt={name} src={profileImage} />
        </div>
        <img className='job-icon' alt={companyName} src={icon} />
      </div>

      <div className='contact-info'>
        <Title text={name} />

        <div className='additional-info'>
          <h1>
            {jobTitle} | {companyName}
          </h1>
        </div>

        <div className='hover-info'>
          <br />
          <p>Phone Number: {phone}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
