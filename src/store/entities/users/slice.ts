import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../../data/normalized-mock';

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce((acc: Record<string, any>, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  currentUser: null as string | null,
  isAuthenticated: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state) => {
      state.currentUser = 'User';
      state.isAuthenticated = true;
      localStorage.setItem('user', 'User');
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
    },
    loadUserFromStorage: (state) => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        state.currentUser = JSON.parse(savedUser);
        state.isAuthenticated = true;
      }
    },
  },
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id: string) => state.entities[id],
    selectUsersEntities: (state) => state.entities,
    selectCurrentUser: (state) => state.currentUser,
    selectIsAuthenticated: (state) => state.isAuthenticated,
  },
});

export const { login, logout, loadUserFromStorage } = usersSlice.actions;
export const { selectUsersIds, selectUserById, selectUsersEntities, selectCurrentUser, selectIsAuthenticated } = usersSlice.selectors;
export default usersSlice.reducer;