import { PlantsTypes } from "../../@types";
import produce from "immer";
import { createReducer, createActions, DefaultActionTypes, DefaultActionCreators } from "reduxsauce";
import { AnyAction } from "redux";

interface FilteredProps extends AnyAction {
  tag: string;
}
export interface GetSuccessProps extends AnyAction {
  plants: PlantsTypes[]
}
export interface GetRequestProps extends AnyAction {
  query: string;
}

interface ITypes extends DefaultActionTypes {
  GET_REQUEST: 'getRequest';
  GET_SUCCESS: 'getSuccess';
  GET_FAILURE: 'getFailure';
  FILTERED: 'filtered';
  FETCH_MORE: 'fetchMore';
}

interface ICreators extends DefaultActionCreators {
  getRequest: (query: string) => GetRequestProps;
  getSuccess: (plants: PlantsTypes[]) => GetSuccessProps;
  getFailure: () => AnyAction;
  filtered: (tag: string) => FilteredProps;
  fetchMore: () => AnyAction;
}

interface INITIAL_STATE_PROS {
  page: number;
  limit: number;
  loading: boolean;
  loadingMore: boolean;
  error: boolean;
  plants: PlantsTypes[];
  filteredPlants: PlantsTypes[];
}

const INITIAL_STATE: INITIAL_STATE_PROS = {
  page: 0,
  limit: 8,
  loading: false,
  loadingMore: false,
  error: false,
  plants: [],
  filteredPlants: []
}

export const { Types, Creators } = createActions<ITypes, ICreators>({
  getRequest: ['query'],
  getSuccess: ['plants'],
  getFailure: [],
  filtered: ['tag'],
  fetchMore: []
}, {
  prefix: 'PLANTS_'
})

const filtered = (state = INITIAL_STATE, action: FilteredProps) => {
  return produce(state, (draft) => {
    if (action.tag == 'all') {
      draft.filteredPlants = state.plants;
    } else {
      draft.filteredPlants = state.plants.filter(plant => plant.environments.includes(action.tag));
    }
  })
}
const fetchMore = (state = INITIAL_STATE, action: AnyAction) => {
  return produce(state, (draft) => {
    draft.loadingMore = true;
    draft.page = state.page + 1;
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
    if (action.plants && action.plants.length > 0) {
      if (state.page > 1) {
        draft.plants = [...state.plants, ...action.plants];
        draft.filteredPlants = [...state.filteredPlants, ...action.plants];
      } else {
        draft.plants = action.plants;
        draft.filteredPlants = action.plants;
      }
    }
    draft.loading = false;
    draft.loadingMore = false;
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
  [Types.FILTERED]: filtered,
  [Types.FETCH_MORE]: fetchMore,
})