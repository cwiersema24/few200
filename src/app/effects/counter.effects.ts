import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../action/counter.actions';
import * as applicationActions from '../action/app.actions';

@Injectable()
export class CounterEffects {
  // logIt$ = createEffect(() => this.actions$.pipe(tap(a => console.log(a.type))), { dispatch: false });
  storeCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false });

  readCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationActions.applicationStarted),
      map(() => localStorage.getItem('by')),
      filter(by => by !== null),
      map(by => parseInt(by, 10)),
      map(by => counterActions.countBySet({ by }))
    )
  );

  constructor(private actions$: Actions) { }
}
