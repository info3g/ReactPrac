import React,{Component, createContext} from 'react'

export const MessageProvider = React.createContext()

class MessageContext extends React.Component{
    constructor(){
        super()

        this.state={
            contactsUrl: 'No Contact Selected',
            getContactsUrl: this.getContactsUrl,
            isloggedin: localStorage.setItem('loggedin',false),
            getLoggedStatus: this.getLoggedStatus

        }
    }

    getContactsUrl=(contact)=>{
        this.setState({
            contactsUrl:contact
        })
    }

    getLoggedStatus = () =>{
        this.setState({
            isloggedin: localStorage.getItem('loggedin')
        })
    }

    render(){
        return <MessageProvider.Provider value={{...this.state}}>
                {this.props.children}
            </MessageProvider.Provider>
        
    }
}
export default MessageContext