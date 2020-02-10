// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

/**import React, { Component } from 'react';
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {

      val: 0,


      }
  }


  secondsToTime = (e) => {
  
/*
   let hours = Math.floor(this.state.val / 3600);
  //  totalSeconds %= 3600;
  let minutes = Math.floor(this.state.val / 60);
  let seconds = this.state.val % 60;*/

/* this.setState({val:e.target.value})
     
  var hours = (this.state.val / 3600);
  var rhours = Math.floor(hours);


  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);

  let seconds = this.state.val % 60;
   
  console.log(rhours+":"+rminutes+":"+seconds)

  this.setState({h:rhours})
  this.setState({m:rminutes})
  this.setState({s:seconds})
//setInterval


  }    



render() { 
  return (
    /**   <input className="inputTime"></input> */
/*<div className="main">
          <img src={"https://www.pngitem.com/pimgs/m/225-2259677_iphone-6-outline-for-wireframe-mobile-phone-templates.png"}  className="iphone"  alt="img"/>
         
          <div className="time">
            <div className="timeInNumbers"> 
            
              <span>{this.state.val}</span>
              </div>
              <div className="hourMinute"> <span>Hour</span> <span>Minute</span> <span>Second</span></div>
          </div>
          <div className="buttons">
      <span className="startBtn"  onClick={this.setInval}>Start</span>
      <span className="resetBtn" onClick={this.resetFunction} >Reset</span>
  </div>
  <input className="inputTime" onChange={(e)=>this.secondsToTime(e)}></input>
      </div>




   );
}
}

export default Timer; */

/**  setInterval = e => { this.setState({ val: e.target.value });
      this.setState({
        seconds: this.state.seconds + 1}, 1000) ;}   */
