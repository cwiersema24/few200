import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as appActions from '../../../action/app.actions';
import * as listActions from '../actions/list.actions';
import { map } from 'rxjs/operators';
import { Injectable, ViewChild } from '@angular/core';

@Injectable()
export class GivingAppEffects {
  load$ = createEffect(() => this.actions$.pipe(ofType(appActions.applicationStarted),
    map(() => listActions.loadGivingData())));

  constructor(private actions$: Actions) { }
}
