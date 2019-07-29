import React from "react";


class Form extends React.Component {
    

    render() {
        const {getWeather, error} = this.props;
        
        return(
            <form className="mt-5" onSubmit  = {getWeather} >
                <input type="text" className = "input-place" name="city" placeholder="City "/>
                <input type="text" className="input-place" name="country" placeholder="Country " />
                <div>
                    <button type="submit" className ="text-uppercase text-center" >Search <i className="fas fa-search"></i></button>
                </div>
            </form>
        )
    }
} 

export default Form;