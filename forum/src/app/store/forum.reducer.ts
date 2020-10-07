import { createReducer, on } from '@ngrx/store';
import { getAllForums, AddForum } from './forum.actions';

export const initialState = [];

const _counterReducer = createReducer(
  initialState,
  on(getAllForums, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
