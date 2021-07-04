

import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';


class app extends Component {


  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  
handleIncrement = (habit) =>{
    
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState(habits);


};
handleDecrease = (habit) =>{

    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count-1;

    habits[index].count = count > 0 ? count : 0;
    this.setState(habits);

};
handleDelete = (habit) => {

    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    
    const newarr = [];
    habits.forEach(element => {
        if(element.id !== habit.id){
            newarr.push(element);
        }
    });
    this.setState( {habits : newarr} );

}

handleadd = (habit) => {
 
  const habits = [...this.state.habits, {id: 1, name: "test", count:0 } ];
  this.setState({ habits});
}


  render() {
    return (
      <>
      <input className = "test"></input>
      <button onClick={this.handleadd}>추가</button>
      <div>
        <Habits
        habits={this.state.habits}
         onIncrement = {this.handleIncrement} 
         onDecrease  = {this.handleDecrease} 
         onDelete    = {this.handleDelete} />
      </div>
      </>
    );
  }
}

export default app;


