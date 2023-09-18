import './App.css';
import {Header} from './components/Header';
import { Balance } from './components/Balance';
import {Income} from './components/Income';
import { Transtractions } from './components/Transtractions';
import { AddTrancetraction } from './components/AddTrancetraction';
import{GlobalProvider}from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className="container">
        <Balance/>
        <Income/>
        <Transtractions/>
        <AddTrancetraction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
