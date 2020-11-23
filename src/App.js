import Header from './components/header';
import { getContactList } from './api';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const contactList = getContactList();
  }, []);

  return (
    <div className='app'>
      <Header />
    </div>
  );
}

export default App;
