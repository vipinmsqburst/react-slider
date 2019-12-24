import React, { Component} from "react";
import '../App.css';

class Slide extends Component{
    render(){
        return <div className="card" >
            <div className="header">
                <img className="rounded-circle" alt={this.props.slide.title} src={this.props.slide.image}/>
            </div>
            <div className="desc text-center">
                <h4>{this.props.slide.title}</h4>
                <p>{this.props.slide.description}</p>
            </div>
        </div>
    }
}

export default Slide;