import "./mailListItem.css"
import { FaStar } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import MailAttachments from "../MailAttachments/mailAttachments.jsx";


export default function MailListItem({id , sender , to , isStared , hasAttachment , title , text , tags , attachments , date , loggedInUser}) {
    const [isOpen , setIsOpen] = useState(false);


    function openMailHandler(event) {
        if(event.target.type === "checkbox") return;
        setIsOpen(!isOpen);
    }

    
    return (
        <div className="mail-list-item" onClick={openMailHandler}>
            <div className="checkbox-container">
                <input data-mail-id={id} type="checkbox"/>
            </div>
            <div className="mail-info-container">
                <div className="mail-sender">
                    <p>{sender}</p>
                    <div className="mail-info-icons">
                        {isStared && 
                            <FaStar  color="#FF9B00"/>
                        }
                        {hasAttachment && 
                            <ImAttachment  />
                        }
                    </div>
                </div>
                {loggedInUser.username === sender &&
                    <div className="mail-receiver">
                            <span>To: </span>
                            <span>{to}</span>
                    </div>
                }
                <div className="mail-title">
                    <p><FaLongArrowAltRight color="#476EAE" size="1.5rem" /> <span>{title}</span></p>
                </div>
                <div  className={isOpen ? "open-mail-text" : "close-mail-text"}  >
                    <p>{text}</p>
                </div>
                <div className="mail-tags">
                    {tags.map( (tag , index) => <div key={tag + "-" + index} className="mail-tag"><span>{tag}</span></div>)}
                </div>
                {isOpen && hasAttachment &&
                    <MailAttachments attachments={attachments} />
                }

            </div>
            <div className="mail-date">
                <span>{date}</span>
            </div>
        </div>
    );
}