import React, { Component } from "react";
import { connect } from "react-redux";
import { onAddItem } from "../../actions/actionCreators";
import "./ItemAddForm.css";

class ItemAddForm extends Component {
   state = {
      label: "",
   };

   onChagneInput = (e) => {
      this.setState({
         label: e.target.value,
      });
   };

   onSubmit = (e) => {
      e.preventDefault();
      this.setState({
         label: "",
      });
   };

   render() {
      const { onAddItem } = this.props;
      const { label } = this.state;
      return (
         <form className="item-add-form mt-2 d-flex" onSubmit={this.onSubmit}>
            <input
               className="form-control mr-2"
               placeholder="What needs to be done?"
               onChange={this.onChagneInput}
               value={label}
            />
            <button className="btn btn-outline-secondary" type="submit" onClick={() => onAddItem(label)}>
               Add
            </button>
         </form>
      );
   }
}

////////////////////////////////////////////////////////////////////////////////////////

const mapDispatchToProps = (dispatch) => {
   return {
      onAddItem: (text) => dispatch(onAddItem(text)),
   };
};

export default connect(null, mapDispatchToProps)(ItemAddForm);
