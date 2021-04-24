import { TagsType } from "../../@types";
import produce from "immer";
import { createReducer, createActions, DefaultActionTypes, DefaultActionCreators } from "reduxsauce";
import { AnyAction } from "redux";

interface ActiveToggleProps extends AnyAction {
  active: string;
}
export interface GetSuccessProps extends AnyAction {
  tags: TagsType[]
}

interface ITypes extends DefaultActionTypes {
  GET_REQUEST: 'getRequest';
  GET_SUCCESS: 'getSuccess';
  GET_FAILURE: 'getFailure';
  TOGGLE_ACTIVE: 'toggleActive';
}

interface ICreators extends DefaultActionCreators {
  getRequest: () => AnyAction;
  getSuccess: (tags: TagsType[]) => GetSuccessProps;
  getFailure: () => AnyAction;
  toggleActive: (tag: string) => ActiveToggleProps;
}

interface INITIAL_STATE_PROS {
  active: string;
  loading: boolean;
  error: boolean;
  tags: TagsType[]
}

const INITIAL_STATE: INITIAL_STATE_PROS = {
  active: 'all',
  loading: false,
  error: false,
  tags: []
}

export const { Types, Creators } = createActions<ITypes, ICreators>({
  getRequest: [],
  getSuccess: ['tags'],
  getFailure: [],
  toggleActive: ['active']
}, {
  prefix: 'TAGS_'
})
// console.log(Types, Creators)


const toggleActive = (state = INITIAL_STATE, action: ActiveToggleProps) => {
  return produce(state, (draft) => {
    draft.active = action.active;
  })
}

const getRequest = (state = INITIAL_STATE, action: AnyAction) => {
  return produce(state, (draft) => {
    draft.loading = true;
    draft.error = false;
  })
}
const getSuccess = (state = INITIAL_STATE, action: GetSuccessProps) => {
  return produce(state, (draft) => {
    draft.tags = action.tags;
    draft.loading = false;
    draft.error = false;
  })
}
const getFailure = (state = INITIAL_STATE, action: AnyAction) => {
  return produce(state, (draft) => {
    draft.loading = false;
    draft.error = true;
  })
}

export default createReducer<INITIAL_STATE_PROS, AnyAction>(INITIAL_STATE, {
  [Types.GET_REQUEST]: getRequest,
  [Types.GET_SUCCESS]: getSuccess,
  [Types.GET_FAILURE]: getFailure,
  [Types.TOGGLE_ACTIVE]: toggleActive,
})