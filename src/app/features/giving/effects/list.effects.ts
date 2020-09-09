import { ListEntity } from '../reducers/list.reducer';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions/list.actions';
import { map } from 'rxjs/operators';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

const givingDays: ListEntity[] = [
  {
    id: '1',
    name: 'Sue Jones',
    holiday: 'Birthday',
    date: new Date('Sep 13, 2020'),
    needsCard: true,
    needsGift: false,
    cardCompleted: true,
    giftCompleted: false,
  },
  {
    id: '2',
    name: 'Bob Smith',
    holiday: 'Christmas',
    date: new Date('Dec 25, 2020'),
    needsCard: true,
    needsGift: true,
    cardCompleted: false,
    giftCompleted: false,
  },
  {
    id: '3',
    name: 'Jeff Gonzalez',
    holiday: 'Birthday',
    date: new Date('Apr 20, 2020'),
    needsCard: true,
    needsGift: false,
    cardCompleted: true,
    giftCompleted: false,
  }
];

@Injectable()
export class ListEffects {

  loadData$ = createEffect(() =>
    this.actions$.pipe(ofType(actions.loadGivingData), map(() => actions.loadGivingDataSucceeded({ payload: givingDays }))
    )
  );

  addItem$ = createEffect(() => this.actions$.pipe(ofType(actions.addedGivingItem),
    map(p => actions.addedGivingSucceeded({ tempId: p.payload.id, payload: p.payload }))), { dispatch: true });

  constructor(private actions$: Actions) { }
}
