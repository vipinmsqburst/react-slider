import React, { Component} from "react";
import '../App.css';

class Navigator extends Component{
	handler(index){
		this.props.changeSlide(index);
	}
  render(){
    return(
      <div className="row">
        <div className="col">
          <div className="selector-container">
            {
              this.props.slides.map((value,i) => {
                return <span className={this.props.selectedIndex === i? "selector selected": "selector"} key={i} onClick={() => this.handler(i)}></span>;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Navigator;