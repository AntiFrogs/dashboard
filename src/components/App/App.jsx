import './App.css'
import { Routes , Route  } from 'react-router-dom';
import Header from '../Header/header.jsx';
import SideBar from '../SideBar/sideBar.jsx';
import Home from '../Home/home.jsx';
import { useState } from 'react';

export default function App() {
  const [users , setUsers ] = useState([
    { id:1 , imagePath: "images/ayanami.jpg" , username: "Peyman Bigdeli" , profession: "software developer"},
    { id:2 , imagePath: "images/ayanami.jpg" , username: "Ali Rezvani" , profession: "mechanical engineer"},
    { id:3 , imagePath: "images/ayanami.jpg" , username: "Jone Doe" , profession: "Baker"},
    { id:4 , imagePath: "images/ayanami.jpg" , username: "Mahdi rezaee" , profession: "Fottballer"},
    { id:5 , imagePath: "images/ayanami.jpg" , username: "Mohadeseh Jabbari" , profession: "Coach"},
    { id:6 , imagePath: "images/ayanami.jpg" , username: "Ali JahanBakhsh" , profession: "Influencer"},
    { id:7 , imagePath: "images/ayanami.jpg" , username: "Fatemeh Aali" , profession: "Unemployed"},
    ]);
    const [transactions , setTransactions] = useState([
                {
                    id:1,
                    user: { id:3 , imagePath: "images/ayanami.jpg" , username: "Jone Doe" , profession: "Baker"},
                    date: "2 dec 2024",
                    amount: 122,
                    status: "Approved",
                },

                {
                    id:2,
                    user: { id:7 , imagePath: "images/ayanami.jpg" , username: "Fatemeh Aali" , profession: "Unemployed"},
                    date: "14 oct 2024",
                    amount: 15,
                    status: "Pending",
                },

                {
                    id:3,
                    user:    { id:1 , imagePath: "images/ayanami.jpg" , username: "Peyman Bigdeli" , profession: "software developer"},
                    date: "23 agu 2024",
                    amount: 200,
                    status: "Approved",
                },
                
                {
                    id:4,
                    user: { id:6 , imagePath: "images/ayanami.jpg" , username: "Ali JahanBakhsh" , profession: "Influencer"},
                    date: "14 agu 2024",
                    amount: 300,
                    status: "Declined",
                },
                {
                    id:5,
                    user: { id:6 , imagePath: "images/ayanami.jpg" , username: "Ali JahanBakhsh" , profession: "Influencer"},
                    date: "13 agu 2024",
                    amount: 400,
                    status: "Declined",
                },
                {
                    id:6,
                    user: { id:2 , imagePath: "images/ayanami.jpg" , username: "Ali Rezvani" , profession: "mechanical engineer"},
                    date: "17 may 2024",
                    amount: 165,
                    status: "Approved",
                },
    ]);


  return (
    <div className='container'>
        <Header />
        <main className='main'>
          <SideBar />
          <div className="main-content">
            <Routes>
              <Route path='/' element={<Home users={users} transactions={transactions} />} />
            </Routes>
          </div>
        </main>
    </div>
  );
};
