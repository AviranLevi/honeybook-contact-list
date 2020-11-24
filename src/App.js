import Header from './pages/header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreator from './store/actions';
import Loading from './components/loading/Loading';
import Middle from './pages/middle';

function App() {
  const dispatch = useDispatch();
  const features = useSelector((state) => state.features);

  useEffect(() => {
    dispatch(actionCreator.getContactList());
  }, [dispatch]);

  return (
    <div className='app'>
      {features.isLoading ? <Loading /> : null}

      <Header />
      <Middle />
    </div>
  );
}

export default App;
