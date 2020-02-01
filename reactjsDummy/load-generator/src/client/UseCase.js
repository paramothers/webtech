import React from "react";

export default function UseCase(props) {
  return (
    <div className="m-2 col">
      <button
        onClick={() => props.callback(props.useCase)}
        className="btn col-md p-3"
        id="useCaseButton"
      >
        {props.useCase.name}
      </button>
    </div>
  );
}
