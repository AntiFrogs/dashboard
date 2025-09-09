import "./transactions.css"
import TransactionListItem from "../TransactionListItem/transactionListItem.jsx";


export default function Transactions({transactions}) {
    return (
        <div className="transactions-list-container">
            <p>Transactions</p>
            <table className="transactions-table">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => <TransactionListItem key={transaction.key} {...transaction} /> )}
                </tbody>
            </table>
        </div>
    );
}