import React, { Component } from 'react';
import styles from "./Card.module.css";
import upArrow from "../images/up-arrow.svg"
import downArrow from "../images/down-arrow.svg"

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  downHandler = () => {
    if(this.state.counter > 0){
      this.setState(prevState => ({
        counter: prevState.counter - 1
      }))
    }
  }

  upHandler = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }


  render() {
    const {image, name, price} = this.props;
    return (
      <div className={styles.container}>
          <img src={image} alt='card'></img>
          <h3>{name}</h3>
          <p>{price}</p>
          <div className={styles.counter}>
            <img className={this.state.counter ? "" : styles.deactive} src={downArrow} alt="Down Arrow" onClick={this.downHandler} />
            <span>{this.state.counter}</span>
            <img src={upArrow} alt="Up Arrow" onClick={this.upHandler} />
          </div>

      </div>
    )
  }
}
