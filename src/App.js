import './App.css';
import { Space } from 'antd';
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
        <Content id="content"/>
        <div id="side-news"> 
          <Sidebar/>
          <Newsbox/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
