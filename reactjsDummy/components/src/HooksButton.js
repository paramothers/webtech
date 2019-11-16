import React, { useState } from "react";

export function HooksButton(props) {
  const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);

  const handleClick = () => {
    props.incrementCallback(5);
    setHasButtonBeenClicked(true);
    props.callback();
  };

  return (
    <button
      onClick={handleClick}
      disabled={props.disabled === "true" || props.disabled === true}
      className={props.className}
    >
      {props.text} {props.counter}
      {hasButtonBeenClicked && <div>Button Clicked !</div>}
    </button>
  );
}
