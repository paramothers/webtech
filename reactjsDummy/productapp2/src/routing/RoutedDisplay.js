import React, { Component } from "react";
import {ProductTable} from "../product/ProductTable";
import {ProductEditor} from "../product/ProductEditor";
import  {EditorConnector} from "../store/connectors/EditorConnector";

import {PRODUCTS} from "../store/dataTypes";
import {TableConnector} from "../store/connectors/TableConnector";
import {Link} from "react-router-dom";
import {SupplierTable} from "../supplier/SupplierTable";
import {SupplierEditor} from "../supplier/SupplierEditor";

export const RoutedDisplay = (dataType) => {

    const ConnectedEditor = EditorConnector(dataType, dataType === PRODUCTS ? ProductEditor: SupplierEditor);
    const ConnectedTable = TableConnector(dataType, dataType === PRODUCTS ? ProductTable : SupplierTable);

    return class extends Component{
        render(){

            const modeParam = this.props.match.params.mode;
            if(modeParam === "edit" || modeParam === "create"){
                return <ConnectedEditor key={this.props.match.params.id || -1} />
            }else{
                return <div className="m-2">
                    <ConnectedTable />
                    <div className="text-center">
                        <Link to={`/${dataType}/create`} className="btn btn-primary m-1">Create</Link>
                    </div>
                </div>
            }
        }
    }
}