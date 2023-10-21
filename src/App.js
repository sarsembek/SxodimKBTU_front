import './App.css';
import { Space } from 'antd';
import AppHeader from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import {Sidebar} from './components/sidebar/Sidebar'
import { Newsbox } from './components/newsbox/Newsbox'
import { Footer } from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <AppHeader />
      <Navbar />
      <Space id="side-news"> 
        <Sidebar/>
        <Newsbox/>
      </Space>
      <Footer id="footer"/>
    </div>
  );
}

export default App;
