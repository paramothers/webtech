import React, { Component } from "react";
import UseCase from "./UseCase";
import ExecutionResultRender from "./ExecutionResultRender";
import axios from "axios";

export default class PocContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUseCase: this.props.useCases[0],
      serverOutput: null,
      selectedUseCaseName:this.props.useCases[0].name
    };
  }
  render() {
    return (
      <div className="container" id="myPocContainer">
        <div className="row">
          <h2 className="col text-center" id="myUsecases">
            Available Use Cases
          </h2>
        </div>

        <div className="row">
          {this.props.useCases &&
            this.props.useCases.map(tempUseCase => (
              <UseCase
                key={tempUseCase.id}
                useCase={tempUseCase}
                callback={this.setSelectedUseCase}
                selectedUseCaseName={this.state.selectedUseCaseName}
              />
            ))}
        </div>

        <div className="row" id="myHorizontalSeprator">
          Usecase Results
        </div>
        {this.state.serverOutput != null && (
          <div className="row">
            <ExecutionResultRender serverOutput={this.state.serverOutput} />
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.executeCommand(this.state.selectedUseCase);
  }

  //set current usecase by click
  setSelectedUseCase = useCase => {
    console.log("Selected Usecase ", useCase);
    this.setState({ serverOutput: 'Please wait..', selectedUseCase: useCase, selectedUseCaseName: useCase.name});
    this.executeCommand(useCase);
  };

  executeCommand = useCase => {
    axios
      .get("http://localhost:4000/execute", {
        params: { ...useCase }
      })
      .then(res => {
        const data = res.data;
        this.setState({ serverOutput: data, selectedUseCase: useCase });
      });
  };
}
