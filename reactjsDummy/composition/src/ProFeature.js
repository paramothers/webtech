import React from "react";

/* export function ProFeature(FeatureComponent) {
  return function(props) {
    if (props.pro) {
      let { pro, ...childProps } = props;
      return <FeatureComponent {...childProps} />
    } else {
      return (
        <h5 className="bg-warning text-white text-center">
          This is a Prop Feature
        </h5>
      );
    }
  }
} */

export function ProFeature(props){

  if(props.pro){
    return props.render("Pro Feature");
  } else{
    return (
      <h5 className="bg-warning text-white text-center">
        This is a Pro Feature
      </h5>
    )
  }
}
