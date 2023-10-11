import './App.css';
import AppHeader from './components/Header';
import { Navbar } from './components/Navbar';
import {Sidebar} from './components/Sidebar'

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
