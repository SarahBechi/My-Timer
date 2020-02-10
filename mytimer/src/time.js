import React, { Component } from "react";
class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 7618,
      hours: 0,
      minutes: 0,
      seconds: 58
    };
  }

  secondsToTime = e => {
    //conversion d'un chiffre donné en heurs, minutes et secondes.
    var hours = this.state.val / 3600;
    var rhours = Math.floor(hours);

    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);

    let seconds = this.state.val % 60;

    console.log(rhours);

    this.setState({ hours: rhours });
    this.setState({ minutes: rminutes });
    this.setState({ seconds: seconds });


    // incrementation (seconds > minutes > heures)


    /*setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);*/

    if (this.state.seconds >= 60) {
      alert("ddd");

      this.setState({
        seconds: 0,

        minutes: this.state.minutes + 1
      });
      setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);


    }
    else
      setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);




  }


  reset = () => {
    this.setState(
      {
        minutes: this.state.minutes = 0,
        hours: this.state.hours = 0,
        seconds: this.state.seconds = 0
      } ,

    );
  };


  render() {
    return (
      <div className="main">
        <img
          src={
            "https://www.pngitem.com/pimgs/m/225-2259677_iphone-6-outline-for-wireframe-mobile-phone-templates.png"
          }
          className="iphone"
          alt="img"
        />

        <div className="time">
          <div className="timeInNumbers">
            <span>{this.state.hours} :</span>
            <span>{this.state.minutes} :</span>
            <span>{this.state.seconds}</span>
          </div>
          <div className="hourMinute">
            <span>Hour</span> <span>Minute</span> <span>Second</span>
          </div>
        </div>
        <div className="buttons">
          <span className="startBtn" onClick={this.secondsToTime}>
            Start
          </span>
          <span className="resetBtn" onClick={this.reset}>
            Reset
          </span>
        </div>
      </div>
    );
  }
}

export default Time;
