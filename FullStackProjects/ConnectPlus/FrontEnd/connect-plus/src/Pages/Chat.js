import React from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../ComponentStyles/ContactsPanel.css'
import ContactsPanel from '../Components/ContactsPanel'
import ChatPanel from '../Components/ChatPanel'
import MessageContext from '../MessageContext'
// import {BrowserRouter} from 'react-router-dom'
function Chat() {

    return <div className='Main Div'>
        {/* <h1>HEllo</h1> */}
        <MessageContext>
        {/* <BrowserRouter> */}
        <div className='row'>
            <div className='contact-panel col-md-3'>
                <ContactsPanel />
            </div>

            <div className='chat-panel col-md-9'>
                <ChatPanel />
            </div>        
        </div>
        {/* </BrowserRouter> */}
        </MessageContext>
    </div>
}
export default Chat

