import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INews } from '../components/NewsItem/NewsItem'
// ...

const initialState : {
  news : INews[],
  events : INews[] // Тот же интерфейс
} = {
  news : [],
  events : []
}

const appSlice = createSlice({
  name : "appSlice",
  initialState,
  reducers : {
    setNews(state, action : PayloadAction<INews[]>) {
      state.news = action.payload
    },

    setEvents(state, action : PayloadAction<INews[]>) {
      state.events = action.payload
    }
  }
  
})
const store = configureStore({
  reducer: {
    app : appSlice.reducer
  },
})
export type RootState = ReturnType<typeof store.getState>

const AppActions = appSlice.actions
export {AppActions}
export default store