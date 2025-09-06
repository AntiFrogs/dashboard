import "./userListItem.css"
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";

export default function UserListItem({ id , imagePath , username , profession , userIdToShow = false, setUserIdToShow = () => {}}) {
    const isActive = id === userIdToShow;

    function displayBtnHandler() {
        if(isActive) {
            setUserIdToShow(false);
        }
        else {
            setUserIdToShow(id);
        }
    }
    
    
    return(
        <li className="user-list-item" >
                <div className="user-image-container">
                    <img src={imagePath} alt="User Image" />
                </div>
                <div className="user-info-container">
                    <p>{username}</p>
                    <p>{profession}</p>
                </div>
                <button className={"user-display-btn " + (isActive ? "is-displayed" : "")} onClick={displayBtnHandler}>
                    {isActive ?
                        <FaEyeSlash />
                    :
                        <MdRemoveRedEye />
                    }
                    <span>{isActive ? "Hide" : "Display"}</span>
                </button>   
        </li>
    );
}