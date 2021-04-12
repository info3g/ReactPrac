import React, {Component, createContext } from "react";


export const weatherprovider = React.createContext()

class WeatherContext extends React.Component{
    constructor(){
        super()
        this.state={
            countryName:'',
            getcountryName:this.getcountryName,
            allData:[],
            allWeatherData: this.allWeatherData,
            range: 5,
            getRange: this.getRange
        }
    }
    allWeatherData = (weatheraData)=>{
        this.setState({
            allData: weatheraData
        })
    }

    getRange = (range)=>{
        this.setState({
            range:range
        })
    }   

    getcountryName = (country)=>{
        // console.log(`country name before ${country}`)
        this.setState({
            countryName:country
        })
        // console.log(`country name after ${country}`)
        // console.log(`country name fixed ${this.state.countryName}`)
    }

    render(){

        return <weatherprovider.Provider value={{...this.state}}>
            {this.props.children}
        </weatherprovider.Provider>
    }
}
export default WeatherContext