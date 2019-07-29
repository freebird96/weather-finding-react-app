import React from "react";


class Weather extends React.Component {
    render() {
        const {city, country,temperature, humidity, description, error} = this.props;
        
        return(
            <div className="weather__info">
                {                   
                    <div class="card"> 
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-wind"></i></h5>
                            <p className = "weather__key" >Humidity:                     
                                <span className="weather__value" > {temperature}</span>     
                            </p>                        
                        </div>       
                        <div class="card-footer">
                             Humidity
                        </div>                                         
                    </div>          
                     
                }
                {temperature && <p className = "weather__key" >Temperature: 
                    
                    <span className="weather__value" > {temperature}</span>     
                    </p>
                }
                {
                    humidity && <p className = "weather__key" >Humidity: 
                    <span className="weather__value" > {humidity}</span>  
                    </p>
                }
                {
                    description && <p className = "weather__key" >Conditions: 
                    <span className="weather__value" > {description}</span> 
                    </p> 
                }     
                {
                    error && <p className = "weather__key" >
                    <span className="weather__value" > {error}</span>
                    </p>
                }      
            </div>
        )
    }
} 

export default Weather;