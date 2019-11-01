
import {ActionTypes} from './Types';
import {data as phData} from './placeholderData';

export const loadData = (datType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: datType,
        data: phData[datType]
    }
});