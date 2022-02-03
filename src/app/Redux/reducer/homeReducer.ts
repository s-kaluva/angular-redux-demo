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

const homeReducer = createReducer(initialState,
    on(homeAction.login, (state) => ({...state, isLoading: true})),
    on(homeAction.registeredUsersSuccess, (state, result) => (result.payload))
    );
    

export function HomeReducer(state: any | undefined, action: Action) {
  return homeReducer(state, action);
}