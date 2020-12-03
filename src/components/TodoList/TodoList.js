import React from "react";
import { connect } from "react-redux";
import { onDelete, onToggleDone } from "../../actions/actionCreators";

import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ items, onToggleDone, onDelete, filter }) => {
   const filterItems = (items, filter) => {
      if (filter === "all") {
         return items;
      } else if (filter === "active") {
         return items.filter((item) => !item.done);
      } else if (filter === "done") {
         return items.filter((item) => item.done);
      }
   };

   const visibleItems = filterItems(items, filter);

   const elements = visibleItems.map((item) => {
      const { id, ...itemProps } = item;
      return (
         <li key={id} className="list-group-item">
            <TodoListItem {...itemProps} onToggleDone={() => onToggleDone(id)} onDelete={() => onDelete(id)} />
         </li>
      );
   });
   return <ul className="todo-list list-group">{elements}</ul>;
};

///////////////////////////////////////////////////////////////////////////////////////////////

const mapStateToProps = ({ items, filter }) => {
   return { items, filter };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onToggleDone: (id) => dispatch(onToggleDone(id)),
      onDelete: (id) => dispatch(onDelete(id)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
