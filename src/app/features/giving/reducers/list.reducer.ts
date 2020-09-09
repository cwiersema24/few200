import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';



export interface ListEntity {
  id: string;
  name: string;
  holiday: string;
  date: Date;
  needsCard: boolean;
  needsGift: boolean;
  cardCompleted: boolean;
  giftCompleted: boolean;
}

export interface GivingState extends EntityState<ListEntity> {

}

export const adapter = createEntityAdapter<ListEntity>();

const initialState = adapter.getInitialState();
// const initialState: GivingState = {
//   ids: ['1', '2', '3'],
//   entities: {
//     1: { id: '1', name: 'Sue Jones', holiday: 'Birthday', date: new Date('Sep 13, 2020'), needsCard: true, needsGift: false, cardCompleted: true, giftCompleted: false },
//     2: { id: '1', name: 'Bob Smith', holiday: 'Christmas', date: new Date('Dec 25, 2020'), needsCard: true, needsGift: true, cardCompleted: false, giftCompleted: false },
//     3: { id: '1', name: 'Jeff Gonzalez ', holiday: 'Birthday', date: new Date('Apr 20, 2020'), needsCard: true, needsGift: false, cardCompleted: true, giftCompleted: false }
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(actions.addedGivingItem, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.loadGivingDataSucceeded, (s, a) => adapter.setAll(a.payload, s)),
  on(actions.addedGivingSucceeded, (s, a) => {
    const tempState = adapter.removeOne(a.tempId, s);
    return adapter.addOne(a.payload, tempState);
  }),
  on(actions.completedCard, (s, a) => adapter.updateOne({ id: a.payload.id, changes: { cardCompleted: !a.payload.cardCompleted } }, s)),
  on(actions.completedGift, (s, a) => adapter.updateOne({ id: a.payload.id, changes: { giftCompleted: !a.payload.giftCompleted } }, s)),
);

export function reducer(state: GivingState = initialState, action: Action): GivingState {
  return reducerFunction(state, action);
}
