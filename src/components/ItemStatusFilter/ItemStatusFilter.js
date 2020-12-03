import React from "react";
import { connect } from "react-redux";
import { onFilterChange } from "../../actions/actionCreators";

const filterButtons = [
   { name: "all", label: "All" },
   { name: "active", label: "Active" },
   { name: "done", label: "Done" },
];

const ItemStatusFilter = ({ filter, onFilterChange }) => {
   const buttons = filterButtons.map(({ name, label }) => {
      const isActive = name === filter;
      const cls = "btn " + (isActive ? "btn-info" : "btn-outline-secondary");

      return (
         <button key={name} className={cls} onClick={() => onFilterChange(name)}>
            {label}
         </button>
      );
   });
   return <div className="btn-group mb-3">{buttons}</div>;
};

const mapStateToProps = (state) => {
   return {
      filter: state.filter,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onFilterChange: (name) => dispatch(onFilterChange(name)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemStatusFilter);
