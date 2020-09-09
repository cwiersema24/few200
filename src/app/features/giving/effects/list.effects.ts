import { ListEntity } from '../reducers/list.reducer';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions/list.actions';
import { map } from 'rxjs/operators';

const givingDays: ListEntity[] = [
  {
    id: '1',
    name: 'Sue Jones',
    holiday: 'Birthday',
    date: new Date(2020, 8, 13),
    needsCard: true,
    needsGift: false,
    cardCompleted: true,
    giftCompleted: false,
  },
  {
    id: '2',
    name: 'Bob Smith',
    holiday: 'Christmas',
    date: new Date(2020, 11, 25),
    needsCard: true,
    needsGift: true,
    cardCompleted: false,
    giftCompleted: false,
  },
  {
    id: '3',
    name: 'Jeff Gonzalez',
    holiday: 'Birthday',
    date: new Date(2020, 3, 20),
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

  constructor(private actions$: Actions) { }
}
