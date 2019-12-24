import React,{Component} from 'react';
import './App.css';
import Slide from './slide/slide';
const slides = [
    {
      image: 'https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1.png',
      title: 'Person 1',
      description: 'Occaecat amet non in irure non.'
    },
    {
      image: 'data:image/png;base64,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',
      title: 'Person 2',
      description: 'Et excepteur dolore laborum quis adipisicing.'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4Q2AYvbjBLxSYvKUp6JRr99tagqQFwQZphlZQhS2UwECPz2p&s',
      title: 'Person 3',
      description: 'Laborum et occaecat occaecat occaecat minim irure.'
    }
  ];

class App extends Component{
  elements = [];
  selectors = [];
  
  constructor(){
    super();
    this.state = {selectedIndex:0};
  }
  
  incrementSlide = () => {
    this.setState({'selectedIndex': (this.state.selectedIndex+1)%slides.length});
  }
  decrementSlide = () => {
    if(this.state.selectedIndex - 1 >= 0){
      this.setState({'selectedIndex': (this.state.selectedIndex-1)%slides.length});
    } else {
      this.setState({'selectedIndex':slides.length -1 });
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({'selectedIndex': (this.state.selectedIndex+1)%slides.length});
    },1000);
  }
  render(){
    return (
      <div className="container-fluid">
      <div className="row" id="container">
          <div className="col col-sm-6 offset-sm-3 col-md-4 offset-md-4">
            <Slide slide={slides[this.state.selectedIndex]}></Slide>
            <span className="nav next" onClick={this.incrementSlide}>Next</span>
            <span className="nav prev" onClick={this.decrementSlide}>Prev</span>
          </div>
      </div>
      {/* <div className="selector-container">
        {this.selectors}
      </div> */}
    </div>
    );
  }
  
}
export default App;
