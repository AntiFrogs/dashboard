import "./home.css"
import StatCard from "../StatCard/statCard.jsx";
import UserAnalytics from "../UserAnalytics/userAnalytics.jsx";
import UserListItem from "../UserListItem/userListItem.jsx";
import TransactionListItem from "../TransactionListItem/transactionListItem.jsx";


const users = [
    { id:1 , imagePath: "images/ayanami.jpg" , username: "Peyman Bigdeli" , profession: "software developer"},
    { id:2 , imagePath: "images/ayanami.jpg" , username: "Ali Rezvani" , profession: "mechanical engineer"},
    { id:3 , imagePath: "images/ayanami.jpg" , username: "Jone Doe" , profession: "Baker"},
    { id:4 , imagePath: "images/ayanami.jpg" , username: "Mahdi rezaee" , profession: "Fottballer"},
    { id:5 , imagePath: "images/ayanami.jpg" , username: "Mohadeseh Jabbari" , profession: "Coach"},
    { id:6 , imagePath: "images/ayanami.jpg" , username: "Ali JahanBakhsh" , profession: "Influencer"},
    { id:7 , imagePath: "images/ayanami.jpg" , username: "Fatemeh Aali" , profession: "Unemployed"},
];

const transactions = [
    {
        id:1,
        user: { id:3 , imagePath: "images/ayanami.jpg" , username: "Jone Doe" , profession: "Baker"},
        date: "2 jun 2024",
        amount: 122,
        status: "Approved",
    },

    {
        id:2,
        user: { id:7 , imagePath: "images/ayanami.jpg" , username: "Fatemeh Aali" , profession: "Unemployed"},
        date: "14 agu 2023",
        amount: 15,
        status: "Pending",
    },

    {
        id:3,
        user:    { id:1 , imagePath: "images/ayanami.jpg" , username: "Peyman Bigdeli" , profession: "software developer"},
        date: "23 jan 2023",
        amount: 200,
        status: "Approved",
    },
    
    {
        id:4,
        user: { id:6 , imagePath: "images/ayanami.jpg" , username: "Ali JahanBakhsh" , profession: "Influencer"},
        date: "14 june 2022",
        amount: 300,
        status: "Declined",
    },
    {
        id:5,
        user: { id:6 , imagePath: "images/ayanami.jpg" , username: "Ali JahanBakhsh" , profession: "Influencer"},
        date: "13 june 2022",
        amount: 400,
        status: "Declined",
    },
    {
        id:6,
        user: { id:2 , imagePath: "images/ayanami.jpg" , username: "Ali Rezvani" , profession: "mechanical engineer"},
        date: "17 may 2022",
        amount: 165,
        status: "Approved",
    },
]





export default function Home() {
    return (
        <div className="home">
            <div className="home-main-stats">
                <StatCard title="Revanue" stats={{money: "2,415" , percent: -11.4}} compareTo={"last month"} />
                <StatCard title="Sales" stats={{money: "4,415" , percent: -1.4}} compareTo={"last month"} />
                <StatCard title="Cost" stats={{money: "2,225" , percent: 3.7}} compareTo={"last month"} />
            </div>
            <UserAnalytics />
            <div className="activities">
                <div className="activity-list">
                    <p>New Join Members</p>
                    <ul>
                        {
                        users.slice(0 , 5).map(user => <UserListItem key={user.id} {...user} /> )
                        }
                    </ul>   
                </div>
                <div className="activity-list">
                    <p>Latest Transactions</p>
                    <table className="transactions-table" >
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transactions.slice(0,4).map(transaction => <TransactionListItem key={transaction.key} {...transaction} /> )
                            }
                        </tbody>
                    </table>
                </div>
            </div>   
        </div>
    );
}