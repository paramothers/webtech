import React, { Component } from "react";
import { ValidationDisplay } from "./ValidationDisplay";
import { GetValidationMessage } from "./ValidationMessage";

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.formElements = {
      name: {
        label: "Name",
        name: "name",
        validation: { required: true, minLength: 3 }
      },
      category: {
        label: "Category",
        name: "category",
        validation: { required: true, minLength: 5 }
      },
      price: {
        label: "Price",
        name: "price",
        validation: { type: "number", required: true, min: 5 }
      }
    };
  }

  setElement = element => {
    if (element != null) {
      this.formElements[element.name].element = element;
    }
  };

  handleAdd = () => {
    if (this.validateFormElements()) {
      let data = {};
      Object.values(this.formElements).forEach(v => {
        data[v.element.name] = v.element.value;
        v.element.value = "";
      });

      this.props.callback(data);
      this.formElements.name.element.focus();
    }
  }
  render() {
    return (
      <React.Fragment>
        {Object.values(this.formElements).map(elem => (
          <div className="form-group p-2" key={elem.name}>
            <label>{elem.label}</label>
            <input
              className="form-control"
              name={elem.name}
              autoFocus={elem.name === "name"}
              ref={this.setElement}
              onChange= { () => this.validateFormElement(elem.name)}
              {...elem.validation}
            />
            <ValidationDisplay errors={this.state.errors[elem.name]} />
          </div>
        ))}

        <div className="text-center">
          <button className="btn btn-primary" onClick={this.handleAdd}>
            Add
          </button>
        </div>
      </React.Fragment>
    );
  }

  validateFormElement = (name) => {

    let errors = GetValidationMessage(this.formElements[name].element);
    this.setState( state => state.errors[name] = errors);
    return errors.length === 0;
  }

  validateFormElements = () => {

    let valid = true;
    Object.keys(this.formElements).forEach( name => {
        if(!this.validateFormElement(name)){
            valid = false;
        }
    })
    return valid;
  }
}
