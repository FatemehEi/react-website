import React, { Component } from 'react'
import styles from './Cards.module.css';
import Card from './Card.js';

import iphone13 from '../images/iphone13pro.jpg';
import galaxyS22 from '../images/galaxyS22.jpg';
import note20 from '../images/note20ultra.jpg';
import galaxyS21 from '../images/galaxyS21.jpg';

export default class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
            <Card image={iphone13} name="iPhone 13 Pro Max" price="2600$" />
            <Card image={galaxyS22} name="Galaxy S22" price="2000$" />
            <Card image={note20} name="Galaxy Note 20" price="1600$" />
            <Card image={galaxyS21} name="Galaxy S21" price="800$" />
      </div>
    )
  }
}
