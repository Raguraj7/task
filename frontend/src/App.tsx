import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesComp from './RoutesComp';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Suspense } from 'react';
import Loading from './components/Loading';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <div className='App'>
          <BrowserRouter>
            <RoutesComp />
          </BrowserRouter>
        </div>
      </Provider>
    </Suspense>
  );
}

export default App;
