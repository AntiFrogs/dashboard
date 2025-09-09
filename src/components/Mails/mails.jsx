import "./mails.css"
import MailsList from "../MailsList/mailsList.jsx";
import { IoIosSend } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import initmails from "../../data/mails.js";
import { useState } from "react";


export default function Mails() {
    const [mails , setMails] = useState(initmails);
    const [ isActive , setIsActive] = useState([false , true , false , false]);

    function mailCatClickHandler(index) {
        let newIsActive = [false , false , false , false];
        newIsActive[index] = true;
        setIsActive(newIsActive);
    }


    return (
        <div className="mails-container">
            <div className="mails-header">
                <h3>Mails</h3>
                <ul className="mails-header-cat">
                    <li className={"mails-cat-btn " + (isActive[0] ? "selected-mail-box" : "")} onClick={() => mailCatClickHandler(0)} >
                        <IoIosSend />
                        <span>Sent</span>
                    </li>
                    <li className={"mails-cat-btn " + (isActive[1] ? "selected-mail-box" : "")} onClick={() => mailCatClickHandler(1)} >
                        <FaInbox />
                        <span>Inbox</span>
                    </li>
                    <li className={"mails-cat-btn " + (isActive[2] ? "selected-mail-box" : "")} onClick={() => mailCatClickHandler(2)} >
                        <FaArchive />
                        <span>Archive</span>
                    </li>
                    <li className={"mails-cat-btn " + (isActive[3] ? "selected-mail-box" : "")} onClick={() => mailCatClickHandler(3)} >
                        <FaTrash />
                        <span>Trash</span>
                    </li>
                </ul>
            </div>
            <div className="mails-content-container">
                <MailsList 
                mails={ mails} 
                isActive={isActive}
                setMails={setMails} />

            </div>
        </div>
    );
}