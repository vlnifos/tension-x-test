import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { examApi } from "features/exam/examApi"
import examReducer from "features/exam/examSlice"
import addQuestionReducer from "features/add-question/addQuestionSlice"

export const store = configureStore({
  reducer: {
    exam: examReducer,
    addQuestion: addQuestionReducer,
    [examApi.reducerPath]: examApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(examApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
