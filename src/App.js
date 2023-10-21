import './App.css';
import AppHeader from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import {Sidebar} from './components/sidebar/Sidebar';
import { Newsbox } from './components/newsbox/Newsbox';
import { Footer } from './components/footer/Footer';
import { Content } from './components/content/Content';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <Navbar />
      <div id='wrapper'>
        <div id='content'>
          <Content />
        </div>
        <div id="side-news"> 
          <Sidebar/>
          <Newsbox/>
        </div>
      </div>
      <Footer id="footer"/>
    </div>
  );
}

export default App;
