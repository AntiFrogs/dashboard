import './App.css'
import { Routes , Route  } from 'react-router-dom';
import initTransactions from "../../data/transactions.js"
import initUsers from "../../data/users.js"
import Header from '../Header/header.jsx';
import SideBar from '../SideBar/sideBar.jsx';
import Home from '../Home/home.jsx';
import Analytics from '../Analytics/analytics.jsx';
import Users from '../Users/users.jsx';
import SignUp from '../SignUp/signUp.jsx';
import Transactions from '../Transactions/transactions.jsx';
import Mails from '../Mails/mails.jsx';
import { useState } from 'react';
import { analyzeUserJoinDate , analyzeSales , analizeTransactionsStatus} from '../../Utils/utils.js';

export default function App() {
  const [users , setUsers ] = useState(initUsers);
  const [transactions , setTransactions] = useState(initTransactions);
  const [loggedInUser , setLoggedInUser] = useState(initUsers[0]);
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
                <Route path='/new_user' element={<SignUp  users={users} />} />
                <Route path='/transactions' element={<Transactions  transactions={transactions} />} />
                <Route path='/mail' element={<Mails loggedInUser={loggedInUser} />} />
            </Routes>
          </div>
        </main>
    </div>
  );
};
