import './App.css'
import Header from '../Header/header.jsx';
import SideBar from '../SideBar/sideBar.jsx';

export default function App() {
  return (
    <div className='container'>
        <Header />
        <main className='main'>
          <SideBar />
        </main>
    </div>
  );
};
