import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Message } from "./Message";
import {Summary} from "./Summary";

export default function App() {
  return (
    <div>
      <h1 className="bg-primary text-center text-white p-2">Hellow Pavalan</h1>
      <Message greeting="Hello Param" name="Pavalan"> </Message>
      <Summary /> 
    </div>
  )
}
