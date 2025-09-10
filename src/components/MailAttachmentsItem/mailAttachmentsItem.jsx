import "./mailAttachmentsItem.css"
import { FaFile } from "react-icons/fa";
export default function MailAttachmentsItem({attachment}) {
    function downloadAttachmentHandler() {
        const downloadLink = document.createElement("a");
        let url =URL.createObjectURL(attachment);
        downloadLink.href = url;
        downloadLink.download = attachment.name;
        downloadLink.click();
        URL.revokeObjectURL(url);
    }
    
    
    return (
        <div className="new-mail-attachment" onClick={downloadAttachmentHandler}>
            <FaFile className="new-mail-attachment-icon" />
            <div className="new-mail-attachment-info">
                <p>{attachment.name}</p>
                <span>
                    {(attachment.size / (1024 * 1024) ) < 1 ?
                        (attachment.size / 1024).toFixed(0) + " KB"
                    :
                        (attachment.size / (1024 * 1024)).toFixed(2) + " MB"
                    }
                </span>
            </div>
        </div>
    );
}