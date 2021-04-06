import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import PastryContainer from './components/PastryContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake></ItemContainer>
        <ItemContainer iceCream></ItemContainer>
        <ItemContainer></ItemContainer>
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
