import React from "react";

export default function UseCase(props) {

  let matched = props.useCase.name === props.selectedUseCaseName;
  return (
    
    <div className="m-2 col">
      <button
        onClick={() => props.callback(props.useCase)}
        className="btn col-md p-3"
        id="useCaseButton"        
        style={{'background-color': matched ?'#E05CC1':''}}
      >
        {props.useCase.name}
      </button>
    </div>
  );
}
