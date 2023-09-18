import './App.css';
import {Header} from './components/Header';
import { Balance } from './components/Balance';
import {Income} from './components/Income';
import {Transtraction} from './components/Transtraction';
import { AddTrancetraction } from './components/AddTrancetraction';
import{GlobaleProvider}from './context/GlobalState';

function App() {
  return (
    <GlobaleProvider >
      <Header />
      <div className="container">
        <Balance/>
        <Income/>
        <Transtraction/>
        <AddTrancetraction/>
      </div>
    </GlobaleProvider>
  );
}

export default App;
