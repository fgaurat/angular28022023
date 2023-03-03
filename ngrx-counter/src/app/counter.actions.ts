import { createAction, props } from '@ngrx/store';

interface IncValue{
  value:number
}

export const increment = createAction('[Counter Component] Increment');
export const incrementBy = createAction('[Counter Component] IncrementBy', props<IncValue>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');





// dispatch(incrementBy({value:12}))
