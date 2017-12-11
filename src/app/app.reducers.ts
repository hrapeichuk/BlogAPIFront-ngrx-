import { createSelector } from '@ngrx/store';

import * as articleReducer from './reducers/article.reducers';

export interface AppState {
  article: articleReducer.State;
}

export const reducers = {
  article: articleReducer.articleReducer
};

export const getArticlesState = (state: AppState) => state.article;

export const getArticles = createSelector(getArticlesState, articleReducer.getArticles);
export const getSelectedId = createSelector(getArticlesState, articleReducer.getSelectedId);
