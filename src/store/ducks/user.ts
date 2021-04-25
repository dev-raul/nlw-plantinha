import { TagsType } from "../../@types";
import produce from "immer";
import { createReducer, createActions, DefaultActionTypes, DefaultActionCreators } from "reduxsauce";
import { AnyAction } from "redux";

interface setNameProps extends AnyAction {
  name: string;
}

interface ITypes extends DefaultActionTypes {
  SET_NAME: 'setName';
}

interface ICreators extends DefaultActionCreators {
  setName: (name: string) => setNameProps;
}

interface INITIAL_STATE_PROS {
  name: string;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE: INITIAL_STATE_PROS = {
  name: '',
  loading: false,
  error: false,
}

export const { Types, Creators } = createActions<ITypes, ICreators>({
  setName: ['name']
}, {
  prefix: 'USER_'
})


const setName = (state = INITIAL_STATE, action: setNameProps) => {
  return produce(state, (draft) => {
    draft.name = action.name;
  })
}

export default createReducer<INITIAL_STATE_PROS, AnyAction>(INITIAL_STATE, {
  [Types.SET_NAME]: setName,
})