import React, { Component } from 'react';
import './App.css';

class Hello extends Component {
  render() {
    let friends = [
      {name: 'Messi', age: 18}, 
      {name: 'Ronaldo', age: 21}, 
      {name: 'David Silva', age: 25}, 
      {name: 'Memo', age: 30},
      {name: 'Andres', age: 33}
    ]
    return (
      <div>
        <ul>
          {
            friends.map(({name, age})=> {
              if (age >= 21) {
              return <p key={name}>Hello {name}. {age}, you are of age. Welcome to Moon Tower.</p>
            }
              else {
              return <p key={name}>Hello {name}. Unfortunately you are {age}, go home kid.</p>
              }
            })
          }
        </ul>
      </div>
    );
  }
}

export default Hello;
