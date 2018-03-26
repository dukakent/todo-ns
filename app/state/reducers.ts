import { ActionReducerMap, MetaReducer, ActionReducer, Action } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

export class AppState {
  constructor(public appName: string) {}
}

export const reducers: ActionReducerMap<AppState> = {
  appName: () => 'Todos Mobile Application'
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: Action): AppState {
    console.log('ACTION:', action.type);

    return reducer(state, action);
  };
}

// todo: disable storeFreeze in production
export const metaReducers: MetaReducer<AppState>[] = [logger, storeFreeze];
