import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './reducers';

export const selectAuthFeature = createFeatureSelector<AuthState>('authState');
export const selectuserInfo = createSelector(selectAuthFeature, authState => authState.userInfo);
