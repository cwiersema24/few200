import * as fromList from './list.reducer';
import { createSelector, createFeatureSelector, ActionReducer, ActionReducerMap } from '@ngrx/store';
import * as models from '../models';
import { DashboardSummary, MediaListItem } from '../models';
export const featureName = 'mediaFeature';
import * as fromUIHints from './ui-hints.reducer';

export interface MediaState {
  list: fromList.MediaState2;
  uiHints: fromUIHints.UiHintsState;
}

export const reducers: ActionReducerMap<MediaState> = {
  list: fromList.reducer,
  uiHints: fromUIHints.reducer
};

// SELECTORS

// 1. Feature Selector
const selectFeature = createFeatureSelector<MediaState>(featureName);
// 2. A Selector Per Branch
const selectListBranch = createSelector(
  selectFeature,
  f => f.list
);
const selectUiHintsBranch = createSelector(
  selectFeature,
  f => f.uiHints
);
// 3. Helpers (optional)
const { selectAll: selectAllListItems } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need.
export const selectListFilter = createSelector(
  selectUiHintsBranch,
  b => b.listSort
);

const selectMediaListUnfiltered = createSelector(
  selectAllListItems,
  m => [...m.sort((lhs: MediaListItem, rhs: MediaListItem) => {
    if (lhs.title.toLowerCase() > rhs.title.toLowerCase()) {
      return 1;
    }
    if (lhs.title.toLowerCase() < rhs.title.toLowerCase()) {
      return -1;
    }
    return 0;
  }).map(r => ({ ...r, isTemporary: r.id.startsWith('TEMP') }))] as models.MediaListItem[]
);

// TODO: We need a selector that returns a MediaListItem[]
export const selectDashboardModel = createSelector(
  selectMediaListUnfiltered,
  m => {
    return {
      numberOfBooks: m.filter(b => b.format === 'Book').length,
      numberOfGames: m.filter(b => b.format === 'Game').length,
      numberOfMovies: m.filter(b => b.format === 'Movie').length,
      numberOfShows: m.filter(b => b.format === 'Show').length
    } as models.DashboardSummary;
  }
);

export const selectMediaList = createSelector(
  selectMediaListUnfiltered,
  selectListFilter,
  (list, filter) => {
    if (filter === 'All') {
      return list;
    } else {
      return list.filter(item => item.format === filter);
    }
  }
);

export const selectMediaLoaded = createSelector(
  selectUiHintsBranch,
  b => b.mediaLoaded
);
