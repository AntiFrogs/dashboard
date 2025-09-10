import "./mailsList.css"
import { FiArchive } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";
import { MdOutlineEdit } from "react-icons/md";
import MailListItem from "../MailListItem/mailListItem.jsx";
import { useState } from "react";

export default function MailsList({mails , setMails , isActive , loggedInUser}) {
    const [newMailData , setNewMailData] = useState(new Map([["to" , ""] , ["title" , ""] , ["text" , ""] , ["tags" , [] ]]));
    const [ newMailOpenIsOpen , setNewMailOpenIsOpen] = useState(false);

    function checkAllHandler(event) {
        let checkboxes = document.getElementsByClassName("checkbox-container");
        [...checkboxes].forEach(function(checkbox) {
            checkbox.children[0].checked = event.target.checked;
        });
    }

    function inputChangeHandler(key , event) {
        let changedNewMailData = new Map(newMailData);
        changedNewMailData.set(key , event.target.value);
        setNewMailData(changedNewMailData);

        if(key === "text") {
            let textAreaElement = document.getElementById("text-input");
            textAreaElement.style.height = "10rem";
            textAreaElement.style.height = (textAreaElement.scrollHeight > textAreaElement.clientHeight) ? textAreaElement.scrollHeight + "px" : textAreaElement.clientHeight + "px";                 
        }

    }


    function addTagHandler() {
        let addTagsInput = document.getElementById("add-tags");
        let changedNewMailData = new Map(newMailData);
        changedNewMailData.set("tags" , [...newMailData.get("tags") , addTagsInput.value.trim()]);
        addTagsInput.value = "";
        setNewMailData(changedNewMailData);
    }

    function sendNewMailHandler() {
        const today = new Date();
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        const yyyy = String(today.getFullYear());

        let newMail = {
            id: mails[mails.length - 1].id + 1,
            sender: loggedInUser.username,
            to: newMailData.get("to"),
            title: newMailData.get("title"),
            text: newMailData.get("text"),
            tags: newMailData.get("tags"),
            date: `${mm}/${dd}/${yyyy}`,
            isStared: false,
            hasAttachment: false,
            isArchived: false,
            isDeleted: false,
        };
        setNewMailData(new Map([["to" , ""] , ["title" , ""] , ["text" , ""] , ["tags" , [] ]]));
        setNewMailOpenIsOpen(false);
        setMails([newMail , ...mails ]);
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
        document.getElementById("check-all-checkbox").checked = false; 
        setMails(newMails);
    }

    return (
        <div className="mails-list-container">
            <div className="mails-list-header">
                <div className="check-all-btn">
                    <input type="checkbox"  id="check-all-checkbox" onInput={checkAllHandler} />
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
                    {isActive[0] && 
                        <button className="mails-btn" onClick={() => setNewMailOpenIsOpen(true)} >
                            <MdOutlineEdit />
                            <span>New Mail</span>
                        </button>
                    }
                    <button data-btn-type="star" className="mails-btn" onClick={() => clickHandler("star")} >
                        <FaRegStar />
                        <span>Star</span>
                    </button>
                </div>
            </div>
            <div className="mails-list-content">
                {isActive[0] && newMailOpenIsOpen &&
                    <div className="new-mail-container">
                        <div className="new-mail-header">
                            <h6>New Mail</h6>
                            <button onClick={() => setNewMailOpenIsOpen(false)}><IoMdClose /></button>
                        </div>
                        <div className="new-mail-inputs">
                            <input value={newMailData.get("to")} type="text" id="recipients-input" placeholder="Recipient" onInput={(event) => inputChangeHandler("to" , event)} />
                            <input value={newMailData.get("title")} type="text" id="title-input" placeholder="Title" onInput={(event) => inputChangeHandler("title" , event)} />
                            <textarea value={newMailData.get("text")} id="text-input" wrap="hard" onInput={(event) => inputChangeHandler("text" , event)} />
                        </div>
                        <div className="new-mail-tags">
                            {
                                newMailData.get("tags").map((tag , index) => <div key={tag + "-" + index} className="mail-tag"><span>{tag}</span></div>)
                            }
                        </div>
                        <div className="new-mail-btns">
                            <button onClick={sendNewMailHandler}
                            className={"send-btn " + (newMailData.get("to") && newMailData.get("title") && newMailData.get("text") ? "" : "btn-deactive")} >
                                <span>Send</span>
                                <IoSend />
                            </button>
                            <button className="attachment-btn">
                                <ImAttachment />
                            </button>
                            <div className="add-tags-container">
                                <input type="text" id="add-tags" placeholder="Report" onKeyUp={(event) => event.key === "Enter" ? addTagHandler() : false} />
                                <button onClick={addTagHandler} >Add tag</button>
                            </div>
                        </div>
                    </div>
                }
                <ul className="mails-list">
                    {
                    (
                    isActive[0] ? mails.filter(mail => mail.to !== loggedInUser.username):
                    isActive[1] ? mails.filter(mail => (mail.to === loggedInUser.username && mail.isArchived === false && mail.isDeleted === false)) :
                    isActive[2] ? mails.filter(mail => (mail.to === loggedInUser.username && mail.isArchived === true && mail.isDeleted === false)) :
                    isActive[3] ? mails.filter(mail => (mail.to === loggedInUser.username && mail.isDeleted === true)) :
                    mails
                    ).map(mail => <MailListItem key={mail.id} loggedInUser={loggedInUser} {...mail} /> )}
                </ul>
            </div>
        </div>
    );
}