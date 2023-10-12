import './App.css';
import AppHeader from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import {Sidebar} from './components/sidebar/Sidebar';
import { searchField } from './components/search/search';
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Navbar />
      <Sidebar/>
      <searchField/>
    </div>
  );
}

export default App;
