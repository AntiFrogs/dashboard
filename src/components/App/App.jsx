import './App.css'
import { Routes , Route  } from 'react-router-dom';
import initTransactions from "../../data/transactions.js"
import initUsers from "../../data/users.js"
import Header from '../Header/header.jsx';
import SideBar from '../SideBar/sideBar.jsx';
import Home from '../Home/home.jsx';
import Analytics from '../Analytics/analytics.jsx';
import Users from '../Users/users.jsx';
import { useState } from 'react';
import { analyzeUserJoinDate , analyzeSales , analizeTransactionsStatus} from '../../Utils/utils.js';

export default function App() {
  const [users , setUsers ] = useState(initUsers);
    const [transactions , setTransactions] = useState(initTransactions);
  return (
    <div className='container'>
        <Header />
        <main className='main'>
          <SideBar />
          <div className="main-content">
            <Routes>
              <Route path='/' element={<Home users={users} transactions={transactions} userAnalyticsData={analyzeUserJoinDate(users)} />} />
              <Route path='/analytics' element={<Analytics userAnalyticsData={analyzeUserJoinDate(users)}  
                                                    salesAnalyticsData={analyzeSales(transactions)} 
                                                    transactionStatusAnalyticsData={analizeTransactionsStatus(transactions)} 
                                                />} 
                  />
                <Route path='/users' element={<Users  users={users} transactions={transactions} />} />
            </Routes>
          </div>
        </main>
    </div>
  );
};
