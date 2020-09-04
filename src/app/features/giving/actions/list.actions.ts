import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';

let currentId = 0;

export const addedGivingItem = createAction(
  '[giving] giving holiday created',
  ({ name, holiday, date, needsCard, needsGift }:
    { name: string, holiday: string, date: Date, needsCard: boolean, needsGift: boolean }) => ({
      payload: {
        name, holiday, date, needsCard, needsGift,
        cardCompleted: false, giftCompleted: false,
        id: (currentId++).toString(),
      } as ListEntity
    })
);

export const completedCard = createAction(
  '[giving] giving card completed',
  props<{ payload: ListEntity }>()
);

export const completedGift = createAction(
  '[giving] giving gift completed',
  props<{ payload: ListEntity }>()
);

