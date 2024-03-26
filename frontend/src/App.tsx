import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesComp from './RoutesComp';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <RoutesComp />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
