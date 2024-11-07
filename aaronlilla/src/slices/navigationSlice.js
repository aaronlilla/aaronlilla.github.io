import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 'about',
  pages: ['about', 'contact', 'resume', 'portfolio'],
  showPortfolioSubItems: false,
  selectedPortfolioSubItem: "TC2 Waitlist",
  isHamburgerOpen: false,
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    selectPage: (state, action) => {
      if (state.pages.includes(action.payload)) {
        state.currentPage = action.payload;
        state.showPortfolioSubItems = action.payload === 'portfolio';
      }
    },
    selectPortfolioSubItem: (state, action) => {
      state.selectedPortfolioSubItem = action.payload;
    },
    setViewportSize: (state, action) => {
      state.viewport = action.payload;
    },
    toggleHamburgerMenu: (state) => {
      state.isHamburgerOpen = !state.isHamburgerOpen;
    },
  },
});

export const { selectPage, selectPortfolioSubItem, setViewportSize, toggleHamburgerMenu } = navigationSlice.actions;
export default navigationSlice.reducer;
