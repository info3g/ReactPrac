import React, { useContext } from 'react'
import {MessageProvider} from '../MessageContext'
import chatpanelbg from '../Media/Chatpanel/whatsappChatPanel.jpg'
import '../ComponentStyles/ChatPanel.css'
function ChatPanel() {
    const dataObj = useContext(MessageProvider)
    // console.log(window.location.href)
   
    return <div>
        <h1>Chat Here</h1>
        <h4>{dataObj.contactsUrl}</h4>
        {/* <img src={chatpanelbg} alt="aa"/> */}
        <div className="ChatPanel form-group">
            <input type="email" className="ChatPanel form-control"  placeholder="Type Message" />
        </div>
    </div>
    
}
export default ChatPanel