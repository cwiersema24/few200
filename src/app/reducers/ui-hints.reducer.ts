import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../action/app.actions';


export interface UiHintState {
  hasError: boolean;
  error: string;
}

const initialState: UiHintState = {
  hasError: false,
  error: null
};

const reducerFunction = createReducer(
  initialState,
  on(actions.applicationFeatureError, (s, a) => ({ ...s, hasError: true, error: a.errorMessage })),
  on(actions.clearApplicationFeatureError, (s, a) => ({ ...s, hasError: false, error: null }))
);
export function reducer(state: UiHintState, action: Action): UiHintState {
  return reducerFunction(state, action);
}
