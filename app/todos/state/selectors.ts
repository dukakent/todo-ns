import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from './reducers';

export const selectTodosFeature = createFeatureSelector<TodosState>('todosState');
export const selectTodos = createSelector(selectTodosFeature, featureState => featureState.todos);
