import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import topicReducer from './topic/topicSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        topic: topicReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
