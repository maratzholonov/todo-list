import React, { Component } from "react";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import TodoList from "../TodoList/TodoList";
import "./App.css";

class App extends Component {
   render() {
      return (
         <div className="app">
            <div>
               <h1>Todo List</h1>
            </div>
            <ItemStatusFilter />
            <TodoList />
            <ItemAddForm />
         </div>
      );
   }
}

export default App;
