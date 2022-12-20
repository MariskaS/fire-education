import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import topicReducer from './topic/reducers';
import searchReducer from './search/reducers';

export const store = configureStore({
    reducer: {
        topic: topicReducer,
        search: searchReducer,
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
