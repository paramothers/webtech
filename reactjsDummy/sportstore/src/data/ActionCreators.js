
import { ActionTypes } from './Types';
//import {data as phData} from './placeholderData';

import { RestDataSource } from "./RestDataSource";

const dataSource = new RestDataSource();

export const loadData = (datType, params) => ({
    type: ActionTypes.DATA_LOAD,
    // payload: {
    //     dataType: datType,
    //     data: phData[datType]
    // }

    payload: dataSource.GetData(datType, params).then(response => ({ datType, data: response.data, total: Number(response.headers["x-total-count"]), params }))
});

export const setPageSize = (newSize) => ({ type: ActionTypes.DATA_SET_PAGESIZE, payload: newSize});
export const setSortProperty = (newProp) => ({type:ActionTypes.DATA_SET_SORT_PROPERTY, payload: newProp});