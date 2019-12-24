import React,{Component} from 'react';
import './App.css';
import Slide from './slide/slide';
import Navigator from './navigator/navigator';
import Nav from './navs/navs';
const slides = [
    {
      image: '/assets/img/download.png',
      title: 'Person 1',
      description: 'Occaecat amet non in irure non.'
    },
    {
      image: '/assets/img/dummy-user-img-1.png',
      title: 'Person 2',
      description: 'Et excepteur dolore laborum quis adipisicing.'
    },
    {
      image: '/assets/img/images.jpeg',
      title: 'Person 3',
      description: 'Laborum et occaecat occaecat occaecat minim irure.'
    }
  ];

class App extends Component{
  
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

  incDecSlide = (type) => {
    if(type === 'Next'){
      this.incrementSlide();
    } else {
      this.decrementSlide();
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({'selectedIndex': (this.state.selectedIndex+1)%slides.length});
    },5000);
  }
  changeSlide = (index) => {
    this.setState({'selectedIndex': index});
  }
  render(){
    return (
      <div className="container-fluid">
        <div className="row" id="container">
          <div className="col col-sm-6 offset-sm-3 col-md-4 offset-md-4">
            <Slide slide={slides[this.state.selectedIndex]}></Slide>
            <Nav type={'Next'} incDecSlide={this.incDecSlide}></Nav>
            <Nav type={'Prev'} incDecSlide={this.incDecSlide}></Nav>
          </div>
        </div>
        <Navigator changeSlide={this.changeSlide} selectedIndex={this.state.selectedIndex} slides={slides} size={slides.length}></Navigator>
      </div>
    );
  }
}
export default App;
