import React,{Component, createContext} from 'react'

export const MessageProvider = React.createContext()

class MessageContext extends React.Component{
    constructor(){
        super()

        this.state={
            contactsUrl: 'No Contact Selected',
            getContactsUrl: this.getContactsUrl,
            isloggedin: false,
            getLoggedStatus: this.getLoggedStatus

        }
    }

    getContactsUrl=(contact)=>{
        this.setState({
            contactsUrl:contact
        })
    }

    getLoggedStatus = (logged) =>{
        this.setState({
            isloggedin: logged
        })
    }

    render(){
        return <MessageProvider.Provider value={{...this.state}}>
                {this.props.children}
            </MessageProvider.Provider>
        
    }
}
export default MessageContext