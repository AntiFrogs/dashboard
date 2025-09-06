import "./home.css"
import StatCard from "../StatCard/statCard.jsx";
import AnalyticsChart from "../UserAnalytics/analyticsChart.jsx";
import UserListItem from "../UserListItem/userListItem.jsx";
import TransactionListItem from "../TransactionListItem/transactionListItem.jsx";


export default function Home({users , transactions , userAnalyticsData}) {
    return (
        <div className="home">
            <div className="home-main-stats">
                <StatCard title="Revanue" stats={{money: "2,415" , percent: -11.4}} compareTo={"last month"} />
                <StatCard title="Sales" stats={{money: "4,415" , percent: -1.4}} compareTo={"last month"} />
                <StatCard title="Cost" stats={{money: "2,225" , percent: 3.7}} compareTo={"last month"} />
            </div>
            <AnalyticsChart title="Users Analytics" AnalyticsData={userAnalyticsData} chartType="monotone" dataKey="users" />
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