import React,{Component, createContext} from 'react'

export const MessageProvider = React.createContext()

class MessageContext extends React.Component{
    constructor(){
        super()

        this.state={
            contactsUrl: 'No Contact Selected',
            getContactsUrl: this.getContactsUrl
        }
    }

    getContactsUrl=(contact)=>{
        this.setState({
            contactsUrl:contact
        })
    }

    render(){
        return <MessageProvider.Provider value={{...this.state}}>
                {this.props.children}
            </MessageProvider.Provider>
        
    }
}
export default MessageContext