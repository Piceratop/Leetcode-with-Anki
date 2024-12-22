import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SettingsState {
   primaryColor: string
   darkMode: boolean
}

const initialState: SettingsState = {
   primaryColor: '#FF051B',
   darkMode: false,
}

export const settingsSlice = createSlice({
   name: 'settings',
   initialState,
   reducers: {
      setPrimaryColor: (state, action: PayloadAction<string>) => {
         state.primaryColor = action.payload
      },
      toggleDarkMode: (state) => {
         state.darkMode = !state.darkMode
      },
   },
})

export const { setPrimaryColor, toggleDarkMode } = settingsSlice.actions
export default settingsSlice.reducer
