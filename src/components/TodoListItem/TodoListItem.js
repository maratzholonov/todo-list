import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ label, done, onToggleDone, onDelete }) => {
   let cls = "todo-list-item";

   if (done) {
      cls += " done";
   }

   return (
      <span className={cls}>
         <span className="todo-list-item-label" onClick={onToggleDone}>
            {label}
         </span>

         <button onClick={onDelete} type="button" className=" btn btn-outline-danger float-right">
            <i className="fa fa-trash-o" />
         </button>
      </span>
   );
};

export default TodoListItem;
