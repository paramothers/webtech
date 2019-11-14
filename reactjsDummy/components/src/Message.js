import React from "react";

export function Message(props) {

  let classes = props.name === "bob" ? "bg-warning p-2" : "bg-success text-white text-center p-2"
  
  switch(props.name){

    case "jain":
        classes = "bg-warning p-2";
        break;
    case "bob":
        classes = "bg-success text-white text-center p-2";
        break;
    default:
        classes = "bg-danger p-2"
  }
  
  return (
    <h4 className={classes}>
      {props.name} {props.greeting}
    </h4>
  );
  
}
