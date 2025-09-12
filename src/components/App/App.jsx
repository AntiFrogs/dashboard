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
import initmails from "../../data/mails.js";
import { analyzeUserJoinDate , analyzeSales , analizeTransactionsStatus} from '../../Utils/utils.js';

export default function App() {
  const [users , setUsers ] = useState(initUsers);
  const [transactions , setTransactions] = useState(initTransactions);
  const [mails , setMails] = useState(initmails);
  const [lastMailId , setLastMailId] = useState(mails[mails.length - 1].id);
  const [loggedInUser , setLoggedInUser] = useState(initUsers[0]);
  const [lastUserId , setLastUserId] = useState(users[users.length - 1].id);
  const [showSideBar , setShowSideBar] = useState(false);

  return (
    <div className='container'>
        <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <main className='main'>
          <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
          <div className="main-content">
            <Routes>
              <Route path='/' element={<Home users={users} transactions={transactions} userAnalyticsData={analyzeUserJoinDate(users)} />} />
              <Route path='/analytics' element={<Analytics userAnalyticsData={analyzeUserJoinDate(users)}  
                                                    salesAnalyticsData={analyzeSales(transactions)} 
                                                    transactionStatusAnalyticsData={analizeTransactionsStatus(transactions)} 
                                                />} 
                  />
                <Route path='/users' element={<Users  users={users} transactions={transactions} />} />
                <Route path='/new_user' element={<SignUp  users={users} setUsers={setUsers} lastUserId={lastUserId} setLastUserId={setLastUserId} />} />
                <Route path='/transactions' element={<Transactions  transactions={transactions} />} />
                <Route path='/mail' element={<Mails mails={mails} setMails={setMails} lastMailId={lastMailId} setLastMailId={setLastMailId} loggedInUser={loggedInUser} />} />
            </Routes>
          </div>
        </main>
    </div>
  );
};
