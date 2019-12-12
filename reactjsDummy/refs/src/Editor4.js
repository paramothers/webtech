import React, {Component} from "react";

export class Editor extends Component {

    constructor(props){
        super(props);
        this.formElements = {
            name: {},
            category: {},
            price: {}
        }
    }

    setElement = (element) => {
        if(element !== null){
             this.formElements[element.name].element = element;   
        }
    }

    handleAdd = () => {
        let data = {};
        Object.values(this.formElements).forEach( v => {
            data[v.element.name] = v.element.value;
            v.element.value = "";
        })

        this.props.callback(data);
        this.formElements.name.element.focus();
    }

    render() {
        return <React.Fragment>
            <div className="form-group p-2">
                <label>Name</label>
                <input className="form-control" name="name"
                autoFocus={true} ref={this.setElement} />
            </div>

            <div className="form-group p-2">
                <label>Category</label>
                <input  className="from-control" name="category" 
                ref={this.setElement} />
            </div>

            <div className="form-group p-2">
                <label>Price</label>
                <input className="form-control" name="price" ref={this.setElement} />
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
            </div>
        </React.Fragment>
    }
}