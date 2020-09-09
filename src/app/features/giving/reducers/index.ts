import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromList from './list.reducer';
import * as models from '../model/';
import { GivingListItem } from '../model';

export const featureName = 'givingFeature';

export interface GivingState {
  list: fromList.GivingState;
}

export const reducers: ActionReducerMap<GivingState> = {
  list: fromList.reducer,
};

// SELECTORS

// 1. Feature Selector
const selectFeature = createFeatureSelector<GivingState>(featureName);
// 2. A Selector Per Branch
const selectListBranch = createSelector(
  selectFeature,
  f => f.list
);

// 3. Helpers (optional)
const { selectAll: selectAllListItems } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need.

const selectGivingListUnfiltered = createSelector(
  selectAllListItems,
  m => [...m.sort((lhs: GivingListItem, rhs: GivingListItem) => {
    if (lhs.date > rhs.date) {
      return 1;
    }
    if (lhs.date < rhs.date) {
      return -1;
    }
    return 0;
  })]// .map(r => ({ ...r }))] as models.GivingListItem[]
);


// TODO: We need a selector that returns a MediaListItem[]

export const getUpcommingList = createSelector(
  selectAllListItems,
  (list) => {
    return list.filter(item => item.date >= new Date());
  }
);

export const getPastList = createSelector(
  selectGivingListUnfiltered,
  (list) => {
    return list.filter(item => item.date < new Date());
  }
);

export const selectDashboardModel = createSelector(
  selectGivingListUnfiltered,
  m => {
    return {
      numberOfUpcomming: m.filter(b => b.date > new Date()).length,
      numberOfCards: m.filter(b => b.needsCard === true && b.cardCompleted === false).length,
      numberOfGifts: m.filter(b => b.needsGift === true && b.giftCompleted === false).length,
    } as models.DashboardSummary;
  }
);

