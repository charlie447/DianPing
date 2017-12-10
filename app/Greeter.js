// Greeter.js
import React,{Component} from 'react';   //Pay attention to the uppercase
import config from './config.json';
import styles from './Greeter.css';
class Greeter extends Component{
  render(){
    return (
      <div className={styles.root}> 
        {config.greetText}
      </div>
    );
  }
}

export default Greeter;
