import { MyPlantTypes, TagsType } from "../../@types";
import produce from "immer";
import { createReducer, createActions, DefaultActionTypes, DefaultActionCreators } from "reduxsauce";
import { AnyAction } from "redux";
import plants from "./plants";

interface addProps extends AnyAction {
  plant: MyPlantTypes;
}
interface removeProps extends AnyAction {
  plant: MyPlantTypes;
}

interface ITypes extends DefaultActionTypes {
  ADD_PLANT: 'plant';
  REMOVE_PLANT: 'plant';
  SORT_PLANT: '';
}

interface ICreators extends DefaultActionCreators {
  addPlant: (plant: MyPlantTypes) => addProps;
  removePlant: (plant: MyPlantTypes) => removeProps;
  sortPlant: () => AnyAction;
}

interface INITIAL_STATE_PROS {
  myplants: MyPlantTypes[];
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE: INITIAL_STATE_PROS = {
  myplants: [],
  loading: false,
  error: false,
}

export const { Types, Creators } = createActions<ITypes, ICreators>({
  addPlant: ['plant'],
  removePlant: ['plant'],
  sortPlant: ['']
}, {
  prefix: 'MYPLANT_'
})


const addPlant = (state = INITIAL_STATE, action: addProps) => {
  return produce(state, (draft) => {
    let joinPlants = [...state.myplants, action.plant]

    joinPlants = joinPlants.sort((a, b) =>
      Math.floor(new Date(a.dateTimeNotification).getTime() / 1000 -
        Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
      )
    )

    draft.myplants = joinPlants;
  })
}

const removePlant = (state = INITIAL_STATE, action: removeProps) => {
  return produce(state, (draft) => {
    draft.myplants = state.myplants.filter(p => !p.uuid || p.uuid !== action.plant.uuid);
  })
}

const sortPlant = (state = INITIAL_STATE, action: addProps) => {
  return produce(state, (draft) => {
    let sort = state.myplants.sort((a, b) =>
      Math.floor(new Date(a.dateTimeNotification).getTime() / 1000 -
        Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
      )
    )
    draft.myplants = sort;
  })
}

export default createReducer<INITIAL_STATE_PROS, AnyAction>(INITIAL_STATE, {
  [Types.ADD_PLANT]: addPlant,
  [Types.REMOVE_PLANT]: removePlant,
  [Types.SORT_PLANT]: sortPlant,
})