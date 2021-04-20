import React, { useContext, useState } from 'react'
import {MessageProvider} from '../MessageContext'
import chatpanelbg from '../Media/Chatpanel/whatsappChatPanel.jpg'
import '../ComponentStyles/ChatPanel.css'
function ChatPanel() {
    const dataObj = useContext(MessageProvider)
    const [msg,setmsg] = useState('')
    var msgarr=[]
    var reply=[]
    // var dupmsgarr=[]
    // console.log(window.location.href)
    function displayMessage(e) {
        
        if(e.code === "Enter"){
            setmsg(e.target.value)
            console.log('enter pressed')
            msgarr.push(e.target.value)
            console.log(msgarr)
            // dupmsgarr = msgarr
            

            // return <h1>{e.target.value}</h1>
            reply = msgarr.map((val)=>{
                console.log(val)
                return <h4>{val}</h4>
            })
                    
        }
        else{

        }
    }
    console.log(reply)
    

    console.log(msg)

    return <div>
        <h1>Chat Here</h1>
        <h4>{dataObj.contactsUrl}</h4>
        {/* <img src={chatpanelbg} alt="aa"/> */}
        {reply}
        <div className="ChatPanel form-group">
            <input type="email" className="ChatPanel form-control"  placeholder="Type Message" onKeyDown={displayMessage} />
        </div>
    </div>
    
}
export default ChatPanel