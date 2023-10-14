import './App.css';
import AppHeader from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import {Sidebar} from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Navbar />
      <Sidebar/>
  

    </div>
  );
}

export default App;
