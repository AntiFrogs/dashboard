import "./mailsList.css"
import { FiArchive } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import MailListItem from "../MailListItem/mailListItem.jsx";

export default function MailsList({mails , setMails , isActive}) {
    
    function checkAllHandler(event) {
        let checkboxes = document.getElementsByClassName("checkbox-container");
        [...checkboxes].forEach(function(checkbox) {
            checkbox.children[0].checked = event.target.checked;
        });
    }


    function clickHandler(btnType) {       
        let newMails = [...mails];
        let checkboxes = document.getElementsByClassName("checkbox-container");
        [...checkboxes].forEach(function(checkbox) {
            if (checkbox.children[0].checked) {
                let mailId = +checkbox.children[0].dataset.mailId;
                newMails  = newMails.map(function(newMail) {
                    if(newMail.id !== mailId) return newMail;
                    if(btnType === "archive") return ({...newMail , isArchived: !newMail.isArchived});
                    if(btnType === "delete") return ({...newMail , isDeleted: !newMail.isDeleted});
                    if(btnType === "star") return ({...newMail , isStared: !newMail.isStared});
                });
                checkbox.children[0].checked = false;
            }
        });
        setMails(newMails);
    }

    return (
        <div className="mails-list-container">
            <div className="mails-list-header">
                <div className="check-all-btn">
                    <input type="checkbox"  onInput={checkAllHandler} />
                </div>
                <div className="mails-btns">
                    {!isActive[0] && !isActive[3] &&
                        <button data-btn-type="archive" className="mails-btn" onClick={() => clickHandler("archive")}>
                            <FiArchive />
                            <span>{isActive[1] ? "Archive" :
                                    isActive[2] ? "Unarchive" : ""}
                            </span>
                        </button>
                    }
                    {!isActive[0] &&
                        <button data-btn-type="delete" className="mails-btn" onClick={() => clickHandler("delete") } >
                            <FaRegTrashAlt />
                            <span>{isActive[3] ? "Undelete" : "Delete"}</span>
                        </button>
                    }
                    <button data-btn-type="star" className="mails-btn" onClick={() => clickHandler("star")} >
                        <FaRegStar />
                        <span>Star</span>
                    </button>
                </div>
            </div>
            <div className="mails-list-content">
                <ul className="mails-list">
                    {
                    (
                    isActive[0] ? mails :
                    isActive[1] ? mails.filter(mail => (mail.isArchived === false && mail.isDeleted === false)) :
                    isActive[2] ? mails.filter(mail => (mail.isArchived === true && mail.isDeleted === false)) :
                    isActive[3] ? mails.filter(mail => (mail.isDeleted === true)) :
                    mails
                    ).map(mail => <MailListItem key={mail.id} {...mail} /> )}
                </ul>
            </div>
        </div>
    );
}