import "./users.css"
import UserListItem from "../UserListItem/userListItem.jsx";
import TransactionListItem from "../TransactionListItem/transactionListItem.jsx";
import { useEffect, useState } from "react";

export default function Users({users , transactions}) {
    const [selectedUser , setSelectedUser] = useState(false);
    const [userIdToShow , setUserIdToShow] = useState(false);
    
    useEffect(() => {
        let newSelectedUser = users.find(user => user.id === userIdToShow);
        setSelectedUser(newSelectedUser);
    } , [userIdToShow]);

    return (
        <div className="users-info-container">
            <div className="users-list-container">
                <p>Users</p>
                <ul>
                    {users.map(user => <UserListItem key={user.id} userIdToShow={userIdToShow} setUserIdToShow={setUserIdToShow} {...user} />)}
                </ul>
            </div>
            {selectedUser && 
                <div className="selected-user-info-container">
                    <div className="selected-user-image-container">
                        <img src={selectedUser.imagePath} alt="" />
                    </div>
                    <div className="selected-user-info">
                        <p>{selectedUser.username}</p>
                        <p>{selectedUser.profession}</p>
                        <p> <span>Joined since</span> <span>{selectedUser.joiningDate}</span> </p>
                    </div>
                    <div className="selected-user-transactions-list">
                        <p>Transactions</p>
                        <table className="selected-user-transaction-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                transactions.filter(transaction => transaction.user.id === selectedUser.id)
                                    .map(transaction => <TransactionListItem key={transaction.id} showUserInfo={false} {...transaction } />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>                
            }
        </div>

    );
}