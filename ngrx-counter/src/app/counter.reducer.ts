import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, incrementBy } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state:any) => state + 1),
  on(incrementBy, (state:any,payload:{value:number}) => state + payload.value),
  on(decrement, (state:any) => state - 1),

  on(reset, (state:any) => 0)
);
