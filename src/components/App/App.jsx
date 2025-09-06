import './App.css'
import Header from '../Header/header.jsx';
import SideBar from '../SideBar/sideBar.jsx';
import Home from '../Home/home.jsx';

export default function App() {
  return (
    <div className='container'>
        <Header />
        <main className='main'>
          <SideBar />
          <div className="main-content">
            <Home />
          </div>
        </main>
    </div>
  );
};
