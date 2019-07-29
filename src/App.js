import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "20d6d0d82c4ae43922d593157dfc8253";


class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country:undefined,
    description: undefined,
    error:undefined

  }

  
  getWeather = async (e) => { 
    
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    
    if(city && country){
        console.log(data);
      this.setState({
        
          
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        
      });
    }else if (city != data.name || country !=data.sys.country ){
          this.setState({
                    
                      
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter a valid detail!"
          
          }); 
    }else if (city != data.name && country !=data.sys.country ){
          this.setState({
                    
                      
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter a valid detail!"
          
          }); 
    }else {
            this.setState({
              
                
              temperature: undefined,
              city: undefined,
              country: undefined,
              humidity: undefined,
              description: undefined,
              error: "Please enter the details!"
            
          });
        }
    
  }
  

  render() {    

    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row ">
                <div className="col-xs-6 title-container ">
                    <div className = "title-container-title">
                      <Titles/> 
                    </div>
                    <div className = "title-container-form">
                      <Form getWeather = {this.getWeather}
                      error= {this.state.error} />
                    </div>
                </div>
                <div className="col-xs-6 form-container">
                  
                  <Weather 
                    temperature = {this.state.temperature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                  /> 
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }

}

export default App;


        