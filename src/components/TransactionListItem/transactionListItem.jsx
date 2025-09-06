import "./transactionListItem.css"

export default function TransactionListItem({user , date , amount , status }) {
    
    return (
        <tr className="transaction-list-item">
            <td className="transaction-cutomer-info">
                <div className="user-image-container">
                    <img src={user.imagePath} alt="user image" />
                </div>
                <p>{user.username}</p>
            </td>
            <td className="transaction-date">{date}</td>
            <td className="transaction-amount">${amount.toFixed(2)}</td>
            <td className={"transaction-status " + (status !== "Approved" ? status !== "Pending" ? status !== "Declined" ? "" : "declined" : "pending" : "approved")}>
                <span>{status}</span>
            </td>

        </tr>
    );
}