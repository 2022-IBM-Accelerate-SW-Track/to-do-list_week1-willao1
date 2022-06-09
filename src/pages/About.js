import React, { Component } from 'react';
import "./About.css";
import billhead from "../assets/billhead.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            // Image goes here
            src = {billhead}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Bill Ao</div>
          <div className="brief_description">
            Hello, I'm Bill! I am a sophomore at Princeton University, 
            and I want to be a software developer! I'm a huge sports
            fan (Go Braves!), and I love to play tennis and piano. 
            Fun Fact: I have a twin sister!
          </div>
        </div>
      </div>
    </div>
  
    )
  }
}