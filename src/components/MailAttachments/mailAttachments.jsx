import "./mailAttachments.css"
import MailAttachmentsItem from "../MailAttachmentsItem/mailAttachmentsItem.jsx";

export default function MailAttachments({attachments}) {
    return (
        <div className="new-mail-attachments-container">
            {
                attachments.map((attachment , index) => <MailAttachmentsItem key={attachment.name + "_" + index}  attachment={attachment} /> )
            }
        </div>
    );
}