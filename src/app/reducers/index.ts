import * as fromCounter from './counter.reducer';
import * as fromUiHints from './ui-hints.reducer';
import { createSelector } from '@ngrx/store';


// Describe, for TYPESCRIPT what the application state looks like.

export interface AppState {
  counter: fromCounter.CounterState;
  uiHints: fromUiHints.UiHintState;
}

// Create an object which points to the reducer functions that maintain the state

export const reducers = {
  counter: fromCounter.reducer,
  uiHints: fromUiHints.reducer
};

// Selector functions

// export const selectCurrentCount = (state: AppState) => state.counter.current;

const selectCounterBranch = (state: AppState) => state.counter;
const selectUiHintsBranch = (state: AppState) => state.uiHints;


export const selectHasError = createSelector(
  selectUiHintsBranch,
  b => b.hasError
);

export const selectError = createSelector(
  selectUiHintsBranch,
  b => b.error
);

export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);

export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);

export const selectAtZero = createSelector(selectCurrentCount, c => c === 0);
