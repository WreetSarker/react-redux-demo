import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import PastryContainer from './components/PastryContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer></HooksCakeContainer>
        <CakeContainer></CakeContainer>
        <IceCreamContainer></IceCreamContainer>
        <PastryContainer></PastryContainer>
        <NewCakeContainer></NewCakeContainer>
      </div>
    </Provider>
  );
}

export default App;
