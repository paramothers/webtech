import {
  STATE_START_CREATING,
  STATE_END_EDITING,
  STATE_START_EDITING
} from "../actionCreators/stateActionsCreators";
import { initialData } from "../initialData";

export default function(storeData, action) {
  switch (action.type) {
    case STATE_START_CREATING:
    case STATE_START_EDITING:
      return {
        ...storeData,
        editing: true,
        selectedId:
          action.type === STATE_START_EDITING ? action.payload.id : -1,
        selectedType: action.dataType
      };
    case STATE_END_EDITING:
      return {
        ...storeData,
        editing: false
      };
    default:
      return storeData || initialData.stateData;
  }
}
