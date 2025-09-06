import "./userListItem.css"
import { MdRemoveRedEye } from "react-icons/md";

export default function UserListItem({imagePath , username , profession }) {
    return(
        <li className="user-list-item" >
                <div className="user-image-container">
                    <img src={imagePath} alt="User Image" />
                </div>
                <div className="user-info-container">
                    <p>{username}</p>
                    <p>{profession}</p>
                </div>
                <button className="user-display-btn">
                    <MdRemoveRedEye />
                    <span>Display</span>
                </button>   
        </li>
    );
}