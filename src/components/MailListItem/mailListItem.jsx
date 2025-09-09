import "./mailListItem.css"
import { FaStar } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";


export default function MailListItem({id , sender , isStared , hasAttachment , title , text , tags , date}) {
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
                <div className="mail-title">
                    <p><FaLongArrowAltRight color="#476EAE" size="1.5rem" /> <span>{title}</span></p>
                </div>
                <div  className={isOpen ? "open-mail-text" : "close-mail-text"}  >
                    <p>{text}</p>
                </div>
                <div className="mail-tags">
                    {tags.map(tag => <div className="mail-tag"><span>{tag}</span></div>)}
                </div>
                {isOpen && hasAttachment &&
                    <div className="mail-attachments">
                        {/* to do in the future */}
                    </div>
                }

            </div>
            <div className="mail-date">
                <span>{date}</span>
            </div>
        </div>
    );
}