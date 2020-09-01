import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';


// Describe, for TYPESCRIPT what the application state looks like.

export interface AppState {
  counter: fromCounter.CounterState;
}

// Create an object which points to the reducer functions that maintain the state

export const reducers = {
  counter: fromCounter.reducer
};

// Selector functions

// export const selectCurrentCount = (state: AppState) => state.counter.current;

const selectCounterBranch = (state: AppState) => state.counter;

export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);

export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);

export const selectAtZero = createSelector(selectCurrentCount, c => c === 0);
