import { Action, createReducer, on } from '@ngrx/store';
import * as homeAction from '../actions/homeAction';
import { homeServiceService} from '../api/home-service.service';
import { registeredUsersFailure } from '../actions/homeAction';

export const initialState = [];

/* const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
); */

const projReducer = createReducer(initialState,
    on(homeAction.memberships, (state) => ({...state, isLoading: true})),
    on(homeAction.membershipsSuccess, (state, result) => (result.payload))
    );
    

export function projectReducer(state: any | undefined, action: Action) {
  return projReducer(state, action);
}