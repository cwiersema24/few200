import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';
import { GivingListItem } from '../model';

let currentId = 0;

export const addedGivingItem = createAction(
  '[giving] giving holiday created',
  ({ name, holiday, date, needsCard, needsGift }:
    { name: string, holiday: string, date: Date, needsCard: boolean, needsGift: boolean }) => ({
      payload: {
        name, holiday, date, needsCard, needsGift,
        cardCompleted: false, giftCompleted: false,
        id: 'Temp' + currentId++
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

export const addedGivingSucceeded = createAction(
  '[giving] added Giving item succeeded',
  props<{ tempId: string, payload: ListEntity }>()
);

export const addedGivingFailure = createAction(
  '[giving] added Giving item failed',
  props<{ payload: ListEntity, errorMessage: string }>()
);

export const loadGivingData = createAction(
  '[giving] load Giving data'
);

export const loadGivingDataSucceeded = createAction(
  '[giving] loading Giving data succeeded',
  props<{ payload: GivingListItem[] }>()
);

export const loadGivingDataFailed = createAction(
  '[giving] loading Giving data failed',
  props<{ message: string }>()
);


