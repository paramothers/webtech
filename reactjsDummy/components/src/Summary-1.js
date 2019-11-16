import React from "react";
// import { CallbackButton } from "./CallbackButton";
import { SimpleButton } from "./SimpleButton";
import { HooksButton } from "./HooksButton";

const createInnerElements = names => {
  let arrayElements = [];
  for (let i = 0; i < names.length; i++) {
    arrayElements.push(
      <div>{`${names[i]} contains ${names[i].length} letters`}</div>
    );
  }
  return arrayElements;
};

const createInnerElements2 = names =>
  names.map(name => (
    <div key={name}>{`${name} contains ${name.length} letters`}</div>
  ));
/* 
export function Summary(Props) {
  return (
    <h4 className="bg-warning text-white text-center p-2">
      {createInnerElements2(Props.names)}
    </h4>
  );
}
 */

export function Summary(props) {
  // props.name = `${props.name} hai`;
  if (props.name.length > 0) {
    return (
      <>
        <td>{props.index + 1}</td>
        <td>{props.name}</td>
        <td>{props.name.length}</td>
        <td>
          <SimpleButton
            className="btn btn-warning btn-sm m-1"
            callback={props.reverseCallback}
            text={`Reverse (${props.name})`}
          />
          <SimpleButton
            className="btn btn-info btn-sm m-1"
            callback={props.promoteCallback}
            text={`Promote (${props.name})`}
          ></SimpleButton>
          <HooksButton
            className="btn btn-info btn-sm m-1"
            text={`Promote 2 (${props.name})`}
            callback={() => props.promoteCallback(props.name)}
          ></HooksButton>
        </td>
      </>
    );
  } else {
    return null;
  }
}
